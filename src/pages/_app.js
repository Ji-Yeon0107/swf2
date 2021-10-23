import Head from 'next/head';
import React from 'react';
import PropTypes from 'prop-types';
import { RecoilRoot } from 'recoil';
import '../style/style.css'


const App = ({ Component }) => (

    <>
        <Head>
            {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2695315085641819" crossorigin="anonymous"></script> */}
            <meta name="twitter:card" content="summary"></meta>
            <meta property="og:url" content="https://swf-alpha.vercel.app/" />
            <meta property="og:title" content="스우파 과몰입꾼 테스트" />
            <meta property="og:description" content="헤이마마좀 춰본 정도..?" />
            <meta property="og:image" content="https://raw.githubusercontent.com/Ji-Yeon0107/swf2/main/public/logo.png" />
            <script src="https://developers.kakao.com/sdk/js/kakao.js"></script><script>Kakao.init('178a2bb850640c5dee765d4a93e39bfb');</script>
            <title>스우파 과몰입꾼 테스트</title>
        </Head>
        <RecoilRoot>
            <Component />
        </RecoilRoot>
      {/* <GlobalStyle />
      <Normalize /> */}
    </>
  );
  
  App.propTypes = {
    Component: PropTypes.elementType.isRequired,
  };
  
export default App