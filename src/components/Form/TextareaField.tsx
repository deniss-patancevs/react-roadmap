import type { ChangeEvent } from "react";
import styled from "styled-components";

interface TextareaFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  required?: boolean;
  rows?: number;
}

const Field = styled.label`
  display: flex;
  flex-direction: column;
  gap: 6px;

  font-size: ${({ theme }) => theme.typography.bodySmall.fontSize};
  color: ${({ theme }) => theme.colors.text};
`;

const Textarea = styled.textarea`
  width: 100%;
  min-height: 80px;
  box-sizing: border-box;

  padding: 10px 12px;

  resize: vertical;
  font: inherit;

  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

function TextareaField({
  label,
  name,
  value,
  onChange,
  placeholder,
  required = false,
  rows,
}: TextareaFieldProps) {
  return (
    <Field>
      {label}

      <Textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        rows={rows}
      />
    </Field>
  );
}

export default TextareaField;
