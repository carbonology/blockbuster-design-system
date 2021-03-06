import React from 'react';
import { createGlobalStyle } from 'styled-components'
import { Colors, FontSizes, RespFontSizes } from '../theme';

const Global = createGlobalStyle`
  :root {



    /* Colors */
    --black: ${Colors.black};
    --deepBlue: ${Colors.deepBlue};
    --blue: ${Colors.blue};
    --gold: ${Colors.gold};
    --white: ${Colors.white};



    /* Color utilities */
    --bgColor: var(--black);



    /* Font sizes */
    --fontCopy: ${FontSizes.copy};
    --fontTiny: ${FontSizes.tiny};
    --fontSmall: ${FontSizes.small};
    --fontMed: ${FontSizes.medium};
    --fontBig: ${FontSizes.big};
    --fontHuge: ${FontSizes.huge};



    /* Fonts */
    --fontDecorative: "Montserrat", sans-serif;
    --fontMain: "Roboto", sans-serif;



    /* Utilities */
    --borderRadius: 4px;
    --maxWidth: 1200px;
    --resp-flex-direction: row;
    --transition: all .2s ease-in;
  }

  * {
    border: none;
    box-sizing: border-box;
    font-family: var(--fontMain);
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  @media (max-width: 800px) {
    :root {
      /* Font sizes */
      --fontCopy: ${RespFontSizes.copy};
      --fontTiny: ${RespFontSizes.tiny};
      --fontSmall: ${RespFontSizes.small};
      --fontMed: ${RespFontSizes.medium};
      --fontBig: ${RespFontSizes.big};
      --fontHuge: ${RespFontSizes.huge};

      --resp-flex-direction: column;
    }
  }
`;

const GlobalStyle = () => (
  <Global />
);

export default GlobalStyle;
