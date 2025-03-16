// src/components/Counter.jsx
import { useSelector, useDispatch } from "react-redux"; // 引入 Redux hooks
import { increment, decrement, incrementByAmount } from "./store/counterSlice"; // 引入 actions

const Counter = () => {
  // 获取 Redux 状态
  const count = useSelector((state) => state.counter.value); // 选择 counter 状态的 value 值
  const dispatch = useDispatch(); // 获取 dispatch 方法，用于分发 action

  return (
    <div>
      <h2>Counter: {count}</h2> {/* 显示当前计数值 */}
      <button onClick={() => dispatch(increment())}>+1</button> {/* 点击按钮，触发 increment */}
      <button onClick={() => dispatch(decrement())}>-1</button> {/* 点击按钮，触发 decrement */}
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button> {/* 传入参数 5，增加 5 */}
    </div>
  );
};

export default Counter;