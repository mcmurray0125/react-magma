import * as React from 'react';
import { IconProps } from '../../IconProps';
import { renderIcon } from '../../SvgIcon';
const iconType = {
  paths: [
    {
      d:
        'M16.6 16.8c.33-.44.95-.54 1.39-.21.52.39 1.08.81 1.61 1.21.44.32.53.94.2 1.38l-.01.02c-.32.44-.94.53-1.38.2-.53-.4-1.09-.82-1.62-1.21-.44-.32-.53-.93-.2-1.37 0 0 .01-.01.01-.02zM13 6v12l-5-3H7v3c0 .55-.45 1-1 1l-.1162-.0068C5.388 18.9352 5 18.5107 5 18v-3H4c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2h4l5-3zm1 2.65c.92.82 1.5 2.02 1.5 3.35s-.58 2.53-1.5 3.34zM21 11c.55 0 1 .45 1 1l-.0068.1162C21.9352 12.612 21.5107 13 21 13h-2c-.55 0-1-.45-1-1l.0068-.1162C18.0648 11.388 18.4893 11 19 11zm-2.58-6.41c.43-.33 1.05-.24 1.38.2l.01.02c.32.44.24 1.06-.19 1.38-.53.4-1.09.83-1.62 1.22-.44.33-1.05.24-1.38-.2l-.01-.02c-.33-.43-.25-1.05.19-1.38.52-.4 1.09-.82 1.62-1.22z',
    },
  ],
  circles: [],
};

export const CampaignIcon = (props: IconProps) => renderIcon(props, iconType);
