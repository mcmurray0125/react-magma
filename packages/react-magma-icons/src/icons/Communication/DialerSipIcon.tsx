import * as React from 'react';
import { IconProps } from '../../IconProps';
import { renderIcon } from '../../SvgIcon';
const iconType = {
  paths: [
    {
      d:
        'M16.5 8c.28 0 .5-.22.5-.5v-4c0-.28-.22-.5-.5-.5s-.5.22-.5.5v4c0 .28.22.5.5.5zm-4-1c-.28 0-.5.22-.5.5s.22.5.5.5h1.95c.3 0 .55-.25.55-.55v-1.9c0-.3-.25-.55-.55-.55H13V4h1.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-1.95c-.3 0-.55.25-.55.55v1.89c0 .31.25.56.55.56H14v1h-1.5zm7.95-4h-1.89c-.31 0-.56.25-.56.55V7.5c0 .28.22.5.5.5s.5-.22.5-.5V6h1.45c.3 0 .55-.25.55-.55v-1.9c0-.3-.25-.55-.55-.55zM20 5h-1V4h1v1zm-.79 10.27l-2.54-.29c-.61-.07-1.21.14-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85c.43-.43.64-1.04.57-1.64l-.29-2.52c-.11-1.01-.97-1.78-1.98-1.78H5.02c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.0701-.87 2.0701-2v-1.73c.0099-1-.7601-1.86-1.7701-1.97z',
    },
  ],
  circles: [],
};

export const DialerSipIcon = (props: IconProps) => renderIcon(props, iconType);
