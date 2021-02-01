import * as React from 'react';
import { IconProps } from '../../IconProps';
import { renderIcon } from '../../SvgIcon';
const iconType = {
  paths: [
    {
      d:
        'M3.09 4.44c-.39.39-.39 1.02 0 1.41l2.03 2.03-.12.13V19c0 1.1.9 2 2 2h10c.35 0 .68-.1.97-.26l1.17 1.17c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L4.5 4.44a.9959.9959 0 00-1.41 0zM19 16.11V5c0-1.1-.9-2-2-2h-6.99L7.95 5.06 19 16.11z',
    },
  ],
  circles: [],
};

export const NoSimIcon = (props: IconProps) => renderIcon(props, iconType);
