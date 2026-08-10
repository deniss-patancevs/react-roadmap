import type { ChangeEvent } from "react";
import styled from "styled-components";

interface InputFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
  min?: string;
  step?: string;
}

const Field = styled.label`
  display: flex;
  flex-direction: column;
  gap: 6px;

  font-size: ${({ theme }) => theme.typography.bodySmall.fontSize};
  color: ${({ theme }) => theme.colors.text};
`;

const Input = styled.input`
  width: 100%;
  box-sizing: border-box;

  padding: 10px 12px;

  font: inherit;

  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

function InputField({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder,
  required = false,
  min,
  step,
}: InputFieldProps) {
  return (
    <Field>
      {label}

      <Input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        min={min}
        step={step}
      />
    </Field>
  );
}

export default InputField;
