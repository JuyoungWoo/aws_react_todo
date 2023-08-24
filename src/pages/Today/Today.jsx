import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style";
import MainContainer from '../../components/MainContainer/MainContainer';
import Header from '../../components/MainContainer/Header/Header';
import AddNewTaskButton from '../../components/Buttons/AddNewTaskButton/AddNewTaskButton';
import TaskList from '../../components/Lists/TaskList/TaskList';
import RightSubSidebar from '../../components/RightSubSidebar/RightSubSidebar';


function Today(props) {
    //클릭한 타겟의 상태
    const [target, setTarget] = useState(null);
    
    return (
        <>
            <MainContainer>
                <Header title={"Today"} count={5}/>
                <AddNewTaskButton target={target} setTarget={setTarget}/>
                <TaskList target={target} setTarget={setTarget}/>
            </MainContainer>
            <RightSubSidebar> 
                {/** 메뉴 클릭할때마다 오른쪽 사이드바의 내용이 달라지므로 MainLayout 쪽이 아닌, Today, Upcoming, .. 에 각각 넣어서 그 내부 요소를 변환해야 함 */}
                
            </RightSubSidebar>
        </>
        
    );
}

export default Today;