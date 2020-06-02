// /*
//  * 액션 타입
//  */

export const ADD_TODO = "ADD_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

// /*
//  * 다른 상수
//  */

// export const VisibilityFilters = {
//   SHOW_ALL: "SHOW_ALL",
//   SHOW_COMPLETED: "SHOW_COMPLETED",
//   SHOW_ACTIVE: "SHOW_ACTIVE",
// };

// /*
//  * 액션 생산자
//  */

// export function addTodo(text) {
//   return { type: ADD_TODO, text };
// }

// export function completeTodo(index) {
//   return { type: COMPLETE_TODO, index };
// }

// export function setVisibilityFilter(filter) {
//   return { type: SET_VISIBILITY_FILTER, filter };
// }

let nextTodoId = 0;
export const addTodo = (text) => ({
  type: "ADD_TODO",
  id: nextTodoId++,
  text,
});

export const setVisibilityFilter = (filter) => ({
  type: "SET_VISIBILITY_FILTER",
  filter,
});

export const toggleTodo = (id) => ({
  type: "TOGGLE_TODO",
  id,
});

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE",
};
