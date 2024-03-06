import React from 'react';
import PropTypes from 'prop-types';
import { tw } from 'react-native-tailwindcss';
import { useField, useFormikContext } from 'formik';

import renderNode from '@helpers/renderNode';

import FormControl from '@components/FormControl/FormControl';
import FormLabel from '@components/FormLabel/FormLabel';
import FormHelperText from '@components/FormHelperText/FormHelperText';

import FormDatePicker from './FormDatePicker';

const FormikDatePicker = (props) => {
  const {
    name,
    label,
    variant,
    readonly,
    required,
    labelProps,
    helperText,
    helperTextProps,
    containerStyle,
    ...restProps
  } = props;

  const [field, meta, helpers] = useField(name);
  const { submitCount } = useFormikContext();

  const { value } = field;
  const { error, touched } = meta;

  const isTouched = !!touched || submitCount > 0;

  const showError = isTouched && !!error;
  const fieldStatus = isTouched ? (showError ? 'danger' : 'primary') : 'basic';

  const onChange = (newValue) => {
    helpers.setValue(newValue);
    if (props.onChange) props.onChange(newValue);
  };

  return (
    <FormControl
      status={fieldStatus}
      variant={variant}
      readonly={readonly}
      required={required}
      containerStyle={containerStyle}
    >
      {renderNode(FormLabel, label, labelProps)}
      <FormDatePicker
        name={name}
        value={value}
        {...restProps}
        variant={variant}
        onChange={onChange}
      />
      {(helperText || showError) &&
        renderNode(FormHelperText, showError ? error : helperText, {
          containerStyle: tw.mT1,
          ...helperTextProps,
          status: fieldStatus,
        })}
    </FormControl>
  );
};

FormikDatePicker.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FormikDatePicker;
