export const C27 = `
import { useMyReducer } from "./useMyReducer";

const reducer = (state, action) => {
  if (action.type == "INCREMENT") {
    return { ...state, count: state.count + 1 };
  }
  if (action.type == "DECREMENT") {
    return { ...state, count: state.count - 1 };
  }
  return state;
};

const Component = () => {
  const [state, dispatch] = useMyReducer(reducer, { count: 0 });

  return (
    <>
      <h1>The count is {state.count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
    </>
  );
};

export default Component;`;
export const C26 = `
import { useState } from "react";

export const useMyReducer = (reducer, initialState) => {
  const [state, setState] = useState(initialState);

  const dispatch = (action) => {
    const newState = reducer(state, action);
    setState(newState);
  };

  return [state, dispatch];
};`;
export const C25 = `
import { useMyState } from "./useMyState";

const Component = () => {
  const [count, setCount] = useMyState(0);

  return (
    <>
      <h1>The count is {count}</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>-1</button>
    </>
  );
};

export default Component;`;
export const C24 = `
import { useReducer } from "react";

const reducer = (currentState, newState) => {
  if (typeof newState == "function") {
    return newState(currentState);
  } else {
    return newState;
  }
};

export const useMyState = (initialState) => {
  return useReducer(reducer, initialState);
};`;
export const C23 = `
import { useReducer } from "react";

const init = (count) => ({ count: count });

const reducer = (state, action) => {
  if (action.type == "INCREMENT") {
    return { ...state, count: state.count + 1 };
  }
  if (action.type == "DECREMENT") {
    return { ...state, count: state.count - 1 };
  }
  return state;
};

const Component = () => {
  const [state, dispatch] = useReducer(reducer, 0, init);

  return (
    <>
      <h1>The count is {state.count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
    </>
  );
};

export default Component;`;
export const C22 = `
const reducer = (bonus, rating) => {
    console.log(rating);
    if (rating < 3) {
      // Low rating so no bonus
      return bonus;
    }
    if (rating < 0 || rating > 10) {
      return "Rating is invalid";
    }
    if (rating > 3 && rating < 11) {
      return bonus * rating;
    }
  };`;
export const C21 = `
import { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type == "INCREMENT") {
    return { ...state, count: state.count + 1 };
  }
  if (action.type == "DECREMENT") {
    return { ...state, count: state.count - 1 };
  }
  return state;
};

const Component = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <h1>The count is {state.count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
    </>
  );
};

export default Component;`;
export const C20 = `
import { useState } from "react";

const Component = () => {
  const [count, setCount] = useState(() => 0);

  return (
    <>
      <h1>The count is {count}</h1>
      <button onClick={() => setCount(count + 1)}>Add +1</button>
    </>
  );
};

export default Component;`;
export const C19 = `
// Here c is reffered as latestCount

// Writing this is like
setCount((c) => c + 1);
setCount((c) => c + 1);
setCount((c) => c + 1);

// Writing this
setCount((0) => 0+ 1);
setCount((1) => 1+ 1);
setCount((2) => 2+ 1);`;
export const C18 = `
import { useState } from "react";

const Component = () => {
  const [count, setCount] = useState(0);

  const updateCount = () => {
    setCount((c) => c + 1);
    setCount((c) => c + 1);
    setCount((c) => c + 1);
  };

  return (
    <>
      <h1>The count is {count}</h1>
      <button onClick={updateCount}>Add +1</button>
    </>
  );
};

export default Component;`;
export const C17 = `
// Writing this is like
setCount(count + 1);
setCount(count + 1);
setCount(count + 1);

// Writing this
setCount(0 + 1);
setCount(0 + 1);
setCount(0 + 1);`;
export const C16 = `
import { useState } from "react";

const Component = () => {
  const [count, setCount] = useState(0);

  const updateCount = () => {
    setCount(count + 1); // latestCount = 0 + 1 = 1
    setCount(count + 1); // latestCount = 0 + 1 = 1
    setCount(count + 1); // latestCount = 0 + 1 = 1
  };

  return (
    <>
      <h1>The count is {count}</h1>
      <button onClick={updateCount}>Add +1</button>
    </>
  );
};

export default Component;`;
export const C15 = `
// React has count and latestCount

setCount(count + 1)
// Here count refers to the count value.

setCount( (c) => c+1)
// Here c refers to the latestCount value.`;
export const C14 = `
import { useState } from "react";

const Component = () => {
  const [count, setCount] = useState(0);

  const updateCount = () => {
    setCount(count + 1);
    for (let i = 0; i <= 100; i++) {
      if (i == 100) {
        console.log("Loop Ended");
      }
    }
    console.log(count);
  };

  return (
    <>
      <h1>The count is {count}</h1>
      <button onClick={updateCount}>Add +1</button>
    </>
  );
};

export default Component;`;
export const C13 = `
import { useState } from "react";

const Component = () => {
  const [count, setCount] = useState(0);

  const updateCount = () => {
    setCount((c) => c + 1);
  };

  return (
    <>
      <h1>The count is {count}</h1>
      <button onClick={updateCount}>Add +1</button>
    </>
  );
};

export default Component;`;
export const C12 = `
setCount( (prevCount) => prevCount + 1)`;
export const C11 = `
import { useState } from "react";

const Component = () => {
  const [count, setCount] = useState({ value: 0 });

  const updateCount = () => {
    setCount({ value: 1 });
  };

  return (
    <>
      <h1>The count is {count.value}</h1>
      {console.log("Rendered")}
      <button onClick={updateCount}>Add +1</button>
    </>
  );
};

export default Component;`;
export const C10 = `
import { useState } from "react";

const Component = () => {
  const [count, setCount] = useState(0);

  const updateCount = () => {
    setCount(1);
  };

  return (
    <>
      <h1>The count is {count}</h1>
      {console.log("Rendered")}
      <button onClick={updateCount}>Add +1</button>
    </>
  );
};

export default Component;`;
export const C9 = `
<button onClick={() => setCount(1)}>Add +1</button>`;
export const C8 = `
<button onClick={() => setCount(count + 1)}>Add +1</button>`;
export const C7 = `
const [setCount, count] = useState(0);`;
export const C6 = `
const [count, setCount] = useState(0);
// OR
const [myCount, setMyCount] = useState(0)
// OR
const [getCount, setCount] = useState(0)
// OR
const [count, increase] = useState(0)`;
export const C5 = `
const [count] = useState(0);`;
export const C4 = `
const [count, setCount] = useState(0);`;
export const C3 = `
import { useCount } from "./useCount";

const Component = () => {
  const [count, setCount] = useCount();
  return (
    <>
      <h1>The count is {count}</h1>
      <button onClick={() => setCount(count + 1)}>Add +1</button>
    </>
  );
};

export default Component;`;
export const C2 = `
import { useState } from "react";

export const useCount = () => {
  const [count, setCount] = useState(0);

  return [count, setCount];
};`;
export const C1 = `
import { useState } from "react";

const Component = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>The count is {count}</h1>
      <button onClick={() => setCount(count + 1)}>Add +1</button>
    </>
  );
};

export default Component;`;
