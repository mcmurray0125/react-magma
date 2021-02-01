import * as React from 'react';
import { IconProps } from '../../IconProps';
import { renderIcon } from '../../SvgIcon';
const iconType = {
  paths: [
    {
      d:
        'M10.86 2.8c.68-.48 1.6-.48 2.29 0l7.55 5.29c.4.28.2.91-.29.91H13v12c0 .55-.45 1-1 1s-1-.45-1-1V9H3.59c-.49 0-.69-.63-.29-.91zm-7.7 9.38c.55-.1 1.07.26 1.17.8L4.9 16H8c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1s-1-.45-1-1v-3H5.02l-.01 3.01c0 .55-.45.99-1 .99H4c-.55 0-1-.45-1-1v-4.26l-.64-3.39c-.1-.55.26-1.07.8-1.17zm16.51.8c.11-.54.63-.9 1.17-.8.54.1.9.63.8 1.17L21 16.74V21c0 .55-.45 1-1 1l-.1162-.0066C19.388 21.9366 19 21.5207 19 21.01L18.98 18H17v3c0 .55-.45 1-1 1s-1-.45-1-1v-4c0-.55.45-1 1-1h3.1z',
    },
  ],
  circles: [],
};

export const DeckIcon = (props: IconProps) => renderIcon(props, iconType);
