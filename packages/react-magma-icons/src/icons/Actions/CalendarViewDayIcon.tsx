import * as React from 'react';
import { IconProps } from '../../IconProps';
import { renderIcon } from '../../SvgIcon';
const iconType = {
  paths: [
    {
      d:
        'M4 17h16c.55 0 1 .45 1 1s-.45 1-1 1H4c-.55 0-1-.45-1-1s.45-1 1-1zm0-7h16c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1zm0-4h16c.55 0 1 .45 1 1s-.45 1-1 1H4c-.55 0-1-.45-1-1s.45-1 1-1z',
    },
  ],
  circles: [],
};

export const CalendarViewDayIcon = (props: IconProps) =>
  renderIcon(props, iconType);
