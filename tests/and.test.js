import and from "../src/and";

describe("pass all arguments", () => {
  test("both true should return true", () => {
    expect(and(true, true)).toBeTruthy();
  });

  test("either one false should return false", () => {
    expect(and(true, false)).toBeFalsy();
  });

  test("both false should return false", () => {
    expect(and(false, false)).toBeFalsy();
  });
});

describe("curried arguments", () => {
  test("both true should return true", () => {
    const allTrue = and(true);
    expect(allTrue(true)).toBeTruthy();
  });

  test("either one false should return false", () => {
    const eitherFalse = and(true);
    expect(eitherFalse(false)).toBeFalsy();
  });

  test("both false should return false", () => {
    const allFalse = and(false);
    expect(allFalse(false)).toBeFalsy();
  });
});
