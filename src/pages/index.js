
import React, {useState, useEffect} from 'react';
import Link from "next/link";
import { useRecoilState } from 'recoil';
import { startState } from '../states/states';
import { scoreState } from '../states/states';
import { langState } from '../states/states';
import Head from 'next/head';
import Ad from '../components/Ad'

const Home = () => {

    // const [start, setStart] = useRecoilState(startState);
    const [score, setScore] = useRecoilState(scoreState);
    const [lang, setLang] = useRecoilState(langState);
    const [startText, setStartText] = useState("시작");

    useEffect(()=>{
        setScore(0);
    },[])

    
    return(
        <> 
            <div className="main-wrapper">
                <p>
                    <select name="lang" id="lang-select" onChange={()=>{
                            var langSelect = document.getElementById("lang-select");
                            var selectValue = langSelect.options[langSelect.selectedIndex].value;
                    
                            if(selectValue=="Kor") {
                                setStartText("시작")
                                setLang("Kor")
                            }else if(selectValue=="Eng") {
                                setStartText("Start");
                                setLang("Eng")

                            }
                        }
                        }>
                        <option value="Kor" autoFocus>Kor</option>
                        <option value="Eng">Eng</option>
                    </select>
                    <img className="logo" src="/logo.png" alt="logo" />
                </p>
                <Link href="/Questions" as="questions">
                    <button className="start-button" onClick={(e)=>{
                    }}>{startText}!!</button>
                </Link>
            </div>
        </>
       
    )
}

export default Home;