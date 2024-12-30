import { debounce } from "lodash";
import { useLayoutEffect, useState } from "react"

const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const updateSize = (): void => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    }

    window.addEventListener('resize', debounce(updateSize, 250));

    return (): void => window.removeEventListener('resize', updateSize);
  }, [])

  return isMobile
}

export default useIsMobile