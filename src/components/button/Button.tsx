import styles from "./Button.module.scss";
interface ButtonProps {
  label: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  btnProps?: any;
  extraClass?: string;
}

export const Button = ({
  label,
  onClick,
  btnProps,
  extraClass
}: ButtonProps) => {
  return (
    <div className={styles.buttonWrapper}>
      <button
        className={`${styles.buttonStyling} ${extraClass ? extraClass : ""}`}
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
};
