import React from 'react';
import Link from "next/link";

const Custom404 = ()=>{

    return(
        <div className="wrong-directory">
            <h1>스우파 과몰입꾼 테스트 하러가실래요?</h1>
            <Link href={`/`} >
                <a>지금 하러가기</a>
            </Link>
            <div>광고</div>
        </div>
    )
}

export default Custom404