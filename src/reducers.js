// import {
//   VisibilityFilters,
//   SET_VISIBILITY_FILTER,
//   ADD_TODO,
//   COMPLETE_TODO,
// } from "./actions";

// const initialState = {
//   visibilityFilter: VisibilityFilters.SHOW_ALL,
//   todos: [],
// };

// function todo(state = [], action)

// function todoApp(state = initialState, action) {
//   switch (action.type) {
//     case SET_VISIBILITY_FILTER:
//       return Object.assign({}, state, {
//         visibilityFilter: action.filter,
//       });
//     case ADD_TODO:
//       return Object.assign({}, state, {
//         todos: [
//           ...state.todos,
//           {
//             text: action.text,
//             completed: false,
//           },
//         ],
//       });
//     case COMPLETE_TODO:
//       return Object.assign({}, state, {
//           //! 배열의 특정 할일만 수정하고 싶기 때문에, 그 할일의 앞 뒤를 잘라냈다
//         todos: [
//           ...state.todos.slice(0, action.index),
//           Object.assign({}, state.todos[action.index], {
//             completed: true,
//           }),
//           ...state.todos.slice(action.index + 1),
//         ],
//       });
//     default:
//       return state;
//   }
// }
// //! 우리는 state를 변경하지 않았습니다..
// // Object.assign() 을 통해 복사본을 만들었죠.
// // 여러분은 반드시 첫번째 인수로 빈 객체를 전달행 합니다

// //! 조금 번잡스럽네요..
// //? 리듀서 쪼개기
// // todos와 visibilityFilter는 서로 완전히 독립적으로 수정되는 것 같습니다

//!!!  소스 코드
function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false,
        },
      ];
    case COMPLETE_TODO:
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          completed: true,
        }),
        ...state.slice(action.index + 1),
      ];
    default:
      return state;
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos,
});

export default todoApp;
