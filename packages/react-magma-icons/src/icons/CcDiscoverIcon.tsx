import * as React from 'react';
import { IconProps } from '../iconProps';
import { renderIcon } from '../SvgIcon';

const iconType = {
  viewBox: '0 0 36 24',
  paths: [
    {
      d:
        'M4.89,12.14a1.71,1.71,0,0,1-.56,1.31,2,2,0,0,1-1.39.41H2.67V10.42h.27a2,2,0,0,1,1.39.42,1.66,1.66,0,0,1,.56,1.3Zm27.75-1c0,.55-.33.82-1,.82h-.3V10.36h.32C32.31,10.36,32.64,10.61,32.64,11.12Zm-26.7,1a2.44,2.44,0,0,0-.78-1.88,2.83,2.83,0,0,0-2-.73H1.66v5.2H3.14A2.77,2.77,0,0,0,5,14.14a2.5,2.5,0,0,0,.94-2Zm.47,2.59h1V9.53h-1Zm5-1.57a1.38,1.38,0,0,0-.32-1,3.19,3.19,0,0,0-1.18-.66,1.76,1.76,0,0,1-.62-.3.43.43,0,0,1-.16-.35.51.51,0,0,1,.21-.42.85.85,0,0,1,.54-.16,1.09,1.09,0,0,1,.82.42l.53-.69A2.21,2.21,0,0,0,9.7,9.45a1.65,1.65,0,0,0-1.15.43,1.4,1.4,0,0,0-.47,1.06,1.28,1.28,0,0,0,.28.87,2.45,2.45,0,0,0,1,.57,3.48,3.48,0,0,1,.7.29.6.6,0,0,1,.3.53.69.69,0,0,1-.22.53.78.78,0,0,1-.56.21,1.18,1.18,0,0,1-1.11-.69l-.66.62a2.09,2.09,0,0,0,1.8,1,1.81,1.81,0,0,0,1.3-.47,1.65,1.65,0,0,0,.5-1.24Zm4.34,1.4v-1.2a1.75,1.75,0,0,1-1.22.58,1.68,1.68,0,0,1-1.26-.51,1.92,1.92,0,0,1,0-2.56,1.6,1.6,0,0,1,1.21-.53,1.78,1.78,0,0,1,1.27.6V9.73a2.88,2.88,0,0,0-1.25-.31,2.73,2.73,0,0,0-2,.79,2.72,2.72,0,0,0,0,3.86,2.65,2.65,0,0,0,2,.79,2.85,2.85,0,0,0,1.27-.3ZM35,24V15.77c-.68.41-1.43.85-2.26,1.31S30.68,18.15,29,18.91s-3.36,1.47-5.15,2.15-4,1.37-6.52,2.1S12.17,24.5,9.49,25H34a1,1,0,0,0,1-1ZM21.7,12.17a2.82,2.82,0,0,0-4.82-2,2.82,2.82,0,0,0,0,4,2.72,2.72,0,0,0,2,.83,2.82,2.82,0,0,0,2.82-2.83Zm2.38,2.71,2.25-5.35H25.22L23.81,13l-1.39-3.5H21.31l2.22,5.35Zm2.7-.15h2.88v-.87H27.8V12.45h1.79v-.87H27.8V10.42h1.86V9.53H26.78Zm6.11,0h1.25L32.5,12.55a1.36,1.36,0,0,0,1.19-1.47,1.39,1.39,0,0,0-.49-1.14,2,2,0,0,0-1.36-.41H30.33v5.2h1V12.66h.15ZM36,4.09V23.91a2,2,0,0,1-.6,1.48,2,2,0,0,1-1.46.61H2.06A2,2,0,0,1,.6,25.39,2,2,0,0,1,0,23.91V4.09A2,2,0,0,1,.6,2.61,2,2,0,0,1,2.06,2H33.94a2,2,0,0,1,1.46.61A2,2,0,0,1,36,4.09Z',
      transform: 'translate(0 -2)',
    },
  ],
};

export const CcDiscoverIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);