import { IValid } from "../interfaces/IValid";

export function submitDisabled(inputs: Array<IValid>): boolean {
  return !inputs.every((input) => input.valid);
}
