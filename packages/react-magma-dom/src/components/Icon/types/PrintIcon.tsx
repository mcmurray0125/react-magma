import * as React from 'react';
import { IconProps, renderIcon } from '../utils';

const iconType = {
  viewBox: '0 0 26 24',
  paths: [
    {
      d:
        'M6,24H20V20H6ZM6,14H20V8H17.5a1.46,1.46,0,0,1-1.06-.44A1.44,1.44,0,0,1,16,6.5V4H6Zm18,1a1,1,0,0,0-1-1,1,1,0,0,0-.7.3,1,1,0,0,0,0,1.4,1,1,0,0,0,.7.3,1,1,0,0,0,1-1Zm2,0v6.5a.47.47,0,0,1-.15.35.45.45,0,0,1-.35.15H22v2.5a1.4,1.4,0,0,1-.44,1.06A1.44,1.44,0,0,1,20.5,26H5.5a1.46,1.46,0,0,1-1.06-.44A1.44,1.44,0,0,1,4,24.5V22H.5a.49.49,0,0,1-.35-.15A.47.47,0,0,1,0,21.5V15a2.9,2.9,0,0,1,.89-2.12A2.85,2.85,0,0,1,3,12H4V3.5a1.44,1.44,0,0,1,.44-1.06A1.46,1.46,0,0,1,5.5,2H16a3.58,3.58,0,0,1,1.38.31,3.8,3.8,0,0,1,1.19.75l2.37,2.38a3.69,3.69,0,0,1,.75,1.19A3.53,3.53,0,0,1,22,8v4h1a3,3,0,0,1,3,3Z',
      transform: 'translate(0 -2)'
    }
  ]
};

export const PrintIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
