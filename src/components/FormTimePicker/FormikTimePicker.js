import React from 'react';
import PropTypes from 'prop-types';

import { useField } from 'formik';
import { usePersistFn } from 'ahooks';

import FormTimePicker from './FormTimePicker';

const FormikTimePicker = (props) => {
  const { name, ...restProps } = props;

  const [field, , helpers] = useField(name);

  const { value } = field;

  const onChange = usePersistFn((newValue) => {
    helpers.setValue(newValue);
    props.onChange?.(newValue);
  });

  return (
    <FormTimePicker
      name={name}
      value={value}
      {...restProps}
      onChange={onChange}
    />
  );
};

FormikTimePicker.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FormikTimePicker;
