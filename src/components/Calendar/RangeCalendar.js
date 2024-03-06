import React from 'react';
import PropTypes from 'prop-types';

import { RangeCalendar as RkRangeCalendar } from '@ui-kitten/components';

import BaseCalendar from './BaseCalendar';

const RangeCalendar = (props) => {
  return (
    <BaseCalendar
      boundingMonth={false}
      {...props}
      component={RkRangeCalendar}
    />
  );
};

RangeCalendar.propTypes = {
  range: PropTypes.any,
};

export default RangeCalendar;
