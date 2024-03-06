import React from 'react';

import { tw } from 'react-native-tailwindcss';

import { Text } from '@ui-kitten/components';

import { callPhone } from '@helpers/linkingHelper';

import ActionSheet from '@components/ActionSheet/ActionSheet';

export default function HyperlinkText(props) {
  const { children, ...restProps } = props;

  const actionSheet = React.useRef(null);

  const onPress = React.useCallback(() => {
    actionSheet.current?.open();
  }, []);

  const onPhonePress = React.useCallback(() => {
    callPhone(children);
  }, [children]);

  return (
    <React.Fragment>
      <Text status="primary" {...restProps} onPress={onPress}>
        {children}
      </Text>
      <ActionSheet
        ref={actionSheet}
        options={[
          {
            icon: { pack: 'material', name: 'phone-in-talk' },
            title: `Gọi ${children}`,
            onPress: onPhonePress,
          },
        ]}
      />
    </React.Fragment>
  );
}
