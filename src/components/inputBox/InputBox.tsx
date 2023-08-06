import styles from "./InputBox.module.scss";
interface inputBoxProps {
  inputId: string;
  inputType: string;
  placeholderText: string;
  labelText: string;
  inputValue: string;
  extraClass?: string;
  inputProps: any;
  errorMsg?: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputBox = ({
  inputId,
  inputType,
  placeholderText,
  labelText,
  inputValue,
  handleChange,
  extraClass,
  inputProps,
  errorMsg
}: inputBoxProps) => {
  return (
    <div className={`${styles.inputBox} ${styles.extraClass}`}>
      <label htmlFor={inputId}>{labelText}</label>
      <br />
      <input
        type={inputType}
        id={inputId}
        placeholder={placeholderText}
        value={inputValue}
        onChange={handleChange}
        {...inputProps}
        // maxLength={20}
      />
      <div className={styles.errorMsgStyling}>
        {errorMsg?.length > 0 ? errorMsg : ""}
      </div>
    </div>
  );
};
