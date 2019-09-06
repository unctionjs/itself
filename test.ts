
import itself from "./index";

test("works", () => {
  expect(itself("a")).toEqual("a");
});

test("works", () => {
  expect(itself(true)).toEqual(true);
});

test("works", () => {
  expect(itself(null)).toEqual(null);
});
