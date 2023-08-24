import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style";
import { useRecoilState } from 'recoil';
import { isRightSubSidebarState } from '../../store/sidebarStore';

function RightSubSidebar({ children }) {
    const [isRightSubSidebar, setIsRightSubSidebar] = useRecoilState(isRightSubSidebarState); //전역 상태 라이브러리
    
    return (
        <div css={S.SLayout(isRightSubSidebar)}>
            {children}
        </div>
    );
}

export default RightSubSidebar;