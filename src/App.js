import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./redux/counter";
import style from "./style.css";

export default function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div className={style.styleCol}>
        <h1 className={style.counter}>{count}</h1>
        <div className={style.button}>
          <button onClick={() => dispatch(increment())}>
            <span>+</span>
          </button>
          <button onClick={() => dispatch(decrement())}>-</button>
          <button onClick={() => dispatch(incrementByAmount(33))}>
            + by 33
          </button>
        </div>
      </div>
    </div>
  );
}
