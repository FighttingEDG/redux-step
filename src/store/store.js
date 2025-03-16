// src/store/store.js
import { configureStore } from "@reduxjs/toolkit"; // 引入 configureStore 用于创建 store
import counterReducer from "./counterSlice"; // 引入 counterSlice 的 reducer

// 创建 Redux store
export const store = configureStore({
  reducer: {
    counter: counterReducer, // 组合所有的 reducer（这里只使用了 counter）
  },
});

// 导出 store 的类型
export const getState = store.getState; // 用于获取当前 store 的状态
export const dispatch = store.dispatch; // 用于派发 actions