/* eslint-disable */
import { useCallback, useEffect, useRef, useState } from "react";
import _ from "lodash";

export const useCheckMobileScreen = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const handleWindowSizeChange = () => {
            setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    return (width <= 768);
}

export function useLazyEffect(effect, deps = [], wait = 300) {
    const cleanUp = useRef();
    const effectRef = useRef();
    const updatedEffect = useCallback(effect, deps);
    effectRef.current = updatedEffect;
    const lazyEffect = useCallback(
      _.debounce(() => {
        cleanUp.current = effectRef.current?.();
      }, wait),
      [],
    );
    useEffect(lazyEffect, deps);
    useEffect(() => {
      return () => (
        cleanUp.current instanceof Function ? cleanUp.current() : undefined
      );
    }, []);
  }