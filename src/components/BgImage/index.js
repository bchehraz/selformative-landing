import React from 'react';
import Img from 'gatsby-image';
//import styled from 'styled-components';

// const BgImage = styled(Image)`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   z-index: -1;
//   height: 100vh;
//
//   & > img {
//     object-fit: cover !important; // or whatever
//     object-position: 0% 0% !important; // or whatever
//     font-family: 'object-fit: cover !important; object-position: 0% 0% !important;' // needed for IE9+ polyfill
//   }
// `;

const BgImage = (props) => (
    <Img
      sizes={props.image.sizes}
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        height: '100vh',
        width: '100%',
        zIndex: '-1',
      }}
    />
);

export default BgImage;
