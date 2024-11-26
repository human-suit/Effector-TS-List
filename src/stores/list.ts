import { createEffect, createEvent, createStore, fork } from "effector";

// export interface Todo {
//   id: number;
//   name: string;
// }

// export type Array = {
//   list: Todo[];
// };

export type Array = {
  id: number;
  name: string;
};

export const addItem = createEvent<Array>();
export const reloadItem = createEvent<Array[]>();
export const removeItem = createEvent<number>();

export const plus = createEvent();
export const setCounter = createEvent<number>();

export const fetchItems: any = createEffect();
fetchItems.use(async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const arr: Array[] = [
        { id: 1, name: "name1" },
        { id: 2, name: "name2" },
        { id: 3, name: "name3" },
      ];
      resolve(arr);
    }, 1000);
  });
});

export const itemStore = createStore<Array[]>([{ id: 0, name: "sda" }])
  .on(addItem, (state, item) => [...state, item!])
  .on(removeItem, (state, itemId) => state.filter((item) => item.id !== itemId))
  .on(reloadItem, (state, items) => (state = items));

export const counter = createStore(1)
  .on(plus, (state) => state + 1)
  .on(setCounter, (state, count) => (state = count));

export const fetchItemsFx = createEffect(async (userID: number) => {
  // console.log(userID);
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userID}`
  );
  if (!response.ok) {
    throw new Error("User not Found");
  }
  return response.json();
});

export const scope = fork();
