import * as React from 'react';
import { IconProps } from '../../IconProps';
import { renderIcon } from '../../SvgIcon';
const iconType = {
  paths: [
    {
      d:
        'M9 15c2.67 0 8 1.34 8 4v1c0 .55-.45 1-1 1H2c-.55 0-1-.45-1-1v-1c0-2.66 5.33-4 8-4zm9.04-5l.18.88c.12.05.23.11.33.19l.85-.28.53.93-.66.59c.01.12.01.24 0 .37l.66.61-.54.93-.85-.27c-.1.07-.21.13-.32.18l-.19.87h-1.07l-.18-.88c-.11-.05-.21-.11-.31-.18l-.86.27-.54-.93.66-.61c-.01-.12-.01-.24 0-.37l-.66-.59.54-.93.84.28c.1-.07.22-.14.34-.19l.18-.87h1.07zm-.54 1.61c-.49 0-.89.4-.89.89s.4.89.89.89.89-.4.89-.89-.4-.89-.89-.89zM12.86 10c-.45 1.72-2 3-3.86 3-1.86 0-3.41-1.28-3.86-3zm7.39-7l.25 1.22c.17.07.33.16.47.27l1.19-.39.75 1.3-.93.83c.01.17.02.34-.01.53l.93.85-.75 1.3-1.19-.38c-.14.1-.28.18-.44.25L20.25 10h-1.5l-.28-1.23c-.15-.07-.3-.15-.43-.25l-1.2.38-.75-1.3.93-.85c-.02-.17-.02-.35 0-.52l-.93-.83.75-1.3 1.18.39c.15-.11.31-.2.48-.27L18.75 3h1.5zM9 4c.35 0 .68.06 1 .14V5.5c0 .28.22.5.5.5s.5-.22.5-.5v-.95c1.19.7 2 1.97 2 3.45h.27c.27 0 .49.22.49.49v.02c0 .27-.22.49-.49.49H4.74c-.27 0-.49-.22-.49-.48v-.03c0-.27.22-.49.49-.49H5c0-1.48.81-2.75 2-3.45v.95c0 .28.22.5.5.5s.5-.22.5-.5V4.14c.32-.08.65-.14 1-.14zm10.5 1.25c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25z',
    },
  ],
  circles: [],
};

export const EngineeringIcon = (props: IconProps) =>
  renderIcon(props, iconType);
