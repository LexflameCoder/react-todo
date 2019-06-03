
import { getTodo } from './getTodo'

const generateID = (start, end) => {
  return Math.random().toString(36).substring(start, end) + Math.random().toString(36).substring(start, end) +  Math.random().toString(36).substring(start, end);
}


const randomCardKey = (length) => {
  var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');

  if (!length) {
      length = Math.floor(Math.random() * chars.length);
  }

  var str = '';
  for (var i = 0; i < length; i++) {
      str += chars[Math.floor(Math.random() * chars.length)];
  }
  return str;
}

const randomKey = () => {
  return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10);
}

export const app = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_CARD':
      return Object.assign({}, state, {
        cards: [
          ...state.cards,
          {
            id: generateID(2, 15),
            key: randomCardKey(),
            text: action.text ,
            todos: []
          }
        ]
      })
    case 'ADD_TODO': 
      /* 
        In this case i check whether or not particular card's index is equal to map-index 
        and if it is, i return this card and add to his "todos" property new "todo" item,
        which text is taken from action.text
      */
      return Object.assign({}, state, {
        cards: state.cards.map((card, cardIndex) => {
          if(cardIndex === action.index) {
            return Object.assign({}, card, {
              todos: [
                ...state.cards[cardIndex].todos,
                {
                  id: generateID(3, 9),
                  key: randomKey(),
                  editing: false,
                  text: action.text,
                  points: []
                }
              ]
            })
          } else {
            return card
          }
        })
      })
    case 'TOGGLE_EDIT_TODO':
      /*
        In this case i check whether or not cardIndex equals action.cardIndex
          1) if it's true,
             i continue and return new Object
             in which i return all card's property but change
             "todos" property. After it i check whether or not 
             todoIndex equals action.todoIndex and if it's true
             i return new Object with all todo's properties but 
             inverted "editing" property and changed "text" property
             which value is taken from action.todoText

             If todoIndex doesn't equal action.todoIndex i return
             existing todo object             

          2) if it's not i return card  
      */
      return Object.assign({}, state, {
        cards: state.cards.map((card, cardIndex) => {
          if(cardIndex === action.cardIndex) {
            // Checking card's index and action's card index
            return Object.assign({}, card, {
              // (true), returning new card Object with all its existing
              // properties but changing "todos" property
              
              // mapping through "todos" property which is an array of todo objects
              todos: state.cards[cardIndex].todos.map((todo, todoIndex) => {
                if(todoIndex === action.todoIndex) {
                  // (true), returning new todo Object with all its existing
                  // properties, but inverting its "editing" property (bool) and
                  // setting to a "text" property value from action.todoText,
                  // which has EDITED text from Todo component
                  return Object.assign({}, todo, {
                    editing: !todo.editing,
                    text: action.todoText
                  })
                } else {
                  return Object.assign({}, todo, {
                    editing: false
                  })
                }
              })
            })
          } else {
            return card
          }
        })
      })
    case 'DELETE_TODO':
      return Object.assign({}, state, {
        cards: state.cards.map((card, cardIndex) => {
          if(cardIndex === action.cardIndex) {
            return Object.assign({}, card, {
              todos: [
                ...state.cards[cardIndex].todos.slice(0, action.todoIndex),
                ...state.cards[cardIndex].todos.slice(action.todoIndex + 1)
              ]
            })
          } else {
            return card
          }
        })
      })
    case 'DROP_TODO':
      return Object.assign({}, state, {
        cards: state.cards.map((card, cardIndex) => {
          if(card.id === action.cardId) {
            const newTodos = Array.from(state.cards[cardIndex].todos);

            newTodos.splice(action.sourceIndex, 1);
            newTodos.splice(action.destinationIndex, 0, state.cards[cardIndex].todos[action.sourceIndex])

            return Object.assign({}, card, {
              todos: newTodos
            })
          } else {
            return card
          }
        })
      })
    case 'ADD_CHECK_POINT':
      /* 
        In this case i implement an action, which adds new point of particular todo
        to display it in Popup window as checklist of check-points.
        As previous, i find particular card that contains particular list of todos, and add new
        check-point.
      */
      return Object.assign({}, state, {
        cards: state.cards.map((card, cardIndex) => {
          if(cardIndex === action.cardIndex) {
            return Object.assign({}, card, {
              todos: state.cards[cardIndex].todos.map((todo, todoIndex) => {
                if(todoIndex === action.todoIndex) {
                  return Object.assign({}, todo, {
                    points: [
                      ...state.cards[cardIndex].todos[todoIndex].points,
                      {
                        id: generateID(3, 8),
                        key: randomKey(),
                        text: action.text,
                        editing: false
                      }
                    ]
                  })
                } else {
                  return todo
                }
              })
            })
          } else {
            return card
          }
        })
      })
    case 'SHOW_CHECKLIST':
      return Object.assign({}, state, {
        checklist: {
          ...state.checklist,
          hidden: false,
          cardIndex: action.cardIndex,
          todoIndex: action.todoIndex,
          headline: action.todoTitle,
          points: action.points
        }
      })
    case 'HIDE_CHECKLIST':
      return Object.assign({}, state, {
        checklist: {
          ...state.checklist,
          hidden: true
        }
      })
    default:
      return state
  }
}


const initialState = {
  cards: [],
  checklist: {
    hidden: true,
    cardIndex: undefined,
    todoIndex: undefined,
    headline: 'default headline',
    points: []
  }
}
