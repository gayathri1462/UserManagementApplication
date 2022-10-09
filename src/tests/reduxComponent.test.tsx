import Button from "../components/Button";
import { fireEvent, render } from "@testing-library/react";
import { ButtonProps } from "../types/types";
import "@testing-library/jest-dom/extend-expect";

const makeSut = (props: Partial<ButtonProps>) => {
  return render(<Button label="label" onClick={jest.fn()} {...props} />);
};

describe("<Button />", () => {
  test("Should render label correctly", () => {
    const { getByText } = makeSut({ label: "My Button" });

    expect(getByText(/My Button/)).toBeInTheDocument();
  });

  test("Should call onClick successfully", () => {
    const spy = jest.fn();

    const { getByText } = makeSut({ onClick: spy });

    fireEvent.click(getByText(/label/));

    expect(spy).toHaveBeenCalled();
  });
});
