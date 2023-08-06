import React, { useRef } from "react";
import styles from "./UploadPicture.module.scss";

interface UploadPictureProps {
  picture?: string;
  handleDeleteFunc: () => void;
  handleFileUploadFunc: (event: React.ChangeEvent<HTMLInputElement>) => void;
  errorMsg?: string;
  disabled?: boolean;
}

export const UploadPicture = ({
  picture,
  handleDeleteFunc,
  handleFileUploadFunc,
  errorMsg,
  disabled
}: UploadPictureProps) => {
  const hiddenFileInput = useRef() as React.MutableRefObject<HTMLInputElement>;

  const handleClickUpload = () => {
    if (!disabled) {
      hiddenFileInput.current.click();
    }
  };

  return (
    <div className={styles.uploadPictureContent}>
      <div className={styles.uploadPictureWrapper}>
        <div className={styles.uploadPictureDiv} onClick={handleClickUpload}>
          {picture && picture !== "" ? (
            <img src={picture} alt="" className={styles.uploadPictureStyling} />
          ) : (
            <div className={styles.uploadPictureTextStyling}>
              Upload Display Photo
            </div>
          )}
        </div>

        {!disabled && (
          <div className={styles.uploadPictureButton}>
            <button
              className={styles.uploadButtonStyle}
              onClick={handleClickUpload}
              disabled={disabled}
            >
              Upload Picture
            </button>

            <input
              ref={hiddenFileInput}
              onChange={handleFileUploadFunc}
              className={styles.inputUploadStyling}
              type="file"
              accept="image/*"
            />

            <button
              className={styles.deleteButtonStyle}
              disabled={disabled}
              onClick={() => {
                handleDeleteFunc(); // Reset the file input value to allow uploading a new image
                if (hiddenFileInput.current) {
                  hiddenFileInput.current.value = "";
                }
              }}
            >
              Delete
            </button>
          </div>
        )}
      </div>
      <div className={styles.errorMsgStyling}>
        {errorMsg?.length > 0 ? errorMsg : ""}
      </div>
    </div>
  );
};
