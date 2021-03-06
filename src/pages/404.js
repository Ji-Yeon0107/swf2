import React from 'react';
import Link from "next/link";
import Head from 'next/head';
import Ad from '../components/Ad'


const Custom404 = ()=>{

    return(
        <>
            <Head>
                   <title>스우파 과몰입꾼 테스트하러 가실래요?</title>
            </Head>
            <div className="wrong-directory">
                
                <h1>스우파 과몰입꾼 테스트 하러가실래요?</h1>
                <div>
                    <img style={imgStyle} src="/q1.jpg" alt="pic" />
                </div>
                <Link href={`/`} >
                    <a>지금 하러가기</a>
                </Link>
            </div>
        </>
    )
}

const imgStyle = {
    width:"300px",
}

export default Custom404