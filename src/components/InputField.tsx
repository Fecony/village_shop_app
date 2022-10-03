import React, { ChangeEventHandler } from 'react';

function InputField({
  label,
  name,
  type,
  placeholder,
  onChange,
  value,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
}) {
  return (
    <div className="input-group">
      <label htmlFor={name} className="input-group-label">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        required
        onChange={onChange}
        className="input-group-field"
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputField;
