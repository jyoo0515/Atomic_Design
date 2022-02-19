import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { normalize } from 'styled-normalize';

export default createGlobalStyle`
    ${reset};
    ${normalize};
    @import url(//cdn.rawgit.com/hiun/NanumSquare/master/nanumsquare.css);
    html{
        font-size: 16px;
        font-family: 'NanumSquare', sans-serif !important;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    * {
        box-sizing: border-box;
    }
`;
