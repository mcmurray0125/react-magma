import * as React from 'react';
import { IconProps } from '../../IconProps';
import { renderIcon } from '../../SvgIcon';
const iconType = {
  paths: [
    {
      d:
        'M8.12 14.71L12 10.83l3.88 3.88c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L12.7 8.71a.9959.9959 0 00-1.41 0L6.7 13.3c-.39.39-.39 1.02 0 1.41.39.38 1.03.39 1.42 0z',
    },
  ],
  circles: [],
};

export const KeyboardArrowUpIcon = (props: IconProps) =>
  renderIcon(props, iconType);
