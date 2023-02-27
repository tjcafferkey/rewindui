import React from 'react';
import { PolymorphicComponentPropWithRef } from '../../types';

export type ButtonTone = 'solid' | 'light' | 'outline' | 'transparent';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';
export type ButtonRadius = 'none' | 'sm' | 'base' | 'md' | 'lg' | 'full';
export type ButtonShadow = 'none' | 'sm' | 'base' | 'md' | 'lg' | 'xl';
export type ButtonAnimation = 'none' | 'pulse' | 'bounce';
export type ButtonColor =
  | 'white'
  | 'blue'
  | 'red'
  | 'green'
  | 'yellow'
  | 'purple'
  | 'gray'
  | 'dark'
  | 'black';
export type ButtonShadowColor =
  | 'none'
  | 'white'
  | 'blue'
  | 'red'
  | 'green'
  | 'yellow'
  | 'purple'
  | 'gray'
  | 'dark'
  | 'black';
export type ButtonVariants =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'danger'
  | 'success'
  | 'warning'
  | 'info';

export type ButtonProps = {
  animation?: ButtonAnimation;
  color?: ButtonColor;
  disabled?: boolean;
  loading?: boolean;
  icon?: boolean;
  radius?: ButtonRadius;
  shadow?: ButtonShadow;
  shadowColor?: ButtonShadowColor;
  size?: ButtonSize;
  tone?: ButtonTone;
  variant?: ButtonVariants;
  withRing?: boolean;
};

type PolymorphicButtonProps<C extends React.ElementType> = PolymorphicComponentPropWithRef<
  C,
  ButtonProps
>;

type PolymorphicButtonComponent = <C extends React.ElementType = 'button'>(
  props: PolymorphicButtonProps<C>
) => React.ReactElement | null;

export type ButtonComponent = PolymorphicButtonComponent & {
  displayName?: string;
};