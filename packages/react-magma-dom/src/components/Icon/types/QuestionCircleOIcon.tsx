import * as React from 'react';
import { IconProps, renderIcon } from '../utils';

const iconType = {
  viewBox: '0 0 28 28',
  paths: [
    {
      d:
        'M16,19.54v2.92a.55.55,0,0,1-.58.58H12.54a.55.55,0,0,1-.58-.58V19.54a.55.55,0,0,1,.58-.58h2.92a.55.55,0,0,1,.58.58Zm4.67-9a4.48,4.48,0,0,1-.28,1.64,3.24,3.24,0,0,1-.82,1.26,8.58,8.58,0,0,1-.95.8c-.26.18-.63.4-1.09.66s-.67.39-.85.51a2.38,2.38,0,0,0-.47.43.83.83,0,0,0-.21.53v.59a.57.57,0,0,1-.16.42.61.61,0,0,1-.42.16H12.54a.61.61,0,0,1-.42-.16.57.57,0,0,1-.16-.42V15.68a3.44,3.44,0,0,1,.19-1.18,3.2,3.2,0,0,1,.44-.87A3,3,0,0,1,13.3,13a6.75,6.75,0,0,1,.75-.47c.18-.1.45-.22.81-.38a7.08,7.08,0,0,0,1.36-.79,1.06,1.06,0,0,0,.4-.89,1.55,1.55,0,0,0-.79-1.3,3,3,0,0,0-1.74-.54,2.94,2.94,0,0,0-1.73.49,8.62,8.62,0,0,0-1.46,1.52.55.55,0,0,1-.46.21.57.57,0,0,1-.34-.1l-2-1.5a.51.51,0,0,1-.22-.36A.6.6,0,0,1,8,8.46,7.09,7.09,0,0,1,14.36,5a6.71,6.71,0,0,1,4.35,1.63,4.91,4.91,0,0,1,2,3.91ZM14,2.33a11.34,11.34,0,0,0-4.53.93A11.52,11.52,0,0,0,3.26,9.47a11.5,11.5,0,0,0,0,9.06,11.52,11.52,0,0,0,6.21,6.21,11.5,11.5,0,0,0,9.06,0,11.52,11.52,0,0,0,6.21-6.21,11.5,11.5,0,0,0,0-9.06,11.52,11.52,0,0,0-6.21-6.21A11.34,11.34,0,0,0,14,2.33ZM28,14a13.74,13.74,0,0,1-1.88,7A14,14,0,0,1,21,26.12,13.74,13.74,0,0,1,14,28a13.74,13.74,0,0,1-7-1.88A14,14,0,0,1,1.88,21,13.74,13.74,0,0,1,0,14,13.74,13.74,0,0,1,1.88,7,14,14,0,0,1,7,1.88,13.74,13.74,0,0,1,14,0a13.74,13.74,0,0,1,7,1.88A14,14,0,0,1,26.12,7,13.74,13.74,0,0,1,28,14Z',
      transform: 'translate(0 0)'
    }
  ]
};

export const QuestionCircleOIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);