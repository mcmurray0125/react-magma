import * as React from 'react';
import { IconProps } from '../../IconProps';
import { renderIcon } from '../../SvgIcon';
const iconType = {
  paths: [
    {
      d:
        'M12 2C6.4286 2 2 6.4286 2 12s4.4286 10 10 10 10-4.4286 10-10S17.5714 2 12 2zm-.9295 14.2105l-1.8997-6.19h-.0486c.0684 1.2592.1026 2.0993.1026 2.5202v3.6698h-1.495v-7.89h2.2775l1.8673 6.0335h.0324l1.9806-6.0336h2.2774v7.8901h-1.5596V12.476c0-.1763.0027-.3795.008-.6098.0055-.2303.0297-.8419.073-1.8349h-.0487l-2.0345 6.1793h-1.5327z',
    },
  ],
  circles: [],
};

export const ManualGradedIcon = (props: IconProps) =>
  renderIcon(props, iconType);
