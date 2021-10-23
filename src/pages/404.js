import React from 'react';
import Link from "next/link";
import Head from 'next/head';


const Custom404 = ()=>{

    return(
        <>
            {/* <Head>
                    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2695315085641819" crossorigin="anonymous"></script>
            </Head> */}
            <div className="wrong-directory">
                
                <h1>스우파 과몰입꾼 테스트 하러가실래요?</h1>
                <div>
                    <img style={imgStyle} src="/q1.jpg" alt="pic" />
                </div>
                <Link href={`/`} >
                    <a>지금 하러가기</a>
                </Link>
                <div>광고</div>
            </div>
        </>
    )
}

const imgStyle = {
    width:"300px",
}

export default Custom404