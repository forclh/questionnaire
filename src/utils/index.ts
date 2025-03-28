// 工具库

import { isStringArr } from '@/types';
import type { TextProps, OptionsProps } from '@/types';

export function getTextStatus(props: TextProps) {
  return props.status;
}

export function getStringStatus(props: OptionsProps) {
  return props.status;
}

export function getCurrentStatus(props: OptionsProps) {
  return props.currentStatus;
}

export function getStringStatusByCurrentStatus(props: OptionsProps) {
  if (props && isStringArr(props.status)) {
    return props.status[props.currentStatus];
  }
}
