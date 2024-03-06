import React from 'react';
import PropTypes from 'prop-types';

import { tw } from 'react-native-tailwindcss';

import { Layout } from '@ui-kitten/components';

import Modal from '@components/Modal/Modal';

const BaseDatePicker = React.forwardRef((props, modalRef) => {
  const {
    component: Calendar,
    visible,
    onModalShow,
    onModalHide,
    onBackdropPress,
    ...restProps
  } = props;

  return (
    <Modal
      ref={modalRef}
      style={tw.wAuto}
      visible={visible}
      onModalShow={onModalShow}
      onModalHide={onModalHide}
      onBackdropPress={onBackdropPress}
    >
      <Layout style={tw.rounded}>
        <Calendar {...restProps} />
      </Layout>
    </Modal>
  );
});

BaseDatePicker.propTypes = {
  component: PropTypes.any,
};

export default BaseDatePicker;
