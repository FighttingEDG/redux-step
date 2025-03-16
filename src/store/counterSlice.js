// src/store/counterSlice.js
import { createSlice } from "@reduxjs/toolkit"; // 引入 createSlice，用于创建状态管理模块

// 定义初始状态
const initialState = {
  value: 0, // 计数器的初始值为 0
};

// 创建一个 Slice（切片），包含状态、reducers（操作方法）
const counterSlice = createSlice({
  name: "counter", // 定义 slice 的名称
  initialState, // 设定初始状态
  reducers: {
    // 定义一个 reducer 方法：自增
    increment: (state) => {
      state.value += 1; // 直接修改状态
    },
    // 定义一个 reducer 方法：自减
    decrement: (state) => {
      state.value -= 1;
    },
    // 定义一个 reducer 方法：根据传入的值进行增加
    incrementByAmount: (state, action) => {
      state.value += action.payload; // payload 是传递的参数
    },
  },
});

// 导出 actions（用于组件调用）
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// 导出 reducer（用于 store 组合）
export default counterSlice.reducer;