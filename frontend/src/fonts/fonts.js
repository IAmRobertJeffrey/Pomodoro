import { createGlobalStyle } from "styled-components";

import Poppins from "../fonts/Poppins-Light.ttf";
import PoppinsThick from "../fonts/Poppins-SemiBold.ttf";
import MonoThick from "../fonts/AzeretMono-Black.ttf";
import Mono from "../fonts/AzeretMono-Regular.ttf";
import MonoLight from "../fonts/AzeretMono-Thin.ttf";

export default createGlobalStyle`

    @font-face {
        font-family: 'Poppins';
        src: url(${Poppins}) format('woff2')
    }

    @font-face {
        font-family: 'PoppinsThick';
        src: url(${PoppinsThick}) format('woff2')
    }

    @font-face {
        font-family: 'MonoThick';
        src: url(${MonoThick}) format('woff2')
    }

    @font-face {
        font-family: 'Mono';
        src: url(${Mono}) format('woff2')
    }

    @font-face {
        font-family: 'MonoLight';
        src: url(${MonoLight}) format('woff2')
    }
`;
