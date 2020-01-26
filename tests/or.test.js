import or from "../src/or";

describe("pass all arguments", () => {
  test("both true should return true", () => {
    expect(or(true, true)).toBeTruthy();
  });

  test("either one false should return true", () => {
    expect(or(true, false)).toBeTruthy();
  });

  test("both false should return false", () => {
    expect(or(false, false)).toBeFalsy();
  });
});

describe("curried arguments", () => {
  test("both true should return true", () => {
    const allTrue = or(true);
    expect(allTrue(true)).toBeTruthy();
  });

  test("either one false should return true", () => {
    const eitherFalse = or(true);
    expect(eitherFalse(false)).toBeTruthy();
  });

  test("both false should return false", () => {
    const allFalse = or(false);
    expect(allFalse(false)).toBeFalsy();
  });
});
