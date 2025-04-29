import type { IStore, IDispatch, IRootState } from "@/lib/store/index";
import { useDispatch, useSelector, useStore } from 'react-redux'

export const useAppDispatch = useDispatch.withTypes<IDispatch>();
export const useAppSelector = useSelector.withTypes<IRootState>();
export const useAppStore = useStore.withTypes<IStore>();