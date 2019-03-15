import * as React from 'react';
import { IconProps, renderIcon } from '../utils';

const iconType = {
  viewBox: '0 0 22 24',
  paths: [
    {
      d:
        'M8,11.5v9a.46.46,0,0,1-.15.36.48.48,0,0,1-.35.14h-1a.49.49,0,0,1-.36-.14A.47.47,0,0,1,6,20.5v-9a.45.45,0,0,1,.14-.36A.49.49,0,0,1,6.51,11h1a.48.48,0,0,1,.35.14A.46.46,0,0,1,8,11.5Zm4,0v9a.46.46,0,0,1-.15.36.48.48,0,0,1-.35.14h-1a.49.49,0,0,1-.36-.14A.47.47,0,0,1,10,20.5v-9a.45.45,0,0,1,.14-.36.49.49,0,0,1,.36-.14h1a.48.48,0,0,1,.35.14A.46.46,0,0,1,12,11.5Zm4,0v9a.49.49,0,0,1-.14.36.52.52,0,0,1-.36.14h-1a.49.49,0,0,1-.36-.14A.47.47,0,0,1,14,20.5v-9a.45.45,0,0,1,.14-.36.49.49,0,0,1,.36-.14h1a.52.52,0,0,1,.36.14A.49.49,0,0,1,16,11.5Zm2,11.31V8H4V22.81a1.69,1.69,0,0,0,.11.64,1.34,1.34,0,0,0,.22.42c.08.09.14.13.17.13h13s.08,0,.16-.13a1.57,1.57,0,0,0,.23-.42A1.91,1.91,0,0,0,18,22.81ZM7.51,6h7l-.75-1.83A.5.5,0,0,0,13.49,4h-5a.44.44,0,0,0-.27.17ZM22,6.5v1a.46.46,0,0,1-.15.36.48.48,0,0,1-.35.14H20V22.81a3.53,3.53,0,0,1-.74,2.24,2.18,2.18,0,0,1-1.76.95h-13a2.23,2.23,0,0,1-1.77-.91A3.43,3.43,0,0,1,2,22.87V8H.51a.49.49,0,0,1-.36-.14A.48.48,0,0,1,0,7.5v-1a.45.45,0,0,1,.14-.36A.49.49,0,0,1,.51,6H5.33l1.1-2.61a2.12,2.12,0,0,1,.84-1A2.24,2.24,0,0,1,8.51,2h5a2.23,2.23,0,0,1,1.23.41,2.06,2.06,0,0,1,.84,1L16.68,6h4.83a.48.48,0,0,1,.35.14A.46.46,0,0,1,22,6.5Z',
      transform: 'translate(-0.01 -2)'
    }
  ]
};

export const TrashOIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
