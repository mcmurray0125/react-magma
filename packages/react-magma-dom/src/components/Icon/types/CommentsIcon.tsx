import * as React from 'react';
import { IconProps, renderIcon } from '../utils';

const iconType = {
  viewBox: '0 0 28 22.01',
  paths: [
    {
      d:
        'M22,11a6.32,6.32,0,0,1-1.47,4,9.84,9.84,0,0,1-4,2.91A13.93,13.93,0,0,1,11,19a15.37,15.37,0,0,1-2.75-.25,13,13,0,0,1-4.34,2A11.38,11.38,0,0,1,2.56,21h0a.47.47,0,0,1-.32-.12A.49.49,0,0,1,2,20.54a.16.16,0,0,1,0-.1.31.31,0,0,1,0-.1.22.22,0,0,1,0-.1l0-.07,0-.09c0-.06.06-.08.07-.08s0,0,.07-.08.06-.08.06-.07l.36-.39a5.27,5.27,0,0,0,.4-.46c.09-.11.2-.26.36-.45a3.85,3.85,0,0,0,.39-.6c.11-.21.21-.44.32-.69a9,9,0,0,1-3-2.77A6.13,6.13,0,0,1,0,11,6.31,6.31,0,0,1,1.47,7a10,10,0,0,1,4-2.92A14.11,14.11,0,0,1,11,3a14.11,14.11,0,0,1,5.52,1.07,10,10,0,0,1,4,2.92A6.31,6.31,0,0,1,22,11Zm6,4a6.13,6.13,0,0,1-1.11,3.51,9.09,9.09,0,0,1-3.05,2.76c.11.25.21.48.32.69a3.3,3.3,0,0,0,.4.6l.35.45a5.27,5.27,0,0,0,.4.46,5.25,5.25,0,0,1,.36.4l.07.07.07.07a.33.33,0,0,0,.06.08l.05.09,0,.08,0,.09c0,.06,0,.1,0,.1a.16.16,0,0,0,0,.1.56.56,0,0,1-.2.35.48.48,0,0,1-.34.11c-.52-.08-1-.16-1.35-.25a13.35,13.35,0,0,1-4.34-2A16.35,16.35,0,0,1,17,23a13.13,13.13,0,0,1-7.38-2.07c.61.05,1.07.07,1.38.07a16.46,16.46,0,0,0,4.83-.71,13.74,13.74,0,0,0,4.12-2A10.44,10.44,0,0,0,23,15a8,8,0,0,0,.69-6.34,9.25,9.25,0,0,1,3.19,2.78A6.16,6.16,0,0,1,28,15Z',
      transform: 'translate(0 -2.99)'
    }
  ]
};

export const CommentsIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);