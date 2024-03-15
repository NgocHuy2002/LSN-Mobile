import * as React from 'react';

import { StackActions } from '@react-navigation/routers';

export const navigationRef = React.createRef();

export function getRef() {
  return navigationRef?.current;
}

export function reset(state) {
  return navigationRef?.current?.reset(state);
}

export function goBack() {
  return navigationRef?.current?.goBack();
}

export function replace(name, params) {
  return navigationRef?.current?.dispatch(StackActions.replace(name, params));
}

export function navigate(name, params) {
  return navigationRef?.current?.navigate(name, params);
}
