import { store } from "../store";
import { addUser, deleteUser, editUser } from "../features/users/userSlice";

describe("Users redux state tests", () => {
  it("Should initially set users to an empty object", () => {
    const state = store.getState().users;
    expect(state).toEqual([]);
  });
});

test("Adds a new user", () => {
  let state = store.getState().users;
  const initialUserCount = state.length;
  store.dispatch(
    addUser({
      id: "1",
      image:
        "https://static.remove.bg/remove-bg-web/f9c9a2813e0321c04d66062f8cca92aedbefced7/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png",
      name: "Mounika",
      role: "Designer",
      email: "mounika@gmail.com"
    })
  );
  state = store.getState().users;
  const newlyAddedUser = state.find((user) => user.id === "1");
  expect(newlyAddedUser?.image).toBe(
    "https://static.remove.bg/remove-bg-web/f9c9a2813e0321c04d66062f8cca92aedbefced7/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png"
  );
  expect(newlyAddedUser?.name).toBe("Mounika");
  expect(newlyAddedUser?.role).toBe("Designer");
  expect(newlyAddedUser?.email).toBe("mounika@gmail.com");
  expect(state.length).toBeGreaterThan(initialUserCount);
});

test("Updates a user", () => {
  let state = store.getState().users;
  const unchangedUser = state.find((user) => user.id === "1");
  expect(unchangedUser?.image).toBe(
    "https://static.remove.bg/remove-bg-web/f9c9a2813e0321c04d66062f8cca92aedbefced7/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png"
  );
  expect(unchangedUser?.name).toBe("Mounika");
  expect(unchangedUser?.role).toBe("Designer");
  expect(unchangedUser?.email).toBe("mounika@gmail.com");

  store.dispatch(
    editUser({
      id: "1",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFqCCPaO3bPD5f7gbTyZ5MBb9Q1wFuQDxdhA&usqp=CAU",
      name: "Mounika Ganesh",
      role: "Web Designer",
      email: "mounikaganesh@gmail.com"
    })
  );

  state = store.getState().users;
  let changeUser = state.find((user) => user.id === "1");
  expect(changeUser?.image).toBe(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFqCCPaO3bPD5f7gbTyZ5MBb9Q1wFuQDxdhA&usqp=CAU"
  );
  expect(changeUser?.name).toBe("Mounika Ganesh");
  expect(changeUser?.role).toBe("Web Designer");
  expect(changeUser?.email).toBe("mounikaganesh@gmail.com");

  store.dispatch(
    editUser({
      id: "1",
      image:
        "https://static.remove.bg/remove-bg-web/f9c9a2813e0321c04d66062f8cca92aedbefced7/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png",
      name: "Mounika",
      role: "Designer",
      email: "mounika@gmail.com"
    })
  );

  state = store.getState().users;
  const backToUnchangedUser = state.find((user) => user.id === "1");
  expect(backToUnchangedUser).toEqual(unchangedUser);
});

test("Deletes a user from list with id", () => {
  let state = store.getState().users;
  const initialUserCount = state.length;
  store.dispatch(deleteUser({ id: "1" }));
  state = store.getState().users;
  expect(state.length).toBeLessThan(initialUserCount); // Checking if new length smaller than inital length, which is 3
});
