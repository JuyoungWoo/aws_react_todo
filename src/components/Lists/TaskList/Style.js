import { css } from "@emotion/react";

export const SLayout = css`
    width: 100%;
    height: ${520 - 117}px;
    overflow-y: auto; //y축이 넘쳤을 때 자동 스크롤바 생성
`;

export const SListBox = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #dbdbdb;
    padding: 15px 20px;
    width: 100%;
    font-weight: 500;
    
    cursor: pointer;
    
`;

export const SListContent = css`
    display: flex;
    align-items: center;
    
`;

export const SCheckBox = css`
    margin-right: 10px;
`