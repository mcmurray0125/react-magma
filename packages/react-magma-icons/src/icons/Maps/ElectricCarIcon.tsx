import * as React from 'react';
import { IconProps } from '../../IconProps';
import { renderIcon } from '../../SvgIcon';
const iconType = {
  paths: [
    {
      d:
        'M11 18l6 3h-4v2l-6-3h4v-2zm6.5-17c.66 0 1.22.42 1.42 1.01l1.97 5.67c.07.21.11.44.11.66v7.16c0 .83-.68 1.5-1.5 1.5l-.1447-.007C18.5935 16.9196 18 16.2719 18 15.5V15H6v.5c0 .83-.67 1.5-1.5 1.5l-.1447-.0069A1.4979 1.4979 0 013 15.5V8.34c0-.23.04-.45.11-.66l1.97-5.67C5.29 1.42 5.84 1 6.5 1zm-11 8C5.67 9 5 9.67 5 10.5S5.67 12 6.5 12 8 11.33 8 10.5 7.33 9 6.5 9zm11 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5S18.33 9 17.5 9zm-.72-6.5H7.22c-.43 0-.81.28-.95.68L5 7h14l-1.27-3.82c-.14-.4-.52-.68-.95-.68z',
    },
  ],
  circles: [],
};

export const ElectricCarIcon = (props: IconProps) =>
  renderIcon(props, iconType);
