import { forwardRef } from 'react';
import './styles.css';

export default forwardRef(function InputField(
  { label, helperText, ...rest },
  ref,
) {
  return (
    <div className="input-field">
      <label htmlFor="input" className="label">
        {label}
      </label>
      <input id="input" className="input" ref={ref} {...rest} />
      {helperText && <span className="helper-text">{helperText}</span>}
    </div>
  );
});
