# React + Recoil

A state management library for React that provides a way to manage global state 

Recoil minimizes unnecessary renders by only re-rendering components that depend on changed atoms

The performance of a React app is measured by the number of re-renders. Each re-render is expensive, and you should aim to minimise it.

# atom

Atoms are like react state but work at global level and does’t unnecessary rerenders 

# Steps

```jsx
npm install recoil
```

Create atom

```jsx
export const counterAtom = atom({
    default: 0,
    key: "counter"
})
```

Wrap the Root

```jsx
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil';

 <RecoilRoot>
     <App />
 </RecoilRoot>
```

# useSetRecoilState Hook

Update State with  this hook

```jsx

function Decrease() {

  const setCount = useSetRecoilState(counterAtom);

  function decrease() {
    setCount(c => c - 1);
  }

  return <div>
    <button onClick={decrease}>Decrease</button>
  </div>
}
```

# useRecoilValue Hook

use the value now  with this hook

```jsx
function CurrentCount() {
  const count = useRecoilValue(counterAtom);
  return <div>
    {count}
  </div>
}
```

or combination of both

```bash
const [counter, setCounter] = useRecoilState(counterState);
```

# selector
A **selector** is like a **function** that **derives** or **computes** new state based on other atoms or selectors.

- **What does it do?**
    - It lets you **transform** or **combine** state from atoms or other selectors.
    - You can think of it as a **computed value** that depends on other state.

---

Imagine you have an atom for a counter:

```bash
const counterState = atom({
  key: 'counter',  // Unique ID
  default: 0       // Initial value
});

```

Now, if you want to **double the value** of the counter, you can create a **selector**:

`get`  to access the current value of atom we want to compute and return new updated value

```bash
const doubledCounter = selector({
  key: 'doubledCounter',
  get: ({ get }) => {
    const counter = get(counterState);  // Get current counter value
    return counter * 2;  // Return the doubled value
  }
});
```

```bash
const doubledValue = useRecoilValue(doubledCounter);
```