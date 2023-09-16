import { IValid, submitDisabled } from "../../library";

describe("SubmitDisabled", () => {
  it("returns true for any invalid inputs", () => {
    var inputs: Array<IValid> = [
      {
        valid: false,
      },
      { valid: true },
    ];

    expect(submitDisabled(inputs)).toBeTruthy();
  });

  it("returns false for all valid inputs", () => {
    var inputs: Array<IValid> = [
      {
        valid: true,
      },
      { valid: true },
    ];

    expect(submitDisabled(inputs)).toBeFalsy();
  });
});
