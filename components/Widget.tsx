import Head from "next/head";
import { useState } from "react";

function Widget({ pageName }: { pageName: string }) {
  const [active, setActive] = useState(false);

  if (active) {
    return (
      <>
        <Head>
          <title key="htmlTitle"> You are browsing the {pageName} page</title>
        </Head>

        <div>
          <button onClick={() => setActive(false)}>
            Restore original title
          </button>
          Take a look at the title!
        </div>
      </>
    );
  }

  return (
    <>
      <button onClick={() => setActive(true)}>Change page title</button>
    </>
  );
}

export default Widget;
