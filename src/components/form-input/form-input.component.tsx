import * as React from 'react';

import './form-input.styles.scss';

interface IProps {
  name: string;
  type: string;
  value: string;
  required: boolean;
  label: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function FormInput(props: IProps) {
  const { handleChange, label, ...inputProps } = props;
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...inputProps} />
      {label ? (
        <label
          className={`${inputProps.value.length ? 'shrink' : ''
            } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
}

export default FormInput;
