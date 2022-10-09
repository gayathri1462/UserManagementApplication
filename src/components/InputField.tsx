import { InputProps } from "../types/types";

const InputField = ({
  className,
  label,
  inputProps,
  onChange,
  value,
  accept,
  disabled
}: InputProps) => {
  return (
    <div>
      <label>{label}</label>
      <input
        disabled={disabled}
        accept={accept}
        className={className}
        {...inputProps}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default InputField;
