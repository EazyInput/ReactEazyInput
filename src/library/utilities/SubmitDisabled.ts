import { IValid } from "../interfaces/IValid";

export function submitDisabled(inputs: IValid[]): boolean {
  return !inputs.every((input) => input.valid);
}
