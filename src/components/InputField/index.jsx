import { forwardRef } from 'react';
import './styles.css';

export default forwardRef(function InputField(
  { label, helperText, ...rest },
  ref,
) {
  return (
    <div className="input-field">
      <label htmlFor={label} className="label">
        {label}
      </label>
      <input id={label} className="input" ref={ref} {...rest} />
      {helperText && <span className="helper-text">{helperText}</span>}
    </div>
  );
});
