import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";
import App from "./components/App";

const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// ! Redux Data Flow
//? 1. store.dispatch(action) 를 호출합니다.
// : action은 무엇이 일어날지 기술하는 보통의 오브젝트입니다.
// : 간단한 소식들의 단편
// : 앱 내의 어디서는 호출할 수 있습니다

//? 2. Redux 스토어가 여러분이 지정한 리듀서 함수들을 호출합니다
// : 스토어는 리듀서에 현재의 상태 트리와 액션의 두 가지 인수를 넘깁니다.
// : 리듀서는 단지 다음 상태를 계산하는 순수 함수라는 점을 기억하세요

//? 3. 루트 리듀서가 각 리듀서의 출력을 합쳐서 하나의 상태 트리로 만듭니다
// : Redux는 루트 리듀서를 각각이 상태 트리의 가지 하나씩을 다루는 함수들로 나눌 수 있도록 combineReducers() 헬퍼 함수를 제공합니다.

//? 4. Redux 스토어가 루트 리듀서에 의해 반환된 상태 트리를 저장합니다
// : store.subscribe(listener)를 통해 등록된 모든 리스너가 불러내집니다
// : 이들은 현재 상태를 얻기 위해 store.getState()를 호출합니다
// : 새로운 상태를 반영하여 UI가 변경됩니다
// : 여러분이 React Redux으로 바인딩을 했다면, 이 시점에 component.setState(newState)가 호출됩니다.
// : React 바인딩은 명시적으로 설치해줘야 합니다
