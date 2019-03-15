import * as React from 'react';
import { IconProps, renderIcon } from '../utils';

const iconType = {
  viewBox: '0 0 29.83 22',
  paths: [
    {
      d:
        'M27.91,15.55c0-.37-.27-.55-.83-.55h-17a3,3,0,0,0-1.33.34,3,3,0,0,0-1.12.82L3,21.83a1.13,1.13,0,0,0-.28.62c0,.37.27.55.82.55h17a3.13,3.13,0,0,0,1.35-.34A3.17,3.17,0,0,0,23,21.83l4.59-5.67A1,1,0,0,0,27.91,15.55ZM10.08,13h12V10.5a1.43,1.43,0,0,0-.43-1.06A1.48,1.48,0,0,0,20.58,9h-9a1.46,1.46,0,0,1-1.06-.44,1.44,1.44,0,0,1-.44-1.06v-1a1.43,1.43,0,0,0-.43-1.06A1.48,1.48,0,0,0,8.58,5h-5a1.46,1.46,0,0,0-1.06.44A1.44,1.44,0,0,0,2.08,6.5V19.83l4-4.92A5.23,5.23,0,0,1,7.9,13.54,5,5,0,0,1,10.08,13Zm19.83,2.55a3,3,0,0,1-.72,1.87l-4.61,5.67a4.93,4.93,0,0,1-1.81,1.37,5.11,5.11,0,0,1-2.19.54h-17a3.38,3.38,0,0,1-2.47-1,3.4,3.4,0,0,1-1-2.47V6.5A3.4,3.4,0,0,1,1.11,4,3.36,3.36,0,0,1,3.58,3h5a3.36,3.36,0,0,1,2.47,1,3.36,3.36,0,0,1,1,2.47V7h8.5a3.52,3.52,0,0,1,3.5,3.5V13h3a3.23,3.23,0,0,1,1.55.38,2.45,2.45,0,0,1,1.05,1.11,2.52,2.52,0,0,1,.23,1.06Z',
      transform: 'translate(-0.08 -3)'
    }
  ]
};

export const FolderOpenOIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
