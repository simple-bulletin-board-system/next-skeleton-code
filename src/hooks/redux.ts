import {
  useDispatch as _dispatch,
  useSelector as _selector,
  shallowEqual,
} from "react-redux";

import type { AppDispatch } from "@/config/store";
import { RootState } from "@/config/reducer";

/**
 * 타입 선언한 dispatch hook
 *
 * @function
 */
export const useDispatch: () => AppDispatch = _dispatch;

/**
 * shallowEqual을 통해 불필요한 리렌더링을 방지하는 selector hook
 *
 * @function
 * @param selector
 * @returns {TypedUseSelectorHook} useSelector in react-redux
 */
export function useSelector<T>(selector: (state: RootState) => T): T {
  return _selector(selector, shallowEqual);
}
