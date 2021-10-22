import Head from 'next/head';
import React, {useState} from 'react';
// import wrap from '../core/config/redux';
import PropTypes from 'prop-types';
import { RecoilRoot } from 'recoil';
import '../style/style.css'


const App = ({ Component }) => (

    <>
        <Head>
            <meta charSet="utf-8" />
            <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
            />
            <meta name="twitter:card" content="summary"></meta>
            <meta property="og:url" content="https://swf-alpha.vercel.app/" />
            <meta property="og:title" content="스우파 과몰입꾼 테스트" />
            <meta property="og:description" content="헤이마마좀 춰본 정도..?" />
            <meta property="og:image" content="http://graphics8.nytimes.com/images/2011/12/08/technology/bits-newtwitter/bits-newtwitter-tmagArticle.jpg" />
            <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
            <script>
                Kakao.init('178a2bb850640c5dee765d4a93e39bfb');
            </script>
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
  
//   export default wrap.withRedux(App);
export default App