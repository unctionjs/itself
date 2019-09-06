
import itself from "./index";

test(() => {
  expect(itself("a")).toEqual("a");
});

test(() => {
  expect(itself(true)).toEqual(true);
});

test(() => {
  expect(itself(null)).toEqual(null);
});
