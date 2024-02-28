import React from 'react';

export interface BgImageProps {
  type: string;
}

export const BgImage = (props: BgImageProps) => {
  console.log(props.type)

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: 'rgb(255,255,0)', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: 'rgb(255,0,0)', stopOpacity: 1}} />
        </linearGradient>
        <linearGradient id="gradient2" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" style={{stopColor: 'rgb(0,0,255)', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: 'rgb(0,255,255)', stopOpacity: 1}} />
        </linearGradient>
        <linearGradient id="gradient3" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" style={{stopColor: 'rgb(0,255,0)', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: 'rgb(255,0,255)', stopOpacity: 1}} />
        </linearGradient>
        <pattern id="triangles" width="100" height="100" patternUnits="userSpaceOnUse">
          <polygon points="50,0 0,100 100,100" fill="url(#gradient1)"/>
          <polygon points="50,0 100,100 100,0" fill="url(#gradient2)"/>
          <polygon points="50,0 0,100 0,0" fill="url(#gradient3)"/>
        </pattern>
      </defs>
      <polygon points="100,20 155,55 130,130 70,130 45,55" fill="url(#triangles)"/>
    </svg>
  );




  // triangle gradient
  // return(
  //   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
  //   <defs>
  //     <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
  //       <stop offset="0%" style={{stopColor:"rgb(255,255,0)",stopOpacity:1}} />
  //       <stop offset="100%" style={{stopColor:"rgb(255,0,0)",stopOpacity:1}} />
  //     </linearGradient>
  //     <pattern id="triangles" width="20" height="20" patternUnits="userSpaceOnUse">
  //       <polygon points="10,0 0,20 20,20" fill="url(#gradient)"/>
  //     </pattern>
  //   </defs>
  //   <rect width="100%" height="100%" fill="url(#triangles)"/>
  //   </svg>
  // )
}