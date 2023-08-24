/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from 'react';
import * as S from "./Style";
import MainSidebar from "../MainSidebar/MainSidebar";
import RightSubSidebar from "../RightSubSidebar/RightSubSidebar";

function MainLayout({ children }) {
    return (
        <div css={S.SLayout}>
            <MainSidebar />
            {children}
            {/* <RightSubSidebar />  // 사이드바 내용이 메뉴에 따라 내용이 종속됨 -> 여기 넣으면 안됨*/}
        </div>
    );
}

export default MainLayout;