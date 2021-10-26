import React, {useState, useEffect} from 'react';
import {questions} from '../data/questions'
import Link from "next/link";
import { useRecoilState, useSetRecoilState } from 'recoil';
import { scoreState } from '../states/states';
import { levelState } from '../states/states';
import { imgURLState } from '../states/states';
import Ad from '../components/Ad'


const Questions = () => {
    
    const [index, setIndex] = useState(0);
    const [score, setScore] = useRecoilState(scoreState);
    const [level, setLevel] = useRecoilState(levelState);
    const [imgURL, setImgURL] = useRecoilState(imgURLState);

    const [click, setClick] = useState(true);

    // 다음문제 넘어갈 때 동작
    const nextQuestion = () =>{
        setTimeout(()=>{
            setIndex(index+1);
        },500)
        clearTimeout();
    }
   
    useEffect(()=>{
        if(index>0) {
            if(index<questions.length) {
                // 3지선다에서 2지선다로 넘어갈 때 A3 없애기
                if(questions[index].A3.A===""){
                    var hideAnswer = document.querySelector('div.answer3');
                    hideAnswer.style.display="none";
                }else{
                    var hideAnswer = document.querySelector('div.answer3');
                    hideAnswer.style.display="block";

                }

                // 클래스명 추가,제거  
                const selectedAnswer = document.querySelector('div.selected')
                selectedAnswer.classList.remove('selected');
                selectedAnswer.className +=' pre-select'
                setClick(true);
                

                // 진행바 길이 (width)변화
                let pickedBar = document.querySelector('.bar');
                pickedBar.style.width = `calc((100% / ${questions.length}) * (1 + ${index}))`

                // 보기 위치 무작위 배치
                // const checkAnswer = () => {
                //     var a = document.querySelector('.answer-list');
                //     for (var i = a.children.length; i >= 0; i--) {
                //         a.appendChild(a.children[Math.random() * i | 0]);
                //     }
                // }
                // checkAnswer();
            }
        }
    },[index])

    // 공유 score, level 저장
    useEffect(()=>{
        return ()=>{
                if(score == 100) {
                 setLevel(`과몰입 상위 1% "스우파 처돌이"`);
                 setImgURL("https://raw.githubusercontent.com/Ji-Yeon0107/swf2/main/public/result1.png");
                } else if(score>=90 && score<100) {
                  setLevel(`과몰입 상위 20% "스우파 중독자"`);
                  setImgURL("https://raw.githubusercontent.com/Ji-Yeon0107/swf2/main/public/result2.png");
                } else if(score>=65 && score<90) {
                  setLevel(`과몰입 상위 35% "스우파 쁘띠중독"`);
                  setImgURL("https://raw.githubusercontent.com/Ji-Yeon0107/swf2/main/public/result3.png");
                } else if(score>=50 && score<65) {
                  setLevel(`과몰입 상위 50% "스우파며드는 중`);
                  setImgURL("https://raw.githubusercontent.com/Ji-Yeon0107/swf2/main/public/result4.png");
                 
                } else if(score>=35 && score<50) {
                  setLevel(`항문기는 아니고 "스우파 입덕부정기`);
                  setImgURL("https://raw.githubusercontent.com/Ji-Yeon0107/swf2/main/public/result5.png");
                
                } else if(score>=15 && score<35) {
                  setLevel(`과몰입 하위 35% "어디서 본 건 있는 사람"`);
                  setImgURL("https://raw.githubusercontent.com/Ji-Yeon0107/swf2/main/public/result6.png");
                
                } else if(score>=5 && score<15) {
                  setLevel(`과몰입 하위 15% "스우파를 모르고 죽을뻔한 사람"`);
                  setImgURL("https://raw.githubusercontent.com/Ji-Yeon0107/swf2/main/public/result7.png");
                } else if(score>=0 && score<5) {
                  setLevel(`그냥... "지나가던 행인"`);
                  setImgURL("https://raw.githubusercontent.com/Ji-Yeon0107/swf2/main/public/result8.png");
                } else if(score===null || score===undefined) {
                    setLevel(`몇 점일까?`);
                    setImgURL("https://raw.githubusercontent.com/Ji-Yeon0107/swf2/main/public/logo.png");
                  }else {
                    setLevel(`몇 점일까?`);
                    setImgURL("https://raw.githubusercontent.com/Ji-Yeon0107/swf2/main/public/logo.png");
                  }
              
        }
    })

    
// 문제 숫자 0 제어
const trimIndex = ()=>{
    const indexPlusZero = "0"+String(index+1)
    const trimedIndex = indexPlusZero.substr(-2)
    return (
        trimedIndex
    )
}
// 문제진행바 제어
const controllBar = ()=> {
    if(index<questions.length) {
        return(
            <div className="bar-box" style={barBoxStyle}>
                <div className="bar" style={barStyle}></div>
            </div>
        )
    }
}


const showPage = ()=> {
    // 마지막 문제까지 뿌려질 html
    if(index<questions.length){
        return(
            <div>
                <div className="question-number">{trimIndex()}</div>
                {controllBar()}
                <div className="question-imgbox">
                    <img
                        className="question-img"
                        src={`/q${index+1}.jpg`}
                        alt="question"
                    />
                    </div>
                    {
                        questions[index].Q1==null
                        ?(
                            <div className="question">{questions[index].Q}</div>
                        )
                        :(<div className="question">
                            <span>{questions[index].Q}</span>
                            <span className="red">{questions[index].Q1}</span>
                            <span>{questions[index].Q2}</span>
                        </div>
                        )
                    }
               
                <div className="answer">
                    <div className="answer-box">
                        <div className="answer-list">
                            <div className="answer1 answer-list-item pre-select" onClick={function(){

                                if(click) {
                                    const selectedAnswer = document.querySelector('.answer1');
                                    selectedAnswer.className +=' selected'
                                    selectedAnswer.classList.remove('pre-select');
                                    setScore(score+questions[index].A1.score)
                                }
                                setClick(false);
                                nextQuestion();
                            }
                            }>A {questions[index].A1.A}
                            
                            </div>
                            <div className="answer2 pre-select answer-list-item" onClick={function(){
                              
                              if(click){
                              const selectedAnswer = document.querySelector('.answer2');
                              selectedAnswer.className +=' selected'
                            selectedAnswer.classList.remove('pre-select');
                            setScore(score+questions[index].A2.score)
                            }

                               setClick(false);
                                nextQuestion();
                            }
                            }>B {questions[index].A2.A}</div>

                            <div className="answer3 pre-select answer-list-item" onClick={function(){
                                                        
                                if(click){
                                const selectedAnswer = document.querySelector('.answer3');
                                selectedAnswer.className +=' selected'
                                selectedAnswer.classList.remove('pre-select');
                                }

                                setClick(false);
                                    nextQuestion();
                                }
                                }>C {questions[index].A3.A}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    } else {

        //마지막문제 후 화면
        
    return (
        <div className="check-result">
            <p>🥁🥁🥁</p>
            <p>두구두구두구두구</p>
            <p>나의 과몰입 점수는?</p>
            <Link href={`/Result?score=${score}`} as="/result" >
                <button className="check-result-button">점수 확인하기</button>
            </Link>
        </div>
    )
}
}

    return(
        <>
        
            <div className="wrapper">
                
                <div className="inner">
                    {showPage()}
                </div>
            </div>
        </>
    )
}

const barBoxStyle = {
    width:"100%",
    height:"5px",
    background:"rgba(255,255,255,0.6)",
}

const barStyle = {
    width: `calc(100% / ${questions.length})`,
    height:"100%",
    background:"rgba(255,255,255,1)",
    transition:"all 200ms",
}

export default Questions