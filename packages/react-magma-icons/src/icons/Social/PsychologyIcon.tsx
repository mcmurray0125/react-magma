import * as React from 'react';
import { IconProps } from '../../IconProps';
import { renderIcon } from '../../SvgIcon';
const iconType = {
  paths: [
    {
      d:
        'M12.9658 2.9972L13.21 3c3.61.11 6.65 3.12 6.79 6.74.1 2.9-1.56 5.42-4 6.58V20c0 .55-.45 1-1 1h-5c-.55 0-1-.45-1-1v-2H8c-1.1 0-2-.9-2-2v-3H4.5c-.41 0-.65-.47-.4-.8l1.92-2.56C6.21 5.87 9.37 2.89 13.21 3zM13.8 6h-1.6c-.1 0-.18.07-.2.17l-.15 1.06c-.24.1-.47.24-.67.39l-1-.4c-.09-.03-.19 0-.24.09l-.8 1.38c-.05.1-.03.2.05.26l.85.66c-.02.12-.04.26-.04.39s.01.26.02.39l-.84.66c-.08.06-.1.17-.05.25l.8 1.39c.05.09.16.12.25.09l.99-.4c.21.16.43.29.68.39l.15 1.06c.02.1.1.17.2.17h1.6c.1 0 .19-.07.2-.17l.16-1.06c.24-.1.46-.23.67-.39l.99.4c.08.03.19 0 .24-.09l.8-1.39c.05-.09.03-.19-.05-.25l-.83-.66c.01-.13.02-.26.02-.39 0-.14-.01-.27-.04-.39l.85-.66c.08-.06.1-.17.05-.26l-.8-1.38c-.04-.09-.15-.12-.24-.09l-1 .4c-.21-.16-.43-.29-.67-.39L14 6.17c-.02-.1-.1-.17-.2-.17zM13 8.57c.79 0 1.43.64 1.43 1.43 0 .79-.64 1.43-1.43 1.43-.79 0-1.43-.64-1.43-1.43 0-.79.64-1.43 1.43-1.43z',
    },
  ],
  circles: [],
};

export const PsychologyIcon = (props: IconProps) => renderIcon(props, iconType);
