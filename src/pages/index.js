
import React, {useEffect} from 'react';
import Link from "next/link";
import { useRecoilState } from 'recoil';
import { startState } from '../states/states';
import { scoreState } from '../states/states';
import Head from 'next/head';
import Ad from '../components/Ad'

const Home = () => {

    const [start, setStart] = useRecoilState(startState);
    const [score, setScore] = useRecoilState(scoreState);

    useEffect(()=>{
        setStart(false);
        setScore(0);
    },[])
    return(
        <> 
            <div className="main-wrapper">
            
                <p>
                <img className="logo" src="/logo.png" alt="logo" />
                </p>
                <Link href="/Questions" as="questions">
                    <button className="start-button" onClick={(e)=>{
                        // e.preventDefault();
                        // setStart(true);
                    }}>시작!!</button>
                </Link>
            </div>
            {/* {
                start
                ?(
                    <Questions showResult={showResult} setShowResult={setShowResult} ></Questions>
                )
                : (
                   
                )
            } */}
        </>
       
    )
}

export default Home;