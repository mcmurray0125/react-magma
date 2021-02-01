import * as React from 'react';
import { IconProps } from '../../IconProps';
import { renderIcon } from '../../SvgIcon';
const iconType = {
  paths: [
    {
      d:
        'M14 4c.55 0 1 .45 1 1v2c1.1 0 2 .9 2 2h3c1.1 0 2 .9 2 2v9c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h3.17L8.4 4.65c.38-.41.92-.65 1.48-.65zm-2 5c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 2c1.6569 0 3 1.3431 3 3s-1.3431 3-3 3-3-1.3431-3-3 1.3431-3 3-3zm4.6337-8.955l.0963.005c2.72.33 4.89 2.5 5.22 5.22.05.39-.27.73-.66.73-.34 0-.62-.26-.66-.6-.26-2.1-1.93-3.76-4.03-4.03-.34-.04-.6-.32-.6-.66 0-.39.34-.71.73-.66zM16 5.42c0-.43.4-.75.81-.65 1.19.3 2.12 1.23 2.42 2.42.1.41-.22.81-.65.81-.3 0-.57-.19-.64-.48-.17-.72-.74-1.28-1.46-1.46-.29-.07-.48-.35-.48-.64z',
    },
  ],
  circles: [],
};

export const LinkedCameraIcon = (props: IconProps) =>
  renderIcon(props, iconType);
