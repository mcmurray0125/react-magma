import * as React from 'react';
import { IconProps } from '../../IconProps';
import { renderIcon } from '../../SvgIcon';
const iconType = {
  paths: [
    {
      d:
        'M14 20.5c.28 0 .5.22.5.5s-.22.5-.5.5-.5-.22-.5-.5.22-.5.5-.5zm-4 0c.28 0 .5.22.5.5s-.22.5-.5.5-.5-.22-.5-.5.22-.5.5-.5zM3.21 4.56c.39-.39 1.02-.39 1.41 0l14.81 14.81c.39.4.39 1.03 0 1.42-.39.39-1.02.39-1.41 0l-3.08-3.07c.03.09.06.18.06.28 0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1c.1 0 .19.03.28.06l-2.81-2.81c-.11.71-.73 1.25-1.47 1.25-.83 0-1.5-.67-1.5-1.5 0-.74.54-1.36 1.25-1.47L6.94 9.72c.03.09.06.18.06.28 0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1l.28.04-3.07-3.07a.9959.9959 0 010-1.41zM6 17c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm4 0c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm8-4c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zM6 13c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm15 .5c.28 0 .5.22.5.5s-.22.5-.5.5-.5-.22-.5-.5.22-.5.5-.5zm-18 0c.28 0 .5.22.5.5s-.22.5-.5.5-.5-.22-.5-.5.22-.5.5-.5zm11-5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5l-.2-.02c-.67-.09-1.19-.61-1.28-1.28l-.02-.2c0-.83.67-1.5 1.5-1.5zm4 .5c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm3 .5c.28 0 .5.22.5.5s-.22.5-.5.5-.5-.22-.5-.5.22-.5.5-.5zm-18 0c.28 0 .5.22.5.5s-.22.5-.5.5-.5-.22-.5-.5.22-.5.5-.5zM14 5c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm4 0c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm-8 0c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1zm4-2.5c.28 0 .5.22.5.5s-.22.5-.5.5-.5-.22-.5-.5.22-.5.5-.5zm-4 0c.28 0 .5.22.5.5s-.22.5-.5.5-.5-.22-.5-.5.22-.5.5-.5z',
    },
  ],
  circles: [],
};

export const BlurOffIcon = (props: IconProps) => renderIcon(props, iconType);
