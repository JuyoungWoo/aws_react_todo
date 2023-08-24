import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style";
import { FaPlus } from 'react-icons/fa';
import { isRightSubSidebarState } from '../../../store/sidebarStore';
import { useRecoilState } from 'recoil';

function AddNewTaskButton({target, setTarget}) {
    const [isRightSubSidebar, setIsRightSubSidebar] = useRecoilState(isRightSubSidebarState);
    
    const handleOpenClick = (e) => {
        //add task button 과 tasklist에 모두 사이드바 여는 버튼이 있음
        //다른 종류의 버튼을 눌렀을 때 사이드바가 닫히면 안되기때문에
        //자기 자신을 한번더 클릭했을 때만 열린 사이드바가 닫히게 함
        if(target === e.target){
            setIsRightSubSidebar(false);
            setTarget(null);
        } else if(target === null){
            setIsRightSubSidebar(true);
            setTarget(e.target);
        } else {
            setTarget(e.target);
        }
        
    }
    
    return (
        <button css={S.SLayout} onClick={handleOpenClick}>
            <FaPlus css={S.SIcon}/>
            <span css={S.SName}>Add New Task</span>
        </button>
    );
}

export default AddNewTaskButton;