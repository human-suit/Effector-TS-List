import { createEvent, createStore, createEffect } from "effector";

export const fetchUserFx = createEffect(async (userID: number) => {
  // console.log(userID);
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userID}`
  );
  if (!response.ok) {
    throw new Error("User not Found");
  }
  return response.json();
});

export const $user = createStore(null)
  .on(fetchUserFx.doneData, (_, user) => user)
  .reset(fetchUserFx.fail);

export const $loading = fetchUserFx.pending;
