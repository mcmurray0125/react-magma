import * as React from 'react';
import { IconProps } from '../../IconProps';
import { renderIcon } from '../../SvgIcon';
const iconType = {
  paths: [
    {
      d:
        'M21 14c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1l-.1162-.0068C20.388 19.9352 20 19.5107 20 19v-1.01C18.18 20.42 15.27 22 12 22c-4.36 0-8.07-2.79-9.44-6.69-.22-.64.28-1.31.96-1.31l.1222.0074c.3633.044.6918.2816.8178.6326C5.55 17.76 8.51 20 12 20c2.95 0 5.53-1.61 6.91-4H17c-.55 0-1-.45-1-1l.0068-.1162C16.0648 14.388 16.4893 14 17 14zm-9-5c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0-7c4.36 0 8.07 2.79 9.44 6.69.22.64-.28 1.31-.96 1.31l-.1222-.0074c-.3633-.044-.6918-.2816-.8178-.6326C18.45 6.24 15.49 4 12 4 9.05 4 6.47 5.61 5.09 8H7c.55 0 1 .45 1 1l-.0068.1162C7.9352 9.612 7.5107 10 7 10H3c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1l.1162.0068C3.612 4.0648 4 4.4893 4 5v1.01C5.82 3.58 8.73 2 12 2z',
    },
  ],
  circles: [],
};

export const FlipCameraAndroidIcon = (props: IconProps) =>
  renderIcon(props, iconType);
