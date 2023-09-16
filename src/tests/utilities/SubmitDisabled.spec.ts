import { IValid, submitDisabled } from "../../library";

describe("SubmitDisabled", () => {
  it("returns true for any invalid inputs", () => {
    const inputs: IValid[] = [
      {
        valid: false,
      },
      { valid: true },
    ];

    expect(submitDisabled(inputs)).toBeTruthy();
  });

  it("returns false for all valid inputs", () => {
    const inputs: IValid[] = [
      {
        valid: true,
      },
      { valid: true },
    ];

    expect(submitDisabled(inputs)).toBeFalsy();
  });
});
