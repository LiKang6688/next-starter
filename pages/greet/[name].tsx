import { GetServerSideProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const params = context.params;

  return {
    props: {
      name: params?.name,
    },
  };
};

function Greet({ name }: { name: string }) {
  const { query } = useRouter();

  console.log(query);

  return (
    <>
      <h1>Hello {query.name}!</h1>
      <h1> Hello, {name}! </h1>
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
