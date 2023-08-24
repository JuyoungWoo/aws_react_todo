import { atom } from "recoil";
//atom()을 쓰려면 recoil import해야함

//recoil: 전역으로 상태변수 관리. redux
export const isSidebarShowState = atom({ //객체 매개변수
    key: "isSidebarShow", //useState()에서의 변수명
    default: false //useState()에서의 기본값
});

export const isRightSubSidebarState = atom({
    key: "isRightSubSidebar",
    default: false
});