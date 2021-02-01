import * as React from 'react';
import { IconProps } from '../../IconProps';
import { renderIcon } from '../../SvgIcon';
const iconType = {
  paths: [
    {
      d:
        'M17.5 13c2.4853 0 4.5 2.0147 4.5 4.5S19.9853 22 17.5 22 13 19.9853 13 17.5s2.0147-4.5 4.5-4.5zm-7.5.5c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1v-6c0-.55.45-1 1-1zm1.15-10.1c.39-.64 1.31-.64 1.7 0l3.71 6.08c.41.66-.07 1.52-.85 1.52H8.28c-.78 0-1.26-.86-.85-1.52z',
    },
  ],
  circles: [],
};

export const CategoryIcon = (props: IconProps) => renderIcon(props, iconType);
