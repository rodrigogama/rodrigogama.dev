import { createGlobalStyle } from 'styled-components';
import { tachnyonsStyles } from './tachyons';

export default createGlobalStyle`
  ${tachnyonsStyles};

  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }

  html, body {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }

  html {
    box-sizing: border-box;
  }

  body {
    position: fixed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: -apple-system, BlinkMacSystemFont, 'avenir next', avenir, 'helvetica neue', helvetica, ubuntu, roboto, noto, 'segoe ui', arial, sans-serif;
    user-select: none;

    &.is-disabled {
      pointer-events: none;
    }
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  img {
  border-style: none;
    max-width: 100%;
  }

  a img, fieldset, img {
    border: none;
  }

    /* @media only screen and (min-width: 1025px) {
      body * {
        cursor: none;
      }

      body a, body button {
        cursor: none;
      }
    } */
`;
