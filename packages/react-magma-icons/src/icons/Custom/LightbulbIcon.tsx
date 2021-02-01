import * as React from 'react';
import { IconProps } from '../../IconProps';
import { renderIcon } from '../../SvgIcon';
const iconType = {
  paths: [
    {
      d:
        'M14.6 20.78v.86a.86.86 0 01-.86.86H10.3a.86.86 0 01-.86-.86v-.86zM12.02 5.3c3.3248 0 6.02 2.6952 6.02 6.02 0 2.0468-1.0234 3.8442-2.58 4.9364V18.2a.86.86 0 01-.86.86H9.44a.86.86 0 01-.86-.86v-1.9436C7.0234 15.1642 6 13.3668 6 11.32 6 7.9952 8.6952 5.3 12.02 5.3zM5.3315 16.7924a.86.86 0 011.216 0l.077.088a.86.86 0 01-.077 1.1281l-.608.608a.86.86 0 01-1.216 0l-.077-.088a.86.86 0 01.077-1.128zm12.161 0a.86.86 0 011.216 0l.608.608a.86.86 0 11-1.216 1.2162l-.608-.608a.86.86 0 010-1.2162zM12.02 7.02c-2.3748 0-4.3 1.9252-4.3 4.3 0 1.763 1.0578 3.2766 2.58 3.9388V17.34h3.44v-2.0812c1.5222-.6622 2.58-2.1758 2.58-3.9388 0-2.3748-1.9252-4.3-4.3-4.3zm-8.6 3.44a.86.86 0 110 1.72h-.86a.86.86 0 110-1.72zm18.06 0a.86.86 0 110 1.72h-.86a.86.86 0 110-1.72zM4.7234 4.0234a.86.86 0 011.2161 0l.608.608.077.0881a.86.86 0 01-.077 1.128l-.088.077a.86.86 0 01-1.128-.077l-.608-.608a.86.86 0 010-1.216zm13.377 0a.86.86 0 111.2162 1.2161l-.608.608-.0881.077a.86.86 0 01-1.128-1.293zM12.02 1a.86.86 0 01.86.86v.86a.86.86 0 11-1.72 0v-.86a.86.86 0 01.86-.86z',
    },
  ],
  circles: [],
};

export const LightbulbIcon = (props: IconProps) => renderIcon(props, iconType);
