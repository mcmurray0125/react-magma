import * as React from 'react';
import { IconProps } from '../../IconProps';
import { renderIcon } from '../../SvgIcon';
const iconType = {
  paths: [
    {
      d:
        'M16 22c0 .55-.45 1-1 1H2c-.55 0-1-.45-1-1s.45-1 1-1h13c.55 0 1 .45 1 1zm6.89-15.9c.06-.59-.4-1.1-.99-1.1H18V2c0-.55-.45-1-1-1s-1 .45-1 1v3h-3.9c-.59 0-1.05.51-1 1.1l.24 2.41L18 15.17l3.62 3.62L22.89 6.1zm-1.7 16.51c.39-.39.39-1.02 0-1.41L12 12 9.01 9.01l-6.2-6.2a.9959.9959 0 00-1.41 0C1 3.2 1 3.83 1.39 4.22l4.99 4.99c-2.56.54-4.76 2.08-5.28 4.63-.11.61.39 1.16 1 1.16h10.07l2 2H2c-.55 0-1 .45-1 1s.45 1 1 1h13c.32 0 .59-.16.78-.4l4 4c.39.4 1.02.4 1.41.01z',
    },
  ],
  circles: [],
};

export const NoFoodIcon = (props: IconProps) => renderIcon(props, iconType);
