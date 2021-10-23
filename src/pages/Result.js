import React, {useEffect, useState} from 'react'
import { useRouter } from "next/router";
import Link from "next/link";
import { useRecoilState } from 'recoil'
// import { startState } from '../states/states'
import { scoreState } from '../states/states';
import Head from 'next/head';

const Result = () => {

    const router = useRouter();

    // const [start, setStart] = useRecoilState(startState);
    const [score, setScore] = useRecoilState(scoreState);

    const [level, setLevel] = useState("");
    
    const test = () => {
        Kakao.Link.createCustomButton({
          container: '.kakao-link-btn',
          templateId: 63843,
          templateArgs: {
            'score': router.query.score,
            'level': level,
            'level2': router.query.score,
            'url': "/result.png"
  }
});
    }
    useEffect(()=>{
      if(router.query.score == 100) {
       setLevel('과몰입 상위 1% "스우파 처돌이"')
      } else if(router.query.score>=90 && router.query.score<100) {
        setLevel('과몰입 상위 20% "스우파 중독자"')
       
      } else if(router.query.score>=65 && router.query.score<90) {
        setLevel('과몰입 상위 35% "스우파 쁘띠중독"')
      
      } else if(router.query.score>=50 && router.query.score<65) {
        setLevel('과몰입 상위 50% "스우파며드는 중')
       
      } else if(router.query.score>=35 && router.query.score<50) {
        setLevel('항문기는 아니고 "스우파 입덕부정기')
      
      } else if(router.query.score>=15 && router.query.score<35) {
        setLevel('과몰입 하위 35% "어디서 본 건 있는 사람"')
      
      } else if(router.query.score>=5 && router.query.score<15) {
        setLevel('과몰입 하위 15% "스우파를 모르고 죽을뻔한 사람"')
      } else if(router.query.score>=0 && router.query.score<5) {
        setLevel('그냥... "지나가던 행인"')
      }
    },[test])

    
    const classifyScore = () =>{
      if(router.query.score == 100) {
        return(
          <>
            <h2><span className="result-score high-score">{router.query.score}</span><span>점!!!</span></h2>
            <p>나는 과몰입 상위 1%</p>
            <p className="result-title high-score ">"스우파 처돌이"</p>
            <p>입니다.</p>
            <img src="/score1.png" className="result-img" alt="result" />
            <p className="result-desc">
            당신은 중독을 넘어 스우파에 미친자입니다.<br/>
방송으로 모자라 댄서들의 과거 행적과 온갖 TMI를 모두 섭렵하고 있는 당신. <br/>그야말로 과몰입 상태, <br/>현망진창입니다. <br/>
안타깝게도 벗어날 방법은 없는 것 같네요. <br/><br/>하루 빨리 스우파 콘서트를 알아보세요. <br/>스우파 못잃어!
            </p>
          </>
        )
      } else if(router.query.score>=90 && router.query.score<100) {
        return(
          <>
            <h2><span className="result-score high-score">{router.query.score}</span><span>점!!!</span></h2>
            <p>나는 과몰입 상위 20%</p>
            <p className="result-title high-score ">"스우파 중독자"</p>
            <p>입니다.</p>
            <img src="/score2.png" className="result-img" alt="result" />
            <p className="result-desc">
            당신은 지독한 스우파 중독입니다.<br/>
머리속엔 보아 better, 제시 cold blooded 노래가 자동 재생되고<br/> 유튜브 알고리즘은 스우파 영상으로 이미 잠식당했습니다.<br/> 
좋아하는 크루를 하나 고르라고 하면 가장 괴로워하며 머리를 쥐어 뜯는 당신.<br/><br/>
스우파 종영 이후 심각한 금단현상이 올 수도 있으니 주의하세요. 
            </p>
          </>
        )
      } else if(router.query.score>=65 && router.query.score<90) {
        
        return(
          <>
            <h2><span className="result-score high-score">{router.query.score}</span><span>점!!!</span></h2>
            <p>나는 과몰입 상위 35%</p>
            <p className="result-title high-score ">"스우파 쁘띠중독"</p>
            <p>입니다.</p>
            <img src="/score3.png" className="result-img" alt="result" />
            <p className="result-desc">
            미션 영상을 무한 반복하며 나노분석을 하고 댄스 분석영상까지 찾아본 사람입니다. <br/>
방송에서 탈락 배틀을 보기만 했는데도 기가 다 빨려버렸어요.<br/><br/>
그래도 화요일을 기다리며 스우파빨로 일주일을 살아가고 있군요.<br/>
난생 처음으로 화요일이 좋아진 당신입니다.
            </p>
          </>
        )
      } else if(router.query.score>=50 && router.query.score<65) {

        return(
          <>
            <h2><span className="result-score high-score">{router.query.score}</span><span>점!!!</span></h2>
            <p>나는 과몰입 상위 50%</p>
            <p className="result-title high-score ">"스우파며드는 중"</p>
            <p>입니다.</p>
            <img src="/score4.png" className="result-img" alt="result" />
            <p className="result-desc">
            유튜브 알고리즘이 스우파 관련 영상으로 점점 잠식당하고, <br/>미션 음악이 들리면 내적댄스를 추고 있네요.<br/> 
신경쓰이던 크루가 탈락했을 때 엠넷의 프로그램 진행방식을 열정적으로 욕하던 당신.<br/><br/>
스우파는 당신의 일상에 생각보다 많이 스며들었어요!<br/>
            </p>
          </>
        )
      } else if(router.query.score>=35 && router.query.score<50) {
        return(
          <>
            <h2><span className="result-score low-score">{router.query.score}</span><span>점!!!</span></h2>
            <p>나는 항문기는 아니고</p>
            <p className="result-title low-score">"스우파 입덕부정기"</p>
            <p>입니다.</p>
            <img src="/score5.png" className="result-img" alt="result" />
            <p className="result-desc">
            어디선가 헤이마마 음악이 들리<br/>면 타이밍에 맞춰 박수를 치고<br/> "나는 이정도로 트렌디해, 난 열정적이고 젊어!!"<br/>라고 생각하고 혼자 흐뭇해하는 사람입니다.<br/>
혹시 80년대생이 입덕부정기를 겪고 있다면 본인이 인싸라는 착각을 하고 있을 가능성이 높습니다.<br/><br/>
에이 나정도면 과몰입은 아니지~ 라고 생각하고 계신다면 큰 오산입니다.
            </p>
          </>
        )
      } else if(router.query.score>=15 && router.query.score<35) {
        return(
          <>
            <h2><span className="result-score low-score">{router.query.score}</span><span>점!!!</span></h2>
            <p>나는 과몰입 하위 35%</p>
            <p className="result-title low-score">"어디서 본건 있는 사람"</p>
            <p>입니다.</p>
            <img src="/score6.png" className="result-img" alt="result" />
            <p className="result-desc">
            인스타나 너튜브에 나오는 짧은 릴스 영상으로<br/> 스우파 장면을 몇개 보기는 해서 <br/>친구들과 얘기할때 소외되는 수준은 아닙니다.<br/>
근데 서바이벌을 그렇게 좋아하지도 않고,<br/> 춤알못이라 사실 왜 재밌는지 이해는 잘 안가는 상태... <br/><br/>스우파를 처음부터 봤다면 달랐을수도 있겠지만요.
            </p>
          </>
        )
      } else if(router.query.score>=5 && router.query.score<15) {

        return(
          <>
            <h2><span className="result-score low-score">{router.query.score}</span><span>점!!!</span></h2>
            <p>나는 과몰입 하위 15%</p>
            <p className="result-title low-score">"스우파를 모르고 죽을뻔한 사람"</p>
            <p>입니다.</p>
            <img src="/score7.png" className="result-img" alt="result" />
            <p className="result-desc">
            당신은 찐친이나 연인이 스우파에 미쳐있어서 매일 스우파 얘길 들어왔거나 어깨너머로 들은 건 쫌 있는 사람입니다. <br/>사실 별로 관심은 없는데 화요일 방송한다는 사실이라던가, 노제가 탈락했다는 거 정도는 알아요.<br/><br/>
하마터면 스우파도 모르고 죽을 뻔 했는데<br/> 휴, 다행입니다.
            </p>
          </>
        )
      } else if(router.query.score>=0 && router.query.score<5) {
       
        return(
          <>
            <h2><span className="result-score low-score">{router.query.score}</span><span>점!!!</span></h2>
            <p>나는... 그냥</p>
            <p className="result-title low-score">"지나가던 행인"</p>
            <p>입니다.</p>
            <img src="/score8.png" className="result-img" alt="result" />
            <p className="result-desc">
            친구들이 스우파 이야기를 하고 스우파 춤을 따라 출 때<br/>
끼지 못하고 갯마을 이야기로 화제를 돌리던 당신..<br/>
스우파 종영 소식에 오히려 기뻤던 당신입니다. <br/><br/>
당신은 아마 평생에 후회할 큰 실수를 저질렀을 겁니다. <br/>
스우파가 방영하는 매주 화요일은 흥의 민족에게 민족 대명절과도 같은 날이었기 때문이죠.
            </p>
          </>
        )

      }else {
        return(
        <>
            <p>뭔가 잘못됐어요 😅</p>
            <p className="result-title"> 다시 진행해주세요</p>
        </>
        )
      }
    }

useEffect(()=>{
  test();
})
useEffect(()=>{
  return ()=>{
    // setStart(false);
    setScore(0);
  }
})
// 트위터공유
function shareTwitter() {
  var sendText = "스우파 과몰입꾼 테스트";
  var sendUrl = `https://swf-alpha.vercel.app/Result?score=${router.query.score}`;
  window.open("https://twitter.com/intent/tweet?text=" + sendText + "&url=" + sendUrl);
}
// 링크복사
const copyToClipboard=()=>{
    var input = document.createElement("input");
    document.body.appendChild(input);
    input.value=`https://swf-alpha.vercel.app/Result?score=${router.query.score}`;
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input)
    alert('링크가 복사되었습니다!')
}

    return (
      <>
      {/* <Head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2695315085641819" crossorigin="anonymous"></script>
      </Head> */}
      {console.log(level)}
      <div className="result-wrapper">
        <img className="bg-line" src="/bg_lines.png" alt="line"/>
        <h1 className="result-header">스우파 과몰입 점수</h1>
        <div className="result">
         {classifyScore()} 
        </div>
        <div className="result-share">
          <div className="result-share-line"></div>
          <div className="result-share-text">위 결과 공유하기</div>
          <div className="result-share-line"></div>
        </div>
        <div className="result-share-icon">
            <img 
            className="kakao-link-btn" 
            src="/kakao.png" 
            alt="share"
            onClick={()=>{
              test();
          }} />
          <img 
            className="kakao-link-btn" 
            src="/twitter.png" 
            alt="share"
            onClick={()=>{
              shareTwitter();
          }} />
          <img 
            className="kakao-link-btn" 
            src="/share.png" 
            alt="share"
            onClick={()=>{
              copyToClipboard()
          }} />
        </div>
        <Link href="/"><a className="tomain">테스트 하러 가기</a></Link>
        
    </div>
    </>
    );
  }

export default Result;