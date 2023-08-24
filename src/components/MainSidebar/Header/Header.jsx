import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style";
import {HiMenu, HiSearch} from "react-icons/hi"; //아이콘 이름이 Hi...로 시작하므로 경로를 hi로 설정 
import { useRecoilState } from 'recoil';
import { isSidebarShowState} from "../../../store/sidebarStore";

function Header() {
    
    //isShow를 recoil로 props를 받아옴
    const [ isSidebarShow, setIsSideberShow ] = useRecoilState(isSidebarShowState); //recoil에 저장된 키값을 매개변수로 찾아옴
    const handleMenuToddleClick = () => {
        setIsSideberShow(!isSidebarShow);
    }
    return (
        <div css={S.SLayout}>
            <div css={S.SContainer}>
                <h1 css={S.STitle} >Menu</h1>
                <button css={S.SToggleButton} onClick={handleMenuToddleClick}><HiMenu /></button>
            </div>
            {isSidebarShow && (
                <div css={S.SSearchBox}>
                    <HiSearch css={S.SSearchIcon} />
                    <input css={S.SSearchInput} type="search" />
                </div>
            )}
            
        </div>
    );
}

export default Header;