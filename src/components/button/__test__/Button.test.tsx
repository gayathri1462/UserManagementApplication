import { Button } from "../Button";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

interface ButtonProps {
  label: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  btnProps?: any;
  extraClass?: string;
}

const mockButton = (props: Partial<ButtonProps>) => {
  return render(<Button label="label" onClick={jest.fn()} {...props} />);
};

describe("<Button />", () => {
  test("Should render label correctly", () => {
    const { getByText } = mockButton({ label: "My Button" });

    expect(getByText(/My Button/)).toBeInTheDocument();
  });

  test("Should call onClick successfully", () => {
    const spy = jest.fn();

    const { getByText } = mockButton({ onClick: spy });

    fireEvent.click(getByText(/label/));

    expect(spy).toHaveBeenCalled();
  });
});
