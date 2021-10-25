import Document, { Html, Head, Main, NextScript } from 'next/document'
import Ad from '../components/Ad'
import { GA_TRACKING_ID } from '../lib/gtag'


class MyDocument extends Document {


  render() {
    return (
      <Html>
        <Head>
        {/* <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}></script>
        <script>
          {
          `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)};
          gtag('js', new Date());
          gtag('config', GA_TRACKING_ID);`
          }
        </script> */}
        <link rel="shortcut icon" href="swf.ico" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2695315085641819" crossorigin="anonymous"></script>
       

        </Head>
        <body>
        <Ad />
          <Main />
          <NextScript />
            <script type="text/javascript" src="//t1.daumcdn.net/kas/static/ba.min.js" async></script>
            
        </body>
      </Html>
    )
  }
}

export default MyDocument