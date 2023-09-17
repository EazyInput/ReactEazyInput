// Base
export { EazyBaseInput } from "./base/EazyBaseInput";

// Components
export { EazySubmitButton } from "./components/EazySubmitButton";
export { EazyLabel } from "./components/EazyLabel";
export { EazyValidationMessage } from "./components/EazyValidationMessage";

// Derived
export { EazyTextInput } from "./derived/EazyTextInput";
export { EazyPasswordInput } from "./derived/EazyPasswordInput";

// Interfaces
export type { IUseInput } from "./interfaces/IUseInput";
export type { IValid } from "./interfaces/IValid";
export type { InputType } from "./interfaces/InputType";
export type { DerivedInputProperties } from "./interfaces/DerivedInputProperties";
export {
  type IValidationResult,
  validResult,
  inValidResult,
} from "./interfaces/IValidationResult";
export type { TemplateInputProperties } from "./interfaces/TemplateInputProperties";

// Hooks
export { useInput } from "./hooks/UseInput";
export { useTextInput } from "./hooks/UseTextInput";
export { useMatchingPasswords } from "./hooks/UseMatchingPasswords";

// Opinionated
export { EazyUsername } from "./opinionated/EazyUsername";

// Stylized
export { EazyBulmaUsername } from "./stylized/EazyBulmaUsername";

// Templates
export { EazyTextTemplate } from "./templates/EazyTextTemplate";
export { EazyPasswordTemplate } from "./templates/EazyPasswordTemplate";

// Utilities
export { getValue } from "./utilities/GetValue";
export { submitDisabled } from "./utilities/SubmitDisabled";
export { determineStyleClass } from "./utilities/DetermineStyleClass";

// Validation

export type { IValidator } from "./utilities/validation/IValidator";
export { ValidationBuilder } from "./utilities/validation/ValidationBuilder";
export { RequiredValidator } from "./utilities/validation/RequiredValidator";
export { MatchesValidator } from "./utilities/validation/MatchesValidator";
