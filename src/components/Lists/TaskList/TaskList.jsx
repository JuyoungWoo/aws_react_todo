import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style";
import { FaChevronRight } from "react-icons/fa";
import { useRecoilState } from 'recoil';
import { isRightSubSidebarState } from '../../../store/sidebarStore';

function TaskList({target, setTarget}) {
     const [isRightSubSidebar, setIsRightSubSidebar] = useRecoilState(isRightSubSidebarState);
    
    const handleOpenClick = (e) => {
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
    const handleCheckBoxClick = (e) => {
        //버블링 방지_체크박스를 클릭해도 사이드바가 나오는 오류 방지
        e.stopPropagation()
    }
    
    return (
        <ul css={S.SLayout}>
            <li css={S.SListBox} onClick={handleOpenClick}>
                <div css={S.SListContent}>
                    <input css={S.SCheckBox} type="checkbox" onClick={handleCheckBoxClick} />
                    <span>Research content ideas</span>
                </div>
                <FaChevronRight/>
            </li>
           
            
        </ul>
    );
}

export default TaskList;