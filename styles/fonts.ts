import { css } from 'styled-components';

const PoppinsFont = css`
    @font-face {
        font-family: 'Poppins';
        src:
            local('Poppins'),
            local('poppins'), 
            url('fonts/Poppins/Poppins-Regular.ttf') format('truetype');
        font-weight: 400;
        font-style: normal;
        font-display: auto;
    }

    @font-face {
        font-family: 'Poppins';
        src:
            local('Poppins'),
            local('poppins'), 
            url('fonts/Poppins/Poppins-Medium.ttf') format('truetype');
        font-weight: 500;
        font-style: normal;
        font-display: auto;
    }

    @font-face {
        font-family: 'Poppins';
        src:
            local('Poppins'),
            local('poppins'), 
            url('fonts/Poppins/Poppins-SemiBold.ttf') format('truetype');
        font-weight: 600;
        font-style: normal;
        font-display: auto;
    }

    @font-face {
        font-family: 'Poppins';
        src:
            local('Poppins'),
            local('poppins'), 
            url('fonts/Poppins/Poppins-Bold.ttf') format('truetype');
        font-weight: 700;
        font-style: normal;
        font-display: auto;
    }

    @font-face {
        font-family: 'Poppins';
        src:
            local('Poppins'),
            local('poppins'), 
            url('fonts/Poppins/Poppins-ExtraBold.ttf') format('truetype');
        font-weight: 800;
        font-style: normal;
        font-display: auto;
    }
`;

const PoppinsItalicFont = css`
    @font-face {
        font-family: 'Poppins';
        src:
            local('Poppins'),
            local('poppins'), 
            url('fonts/Poppins/Poppins-Italic.ttf') format('truetype');
        font-weight: 400;
        font-style: italic;
        font-display: auto;
    }

    @font-face {
        font-family: 'Poppins';
        src:
            local('Poppins'),
            local('poppins'), 
            url('fonts/Poppins/Poppins-MediumItalic.ttf') format('truetype');
        font-weight: 500;
        font-style: italic;
        font-display: auto;
    }

    @font-face {
        font-family: 'Poppins';
        src:
            local('Poppins'),
            local('poppins'), 
            url('fonts/Poppins/Poppins-SemiBoldItalic.ttf') format('truetype');
        font-weight: 600;
        font-style: italic;
        font-display: auto;
    }

    @font-face {
        font-family: 'Poppins';
        src:
            local('Poppins'),
            local('poppins'), 
            url('fonts/Poppins/Poppins-BoldItalic.ttf') format('truetype');
        font-weight: 700;
        font-style: italic;
        font-display: auto;
    }

    @font-face {
        font-family: 'Poppins';
        src:
            local('Poppins'),
            local('poppins'), 
            url('fonts/Poppins/Poppins-ExtraBoldItalic.ttf') format('truetype');
        font-weight: 800;
        font-style: italic;
        font-display: auto;
    }
`;

const SFMonoFont = css`
    @font-face {
        font-family: 'SF Mono';
        src:
            local('SF Mono'),
            local('sf mono'), 
            url('fonts/SFMono/SFMono-Regular.woff2') format('woff2');
        font-weight: 400;
        font-style: normal;
        font-display: auto;
    }

    @font-face {
        font-family: 'SF Mono';
        src:
            local('SF Mono'),
            local('sf mono'), 
            url('fonts/SFMono/SFMono-Medium.woff2') format('woff2');
        font-weight: 500;
        font-style: normal;
        font-display: auto;
    }

    @font-face {
        font-family: 'SF Mono';
        src:
            local('SF Mono'),
            local('sf mono'), 
            url('fonts/SFMono/SFMono-Semibold.woff2') format('woff2');
        font-weight: 600;
        font-style: normal;
        font-display: auto;
    }
`;

const SFMonoItalicFont = css`
    @font-face {
        font-family: 'SF Mono';
        src:
            local('SF Mono'),
            local('sf mono'), 
            url('fonts/SFMono/SFMono-RegularItalic.woff2') format('woff2');
        font-weight: 400;
        font-style: italic;
        font-display: auto;
    }

    @font-face {
        font-family: 'SF Mono';
        src:
            local('SF Mono'),
            local('sf mono'), 
            url('fonts/SFMono/SFMono-MediumItalic.woff2') format('woff2');
        font-weight: 500;
        font-style: italic;
        font-display: auto;
    }

    @font-face {
        font-family: 'SF Mono';
        src:
            local('SF Mono'),
            local('sf mono'), 
            url('fonts/SFMono/SFMono-SemiboldItalic.woff2') format('woff2');
        font-weight: 600;
        font-style: italic;
        font-display: auto;
    }
`;

const fonts = css`
    ${PoppinsFont}
    ${PoppinsItalicFont}
    ${SFMonoFont}
    ${SFMonoItalicFont}
`;

export default fonts;