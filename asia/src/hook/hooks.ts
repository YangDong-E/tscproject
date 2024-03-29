import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store/store";

//useSelector, useDispatch를 hook으로 만들어서 type을 component마다 import하는 행위를 줄인다.
//컴포넌트에서 테이터를 불러오기 위해서는 useSelector를, action을 dispatch하기 위해서는 useDispatch를 사용하며 타입스크립트과 사용하려면 바꿔줘야하는데 모든 컴포넌트에 적용하는 것보다 pre-typed 된 버전으로 만들어주는 것이 편하다.
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
