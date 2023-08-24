import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style";
import Header from './Header/Header';
import List from './List/List';
import { useRecoilState } from 'recoil';
import {isSidebarShowState} from "../../store/sidebarStore";

function MainSidebar() {
    //isShow를 recoil로 props를 받아옴
    const [ isSidebarShow, setIsSideberShow ] = useRecoilState(isSidebarShowState); //recoil에 저장된 키값을 매개변수로 찾아옴
    const [ mainMenuListArray, setMainMenuListArray ] = useState( {
        tasks: [
            {
                id: 1,
                path: "/upcoming",
                icon: "",
                name: "Upcoming",
                count: 12
            },
            {
                id: 2,
                path: "/today",
                icon: "",
                name: "Today",
                count: 5
            },
            {
                id: 3,
                path: "/calendar",
                icon: "",
                name: "Calendar",
                count: 0
            },
            {
                id: 4,
                path: "/stickywall",
                icon: "",
                name: "Sticky Wall",
                count: 0
            }
        ],
        lists: [
            {
                id: 1,
                path: "",
                icon: "",
                name: "Personal",
                count: 0
            },
            {
                id: 2,
                path: "",
                icon: "",
                name: "Work",
                count: 0
            },
            {
                id: 3,
                path: "",
                icon: "",
                name: "List 1",
                count: 0
            }

        ]
    });
        
    
    return (
        <div css={S.SLayout(isSidebarShow)}>
             {/* mainSidebar의 isShow  */}
            <Header />
            {/*하위 컴포넌트 props 매개변수에 title이 있으므로 상위에서 선언해줘야 함*/}
            {isSidebarShow &&  (
                <> {/*리턴을 하려면 ()로 감싸준 뒤, 하나로 감싸줘야 함 */}
                    <List title={"TASKS"} list={mainMenuListArray.tasks}/> 
                    <List title={"LISTS"} list={mainMenuListArray.lists} />
                </>
            )}
            
        </div>
    );
}

export default MainSidebar;