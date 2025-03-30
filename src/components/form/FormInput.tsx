import clsx from "clsx";
import { useState, useRef } from "react";
import { IconType } from "react-icons";
import { FaEye, FaEyeSlash } from "react-icons/fa";
interface FormInputProps {
  id?: string;
  label?: string;
  icon?: IconType;
  placeholder?: string;
  name?: string;
  type?: "text" | "number" | "password" | "file";
  value?: string | number;
  defaultValue?: string | number;
  isDisabled?: boolean;
  isReadonly?: boolean;
  autoFocus?: boolean;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
  onChange?: (value: string | number) => void;
}

const FormInput = ({
  label,
  type = "text",
  placeholder,
  value,
  defaultValue,
  name,
  icon: Icon,
  isDisabled,
  isReadonly,
  onBlur,
  error,
  onChange,
  autoFocus,
}: FormInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (onChange) {
      const newValue = e.target.type === "number" ? parseFloat(inputValue) : inputValue;
      onChange(newValue);
    }
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleFocus = () => setIsFocused(true);

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    if (onBlur) onBlur(e);
  };

  const handleIconClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <div>
      {label && <label className="text-m-medium mb-1 block text-black-300">{label}</label>}
      <div
        className={clsx("flex shrink-0 items-center gap-1 overflow-hidden rounded-[4px] border border-gray-100 bg-gray-25", isFocused && "bg-white")}
      >
        {Icon && (
          <Icon
            className={clsx("ml-3 cursor-pointer text-gray-400", {
              "text-black-500": isFocused,
            })}
            onClick={handleIconClick}
          />
        )}
        <input
          type={type === "password" && showPassword ? "text" : type}
          placeholder={placeholder}
          value={value}
          autoFocus={autoFocus}
          onChange={handleChange}
          defaultValue={defaultValue as string}
          disabled={isDisabled}
          name={name}
          readOnly={isReadonly}
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={inputRef}
          className={clsx("placeholder:text-m-medium flex-1 grow bg-gray-25 py-[6px] font-normal text-black-500 outline-none focus:bg-white", {
            "px-3": !Icon,
            "pl-0": Icon,
            "border-red-500": !!error,
            "select-none !bg-gray-50 !text-black-300": error,
          })}
        />

        {type === "password" && (
          <div onClick={togglePasswordVisibility} className="cursor-pointer pr-3">
            {showPassword ? <FaEyeSlash className="text-gray-400" /> : <FaEye className="text-gray-400" />}
          </div>
        )}
      </div>
      {!!error && (
        <div className={clsx("placeholder:text-m-medium flex-1 grow border-red-500 py-[10px] font-normal text-red-500 outline-none focus:bg-white")}>
          {error}
        </div>
      )}
    </div>
  );
};

export default FormInput;
