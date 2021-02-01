import * as React from 'react';
import { IconProps } from '../../IconProps';
import { renderIcon } from '../../SvgIcon';
const iconType = {
  paths: [
    {
      d:
        'M22 12c0 1.8142-.447 3.4874-1.3411 5.0195-.8941 1.5321-2.1073 2.7453-3.6394 3.6394C15.4875 21.5529 13.8142 22 12 22a9.8555 9.8555 0 01-2.8385-.4167c.5121-.8073.8507-1.519 1.0156-2.1354.0781-.2951.3125-1.211.7031-2.7474.1736.3386.4905.6315.9505.879.4601.2473.9549.371 1.4844.371 1.0504 0 1.9879-.2973 2.8125-.892.8247-.5945 1.4627-1.4127 1.914-2.4543.4515-1.0417.6772-2.2136.6772-3.5157 0-.9895-.2583-1.9184-.7748-2.7864-.5165-.868-1.2652-1.5755-2.246-2.1224-.981-.5469-2.0878-.8203-3.3204-.8203-.9115 0-1.7621.1258-2.552.3776-.79.2517-1.4606.586-2.0118 1.0026-.5512.4166-1.0243.8963-1.4193 1.4388-.395.5425-.6857 1.1046-.8724 1.6862-.1866.5816-.28 1.1632-.28 1.7448 0 .9028.1737 1.697.521 2.3828.3471.6858.855 1.1675 1.5234 1.4453.2604.1042.4253.0174.4947-.2604.0174-.0608.0521-.1953.1042-.4037.0521-.2083.0868-.3385.1042-.3906.052-.1996.0043-.3863-.1432-.5599-.4428-.5295-.6641-1.1849-.6641-1.9661 0-1.3108.4536-2.4371 1.3607-3.379.907-.9418 2.0942-1.4127 3.5612-1.4127 1.3107 0 2.3329.356 3.0664 1.0677.7335.7118 1.1002 1.6363 1.1002 2.7735 0 1.4756-.2973 2.73-.8919 3.763s-1.3563 1.5495-2.2851 1.5495c-.5296 0-.955-.1889-1.276-.5665-.3213-.3776-.4211-.8311-.2996-1.3606.0695-.3039.1845-.7097.345-1.2175.1607-.5078.2909-.9548.3907-1.3411s.1497-.714.1497-.9831c0-.434-.1171-.7943-.3515-1.0807-.2344-.2865-.5686-.4297-1.0026-.4297-.5382 0-.994.2474-1.3672.7422-.3733.4948-.5599 1.111-.5599 1.849 0 .6336.1085 1.1631.3255 1.5885L8.159 18.862c-.1476.6076-.204 1.3758-.1693 2.3047-1.7882-.79-3.2335-2.0096-4.336-3.6589C2.5512 15.8585 2 14.0226 2 12c0-1.8142.447-3.4874 1.3411-5.0195.8941-1.5321 2.1073-2.7453 3.6394-3.6394C8.5125 2.4471 10.1858 2 12 2s3.4874.447 5.0195 1.3411c1.5321.8941 2.7453 2.1073 3.6394 3.6394C21.5529 8.5125 22 10.1858 22 12z',
    },
  ],
  circles: [],
};

export const PinterestIcon = (props: IconProps) => renderIcon(props, iconType);
