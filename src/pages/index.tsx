/* eslint-disable @next/next/no-img-element */
import { graphql } from "@/gql";
import { type GetStaticProps } from "next";
import Head from "next/head";
// import Link from "next/link";

const GET_USERS = graphql(`
  query GetUsers {
    userCollection {
      edges {
        node {
          id
        }
      }
    }
  }
`);

export default function Home() {
  // const { data, error, isLoading } = useQuery({
  //   queryKey: ["ministry"],
  //   queryFn: async () => request(env.NEXT_PUBLIC_GRAPHQL, GET_USERS),
  // });
  // console.log(data);
  // if (isLoading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <Head>
        <title>Account Centre | FGACYC</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      // You can get the messages from anywhere you like. The recommended
      // pattern is to put them in JSON files separated by locale and read
      // the desired one based on the `locale` received from Next.js.
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      messages: (await import(`@/locales/${context.locale}.json`)).default,
    },
  };
};
