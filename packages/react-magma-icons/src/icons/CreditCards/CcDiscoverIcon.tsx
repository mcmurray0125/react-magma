import * as React from 'react';
import { IconProps } from '../../IconProps';
import { renderIcon } from '../../SvgIcon';
const iconType = {
  paths: [
    {
      d:
        'M3.2616 10.76c0 .3544-.125.646-.3751.8751-.2015.1805-.5104.2707-.927.2707h-.1773v-2.292h.1773c.4236 0 .7325.0937.927.2811.25.2155.3751.5037.3751.8646v.0006zm18.5015-.6772c0 .3613-.2223.542-.6668.542h-.1978V9.5722h.2083c.4375 0 .6563.1702.6563.5105zM3.9599 10.76c0-.5138-.1737-.9323-.521-1.2555-.3473-.3231-.7953-.4845-1.344-.4841h-.9894v3.4687h.9894c.5137 0 .927-.132 1.2396-.3962.4165-.3543.6248-.7988.6248-1.3335l.0006.0006zm.312 1.729h.6774V9.0206H4.272v3.4687zm3.334-1.0518c0-.2776-.0711-.4929-.2135-.6457-.1423-.1529-.4044-.2987-.7864-.4376-.2014-.0696-.3385-.1355-.4112-.1977-.0728-.0623-.1093-.1422-.1097-.2398 0-.1112.0469-.2032.1406-.276.0937-.0727.2135-.1092.3593-.1096.2015 0 .3855.0937.552.2812l.354-.4585c-.2847-.2571-.625-.3856-1.0209-.3856-.3057 0-.5625.0954-.7706.2864-.208.191-.3123.4253-.3127.703 0 .243.0624.4357.1873.578.1248.1424.347.2692.6668.3804.257.0902.4134.1562.469.1978.1318.0832.1977.2012.1977.354 0 .139-.0486.2552-.1458.349-.0972.0937-.2223.1405-.3751.1405-.3333 0-.5799-.1528-.7397-.4585l-.4375.4165c.3056.4445.705.6668 1.1982.6668.3543 0 .6425-.106.8645-.318.2221-.2119.3332-.488.3332-.8283l.0005.0017zm2.8959.9375v-.8021c-.2571.257-.528.3856-.8127.3856-.3403 0-.6199-.1128-.8388-.3384-.219-.2255-.3285-.512-.3285-.8593 0-.3333.1095-.6162.3285-.8488.219-.2325.488-.3488.8073-.3488.2987 0 .5799.132.8436.396v-.802c-.2777-.1389-.5556-.2083-.8336-.2083-.5138 0-.9496.1754-1.3074.5262-.3578.3508-.5367.7796-.5367 1.2863 0 .5068.1772.9355.5315 1.2863.3543.3508.7883.5262 1.302.5262.2917 0 .573-.0659.8436-.1977l.0012-.0012zm12.834 6.2922v-5.49c-.4515.2776-.9532.5693-1.505.875-.552.3057-1.3766.7119-2.4741 1.2186-1.0975.5068-2.2417.9842-3.4325 1.4322-1.1909.448-2.6406.9151-4.349 1.4013-1.7085.4861-3.4586.8958-5.2503 1.2291h16.3447c.1805 0 .3368-.066.469-.1977.1323-.1319.1982-.2882.1978-.469l-.0006.0005zm-8.8648-7.886c0-.5207-.184-.9652-.5519-1.3335-.3679-.3683-.8124-.5523-1.3335-.5519-.5212.0004-.9657.1844-1.3336.5519-.368.3675-.5519.812-.5519 1.3336 0 .5215.184.966.5519 1.3335.3679.3676.8124.5515 1.3336.5519.5211.0004.9656-.1836 1.3335-.5519.368-.3683.5519-.8128.5519-1.3335zm1.5833 1.802l1.4998-3.5625h-.7397l-.9375 2.3334-.927-2.3334h-.7397l1.4794 3.5626h.3647zm1.802-.0938h1.917v-.5834h-1.2397v-.9375h1.1982v-.5834h-1.1982v-.7706h1.2396v-.5938h-1.917v3.4687zm4.073 0h.8337l-1.0938-1.4585c.5277-.1112.7916-.4377.7916-.9794 0-.3263-.1077-.5799-.3232-.7607-.2155-.1809-.5176-.2711-.9066-.2707h-1.0103v3.4687h.6772V11.103h.094l.9374 1.386zm2.0733-7.0938v13.2092c0 .3889-.1338.7187-.4013.9894-.2676.2707-.5923.406-.9743.406H1.3756c-.382 0-.7067-.1353-.9742-.406C.1338 19.3233 0 18.9935 0 18.6046V5.3954c0-.3889.1338-.7187.4014-.9894C.6689 4.1353.9937 4 1.3756 4H22.627c.382 0 .7067.1353.9743.406.2675.2707.4013.6005.4013.9894z',
    },
  ],
  circles: [],
};

export const CcDiscoverIcon = (props: IconProps) => renderIcon(props, iconType);
