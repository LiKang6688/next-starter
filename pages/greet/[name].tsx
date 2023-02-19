import Link from "next/link";
import { useRouter } from "next/router";

export async function getServerSideProps({ params }) {
  const { name } = params;

  return {
    props: {
      name,
    },
  };
}

function Greet(props) {
  const { query } = useRouter();

  console.log(query);

  return (
    <>
      <h1>Hello {query.name}!</h1>
      <h1> Hello, {props.name}! </h1>
      <Link href="/about" prefetch={false}>
        Home
      </Link>
      <Link
        href={{
          pathname: "/about",
          query: { name: "test" },
        }}
      >
        About us
      </Link>
      <li>
        <Link
          href={{
            pathname: "/about/[slug]",
            query: { slug: "my-post" },
          }}
        >
          Blog Post
        </Link>
      </li>
    </>
  );
}

export default Greet;
