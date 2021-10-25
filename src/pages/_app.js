import Head from 'next/head';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'

import PropTypes from 'prop-types';
import { RecoilRoot } from 'recoil';
import '../style/style.css'


const App = ({ Component }) => {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  
  return(
    <>
        <Head>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}></script>
        <script>
          {
          `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)};
          gtag('js', new Date());
          gtag('config', gtag.GA_TRACKING_ID);`
          }
        </script>
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
  )
  }
  
  App.propTypes = {
    Component: PropTypes.elementType.isRequired,
  };
  
export default App