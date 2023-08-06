import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from "react";
import styles from "./InputTags.module.scss";

interface InputTagsProps {
  label: string;
  tags: string[];
  selectedTags: CallableFunction;
  placeholder?: string;
  extraClass?: string;
  extraClassInput?: string;
  disabled?: boolean;
  extraTagsStyling?: string;
  errorMsg?: string;
  growListDirection?: "horizontal" | "vertical";
}

export const InputTags = forwardRef((props: InputTagsProps, ref) => {
  const [tags, setTags] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setTags(props.tags);
  }, [props.tags]);

  useImperativeHandle(
    ref,
    () => {
      return {
        clearInput() {
          if (inputRef?.current?.value) {
            inputRef.current.value = "";
          }
        }
      };
    },
    [inputRef]
  );
  const removeTags = (indexToRemove: any) => {
    if (!props?.disabled) {
      const newTags = [...tags];
      newTags.splice(indexToRemove, 1);
      setTags(() => {
        return newTags;
      });
      props.selectedTags(newTags);
    }
  };

  const addTags = (e: any) => {
    // Only allow specific characters in input
    const allowedCharacters = /[^a-zA-Z0-9@._,;-]/g;
    if (allowedCharacters.test(e.key)) {
      e.preventDefault();
      return;
    }

    if ([",", ";"].includes(e.key)) {
      e.preventDefault();
    }

    const val = e.target.value;
    if ((e.key === "Enter" || e.key === "," || e.key === ";") && val) {
      if (e.target.value !== "") {
        setTags([...tags, e.target.value]);
        props.selectedTags([...tags, e.target.value.trim()]);
        e.target.value = "";
      }
    } else if (e.key === "Backspace" && !val) {
      removeTags(tags.length - 1);
    }
  };

  return (
    <div className={styles.tagsInputWrapper}>
      <div className={styles.labelStyling}>{props.label}</div>
      <div
        className={`${styles.tagsInput} ${
          props.extraClass ? props.extraClass : null
        }`}
      >
        <ul
          id="tags"
          className={styles.tags}
          data-testid="tags"
          style={
            props.growListDirection === "horizontal"
              ? {
                  flexWrap: "nowrap"
                }
              : {}
          }
        >
          {tags.map((tag: any, index: any) => (
            <li
              key={index}
              className={`${styles.tag}  ${
                props?.extraTagsStyling ? props?.extraTagsStyling : ""
              }`}
            >
              <span className={`${styles.tagTitle}`}>{tag}</span>
              <div
                className={styles.tagCloseIcon}
                onClick={() => removeTags(index)}
              >
                <span> x </span>
              </div>
            </li>
          ))}
          {tags.length === 10 ? null : (
            <li className={styles.inputTagListStyling}>
              <input
                ref={inputRef}
                type="text"
                onKeyDown={addTags}
                placeholder={props.placeholder ? props.placeholder : ""}
                className={`${
                  props.extraClassInput ? props.extraClassInput : null
                } ${styles.inputTagStyling}`}
                data-testid="input-field"
                readOnly={props?.disabled}
              />
            </li>
          )}
        </ul>
      </div>
      <div className={styles.errorMsgStyling}>
        {props?.errorMsg?.length > 0 ? props?.errorMsg : ""}
      </div>
    </div>
  );
});
