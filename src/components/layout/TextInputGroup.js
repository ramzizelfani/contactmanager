import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
const TextInputGroup = ({
  label,
  name,
  value,
  placeholder,
  type,
  onChange,
  pattern,
  error,
}) => {
  return (
    <div className='form-group'>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        className={classnames('form-control form-control-lg', {
          'is-invalid': error,
        })}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        pattern={pattern}
      />

      {error && <div className='invalid-feedback'>{error}</div>}
    </div>
  );
};

TextInputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  pattern: PropTypes.string,
  error: PropTypes.string,
};

TextInputGroup.defaultProps = {
  type: 'text',
};
export default TextInputGroup;
