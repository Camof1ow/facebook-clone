import { useState } from "react";

export const useUploadImg = (initialValue) => {
  const [imgBase64, setImgBase64] = useState(initialValue);
  const [imgFile, setImgFile] = useState(null);

  const handleChangeFile = (event) => {
    let reader = new FileReader();

    reader.onloadend = () => {
      const base64 = reader.result;
      if (base64) {
        setImgBase64(base64.toString());
      }
    };
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]);
      setImgFile(event.target.files[0]);
    }
  };

  return [imgBase64, handleChangeFile];
};
