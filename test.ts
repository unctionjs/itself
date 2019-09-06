
import itself from "./index.ts";

test(() => {
  expect(itself("a")).toEqual("a");
});

test(() => {
  expect(itself(true)).toEqual(true);
});

test(() => {
  expect(itself(null)).toEqual(null);
});
