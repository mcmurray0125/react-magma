import * as React from 'react';
import { IconProps } from '../../IconProps';
import { renderIcon } from '../../SvgIcon';
const iconType = {
  paths: [
    {
      d:
        'M21 2v17c0 1.66-1.34 3-3 3H6c-1.66 0-3-1.34-3-3v-2c0-.55.45-1 1-1h2V2l1.5 1.5L9 2l1.5 1.5L12 2l1.5 1.5L15 2l1.5 1.5L18 2l1.5 1.5L21 2zm-6 16H5v1c0 .55.45 1 1 1h9v-2zm4-13H8v11h8c.55 0 1 .45 1 1v2c0 .55.45 1 1 1s1-.45 1-1V5zm-5 5c.5107 0 .9352.388.9932.8838L15 11c0 .55-.45 1-1 1h-4c-.5107 0-.9352-.388-.9932-.8838L9 11c0-.55.45-1 1-1h4zm3 0c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm-3-3c.5107 0 .9352.388.9932.8838L15 8c0 .55-.45 1-1 1h-4c-.5107 0-.9352-.388-.9932-.8838L9 8c0-.55.45-1 1-1h4zm3 0c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1z',
    },
  ],
  circles: [],
};

export const ReceiptLongIcon = (props: IconProps) =>
  renderIcon(props, iconType);
