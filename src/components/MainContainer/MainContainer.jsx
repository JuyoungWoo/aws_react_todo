import React, { useEffect } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style";
import { useRecoilState } from 'recoil';
import { isSidebarShowState, isRightSubSidebarState } from '../../store/sidebarStore';

function MainContainer({children}) {
    
    const [ isSidebarShow, setIsSidebarShow ] = useRecoilState(isSidebarShowState);
    const [ isRightSubSidebar, setIsRightSubSidebar] = useRecoilState(isRightSubSidebarState);
    
    useEffect(() => {
        
        return () => { //다른 페이지로 전환 되어 언마운트될 때 무조건 사이드바가 닫히게끔!!
            setIsRightSubSidebar(false);
        };
    }, []);
    
    return (
        <div css={S.SContainer(isSidebarShow, isRightSubSidebar)}>
            {children}
        </div>
    );
}
export default MainContainer;