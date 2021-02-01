import * as React from 'react';
import { IconProps } from '../../IconProps';
import { renderIcon } from '../../SvgIcon';
const iconType = {
  paths: [
    {
      d:
        'M6.0012 2.0548L6.12 2.06c4.67.52 8.36 4.25 8.83 8.94H19V9l3.47 2.6c.27.2.27.6 0 .8L19 15v-2h-4.06c-.46 4.69-4.16 8.42-8.83 8.94-.59.07-1.11-.4-1.11-1l.0065-.114c.0512-.45.402-.8206.8635-.876C9.88 19.52 13 16.13 13 12c0-4.13-3.12-7.52-7.13-7.95-.5-.06-.87-.49-.87-.99l.0068-.118c.0629-.541.5532-.938 1.1132-.882zM4 9c1.3 0 2.4.84 2.82 2H11v2H6.82C6.4 14.16 5.3 15 4 15c-1.66 0-3-1.34-3-3s1.34-3 3-3zm0 2c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z',
    },
  ],
  circles: [],
};

export const NatIcon = (props: IconProps) => renderIcon(props, iconType);
