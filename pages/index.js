import React, { useState } from "react";

export default function HomePage() {
  const [renderError, setRenderError] = useState(false);

  if (renderError) {
    throw new Error("Render error!");
  }

  return (
    <main>
      <button onClick={() => setRenderError(true)}>Render Error</button>
    </main>
  );
}

HomePage.getInitialProps = () => ({
  foo: 2
})
