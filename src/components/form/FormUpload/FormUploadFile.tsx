import React from "react";
import FormSingleFile from "./FormSingleFile";
import FormUploadImage from "./FormUploadImage";

interface IProps {
  value?: File | File[] | string;
  onChange: (value: File | File[] | null) => void;
  isMultiple?: boolean;
  disabled?: boolean;
  name?: string; // Thêm prop name để phân biệt các instance
  error?: string;
  classNameFilMany?: string;
  classNameOneFile?: string;
}

const MemoizedFormUploadImage = React.memo(FormUploadImage);
const MemoizedFormSingleFile = React.memo(FormSingleFile);

const FormUploadFile = ({ value, onChange, isMultiple, disabled, name, error, classNameFilMany }: IProps) => {
  return isMultiple ? (
    <MemoizedFormUploadImage onChange={onChange} value={value} id={name} error={error} disabled={disabled} classNameFilMany={classNameFilMany} />
  ) : (
    <MemoizedFormSingleFile value={value as File} onChange={onChange} id={name} error={error} disabled={disabled} />
  );
};

export default FormUploadFile;
