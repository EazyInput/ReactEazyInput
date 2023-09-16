import { IUseInput, getValue } from "../../library";

describe("GetValue", () => {
  it("text has correct value", () => {
    const input: IUseInput<string> = {
      value: "myValue",
      setValue: jest.fn(),
      valid: false,
      setValidationResult: jest.fn(),
      error: "",
      dirty: false,
    };

    const result = getValue("text", input);

    expect(result).toStrictEqual(input.value);
  });

  it("default has correct value", () => {
    const input: IUseInput<string> = {
      value: "myValue",
      setValue: jest.fn(),
      setValidationResult: jest.fn(),
      valid: false,
      error: "",
      dirty: false,
    };

    const result = getValue("nonsense", input);

    expect(result).toStrictEqual(input.value);
  });
});
