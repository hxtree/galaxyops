import React from 'react';

interface FileUploadProps {
  setFile: (file: string) => void;
}

export const FileUpload = ({ setFile }: FileUploadProps) => {
  const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    // const { files } = e.target;
    // if (files && files[0]) {
    //   setFile(files[0]);
    // }
  };

  return <input name="file" type="file" onChange={onChangeFile} />;
};
