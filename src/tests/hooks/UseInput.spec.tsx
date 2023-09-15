import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { UseInputWrapper } from "./UseInputWrapper";

describe("UseInput", () => {
  it("sets value properly", async () => {
    const user = userEvent.setup();

    render(<UseInputWrapper />);

    const value = "myValue";

    await user.click(screen.getByLabelText("myInput"));

    await user.keyboard(value);

    expect(await screen.findByLabelText("myInput")).toHaveValue(value);
  });
});
