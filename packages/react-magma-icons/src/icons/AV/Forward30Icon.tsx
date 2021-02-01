import * as React from 'react';
import { IconProps } from '../../IconProps';
import { renderIcon } from '../../SvgIcon';
const iconType = {
  paths: [
    {
      d:
        'M18.92 13c-.5 0-.91.37-.98.86-.48 3.37-3.77 5.84-7.42 4.96-2.25-.54-3.91-2.27-4.39-4.53C5.32 10.42 8.27 7 12 7v2.79c0 .45.54.67.85.35l3.79-3.79c.2-.2.2-.51 0-.71l-3.79-3.79c-.31-.31-.85-.09-.85.36V5c-4.94 0-8.84 4.48-7.84 9.6.6 3.11 2.9 5.5 5.99 6.19 4.83 1.08 9.15-2.2 9.77-6.67.09-.59-.4-1.12-1-1.12zm-8.38 2.22c-.06.05-.12.09-.2.12-.08.03-.17.04-.27.04-.09 0-.17-.01-.25-.04-.08-.03-.14-.06-.2-.11s-.1-.1-.13-.17-.05-.14-.05-.22h-.85c0 .21.04.39.12.55.08.16.19.28.33.38.14.1.29.18.46.23.17.05.35.07.53.07.21 0 .41-.03.6-.08s.34-.14.48-.24c.14-.1.24-.24.32-.39.08-.15.12-.33.12-.53 0-.23-.06-.44-.18-.61-.12-.17-.3-.3-.54-.39.1-.05.2-.1.28-.17.08-.07.15-.14.2-.22.05-.08.1-.16.13-.25s.04-.18.04-.27c0-.2-.04-.37-.11-.53-.07-.16-.17-.28-.3-.38-.13-.1-.28-.18-.46-.23-.18-.05-.37-.08-.59-.08-.19 0-.38.03-.54.08-.16.05-.32.13-.44.23s-.23.22-.3.37c-.07.15-.11.3-.11.48h.85c0-.07.02-.14.05-.2.03-.06.07-.11.12-.15.05-.04.11-.07.18-.1.07-.03.14-.03.22-.03.1 0 .18.01.25.04s.13.06.18.11c.05.05.08.11.11.17.03.06.04.14.04.22 0 .18-.05.32-.16.43-.11.11-.26.16-.48.16h-.43v.66h.45c.11 0 .2.01.29.04.09.03.16.06.22.11s.11.12.14.2c.03.08.05.18.05.29 0 .09-.01.17-.04.24-.03.07-.08.11-.13.17zm3.9-3.44c-.18-.07-.37-.1-.59-.1-.22 0-.41.03-.59.1s-.33.18-.45.33c-.12.15-.23.34-.29.57-.06.23-.1.5-.1.82v.74c0 .32.04.6.11.82.07.22.17.42.3.57.13.15.28.26.46.33s.37.1.59.1c.22 0 .41-.03.59-.1s.33-.18.45-.33c.12-.15.22-.34.29-.57.07-.23.1-.5.1-.82v-.74c0-.32-.04-.6-.11-.82-.07-.22-.17-.42-.3-.57-.13-.15-.28-.26-.46-.33zm.01 2.57c0 .19-.01.35-.04.48s-.06.24-.11.32c-.05.08-.11.14-.19.17s-.16.05-.25.05-.18-.02-.25-.05c-.07-.03-.14-.09-.19-.17-.05-.08-.09-.19-.12-.32s-.04-.29-.04-.48v-.97c0-.19.01-.35.04-.48s.06-.23.12-.31c.06-.08.11-.14.19-.17s.16-.05.25-.05.18.02.25.05c.07.03.14.09.19.17.05.08.09.18.12.31s.04.29.04.48v.97h-.01z',
    },
  ],
  circles: [],
};

export const Forward30Icon = (props: IconProps) => renderIcon(props, iconType);
