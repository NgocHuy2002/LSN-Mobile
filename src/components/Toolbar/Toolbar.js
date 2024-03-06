import React from 'react';
import { tw } from 'react-native-tailwindcss';
import { TouchableOpacity } from 'react-native';
import {
  styled,
  Text,
  Icon,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';

import renderNode from '@helpers/renderNode';

import { Row } from '../Stack';

export const NavAction = styled('TopNavigationAction')(
  ({ eva, ...props }) => {
    const { children, icon, text, style, ...restProps } = props;

    const computedStyle = {
      container: {
        marginHorizontal: eva.style.iconMarginHorizontal,
      },
      icon: {
        width: eva.style.iconWidth,
        height: eva.style.iconHeight,
        tintColor: eva.style.iconTintColor,
      },
      text: {
        color: eva.style.iconTintColor,
      },
    };

    return (
      <TouchableOpacity {...restProps} style={[computedStyle.container, style]}>
        <Row center space={1}>
          {icon && renderNode(Icon, icon, { style: computedStyle.icon })}
          {text && renderNode(Text, text, { style: computedStyle.text })}
          {children}
        </Row>
      </TouchableOpacity>
    );
  },
);

export const BackNavAction = ({ icon, onPress, ...props }) => {
  const navigation = useNavigation();

  const _onPress = () => {
    navigation.goBack();
  };

  return (
    <NavAction
      {...props}
      icon={icon || { pack: 'app', name: 'arrow-left', width: 20, height: 20 }}
      onPress={onPress || _onPress}
    />
  );
};

function Toolbar(props) {
  const {
    status = 'default',
    title,
    leftIcon,
    hideLeftIcon,
    onBackPress,
    renderRightActions,
    ...restProps
  } = props;

  const renderTitle = (textProps) => (
    <Text {...textProps} style={[textProps.style, tw.pL2, tw.textXl]}>
      {title}
    </Text>
  );

  const renderLeftAction = () => (
    <BackNavAction status={status} icon={leftIcon} onPress={onBackPress} />
  );

  const renderRightAction = () => <Row center>{renderRightActions()}</Row>;

  return (
    <TopNavigation
      status={status}
      title={renderTitle}
      accessoryLeft={!hideLeftIcon && renderLeftAction}
      accessoryRight={!!renderRightActions && renderRightAction}
      {...restProps}
    />
  );
}

export default Toolbar;
