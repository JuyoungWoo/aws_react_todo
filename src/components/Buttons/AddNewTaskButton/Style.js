import { css } from "@emotion/react";

export const SLayout = css`
    
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    border: 1px solid #dbdbdb;
    border-radius: 8px;
    padding: 15px 20px;
    width: 100%; 
    background-color: transparent;
    cursor: pointer;
`

export const SIcon = css`
    margin-right: 20px;
    //& * : SIcon이 적용된 컴포넌트의 하위 스타일
    //
    & * {
        color: #aaa; 
    }
   
`;

export const SName = css`
    font-weight: 600;
    color: #aaa;
`;