import { useEffect } from "react";

function MyApp({ Component, pageProps, ...rest }) {
  useEffect(() => {
    console.info('::', 'mounting App', pageProps, rest)
    return () => console.log("unmounting App");
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
