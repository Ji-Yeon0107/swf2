import Document, { Html, Head, Main, NextScript } from 'next/document'
import Ad from '../components/Ad'

class MyDocument extends Document {


  render() {
    return (
      <Html>
        <Head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2695315085641819" crossorigin="anonymous"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
            <script type="text/javascript" src="//t1.daumcdn.net/kas/static/ba.min.js" async></script>
            <Ad />
        </body>
      </Html>
    )
  }
}

export default MyDocument