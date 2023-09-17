import { IValid } from "..";

export function submitDisabled(inputs: IValid[]): boolean {
  return !inputs.every((input) => input.valid);
}
