/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style";
import { HiCalendar } from "react-icons/hi";
import { useLocation, useNavigate } from "react-router-dom";

function List({title, list}) {
    
    const navigate = useNavigate();
    const location = useLocation();
    const pathName = location.pathname;
    //pathname  출력하면 '/today/?' 까지 출력됨-> / 기준으로 분리시켜서 
    //pathname.split("/")[1];
    
    const handleLinkClick = (path) => {
        navigate(path); //버튼 클릭 시 path로 경로 이동시켜줌
    }
    return (
        <div css={S.SLayout}>
            <h2 css={S.STitle}>{title}</h2>
            <ul css={S.SListContainer}>
            {/* //jsx로 리턴-> 괄호로 */}
                {list.map(item => {
                    const isSelected = pathName.startsWith(item.path); 
                    //starsWith(문자열) : 해당 문자열로 시작되는지 여부
                    
                    return (
                        <li css={S.SListBox(isSelected)} key={item.id} onClick={ () => {
                            handleLinkClick(item.path);
                        }} >
                            <HiCalendar />
                            <span css={S.SListName(isSelected)}>{item.name}</span>
                            {!!item.count && ( <div css={S.SCount(isSelected)} >{item.count}</div>)}
                        </li>
                    )
                }
                )
                
                }
            </ul>
        </div>
    );
}

export default List;