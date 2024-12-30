import { useEffect, useState } from "react";

const useViewport = () => {
  const [width, setWidth] = useState<number>(0); // Start with `null` to avoid server-side rendering errors.

  useEffect(() => {
    // This code runs only on the client
    const handleWindowResize = () => setWidth(window.innerWidth);

    setWidth(window.innerWidth); // Initialize the width on mount
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return { width };
};

export default useViewport;
