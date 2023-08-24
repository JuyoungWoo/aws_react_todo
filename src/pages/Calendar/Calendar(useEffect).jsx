//useEffect 공부 하기
import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style";


function Calendar(props) {
    const [count, setCount] = useState(0);
    const [saveCount, setSaveCount ] = useState(0);
    
    //useEffect(마운트(=렌더링) 시 실행될 함수, [상태 변수1, 상태 변수2, ..])
    useEffect(() => { //이때의 마운트: 숫자가 바뀌는 것
        //save 버튼을 2번째 누를 땐 바뀌는 수가 없으므로 실행이 안됨
        console.log("캘린더 컴포넌트가 마운트됨.");
        return () => {
            console.log("캘린더 컴포넌트가 언마운트됨."); //컴포넌트가 사라졌을 떄
        };
        
    }), [];
    // useEffect(() => {
    //     console.log(("캘린더 컴포넌트가 마운트됨."));
    //     return () => {
    //         console.log(("캘린더 컴포넌트가 언마운트됨."));
    //     }
    // }, []);
    
    //마운트: 페이지 로드 시, 언마운트: 페이지 전환 시 주로 사용!
    //배열이 비어있을 때: 페이지가 처음 렌더링될 때 단 한번만 실행! 배열 내에 변수가 없으므로 어떤 숫자가 바뀌더라도 동작하지 않음
    //[] 안에 상태 변수가 있을 때: 그 상태가 변할 때만 useEffect()가 동작. 여러 개가 있을 경우 그 중 하나라도 렌더링 될 때 useEffect() 가 동작
    
    const handlePlusClick = () => {
        setCount(count + 1);
    }
    const handleMinusClick = () => {
        setCount(count - 1);
    }
    const handleSaveClick = () => {
        setSaveCount(count);
    }

    return (
        <div css={S.SLayout}>
            <h1>{ count }</h1>
            <h1>{ saveCount }</h1>
            <button onClick={ handlePlusClick }>+1</button>
            <button onClick={ handleMinusClick }>-1</button>
            <button onClick={ handleSaveClick }>save</button>
        </div>
    );
}

export default Calendar;