import { GetServerSideProps } from 'next';
import Link from 'next/link';

import { User } from '../../interfaces';
import { sampleUserData } from '../../utils/sample-data';
import Layout from '../../components/Layout';
import List from '../../components/List';

type Props = {
  items: User[];
};

const WithSSRProps = ({ items }: Props) => (
  <Layout title="Users List (SSR) | Next.js + TypeScript Example">
    <h1>Users List (SSR)</h1>
    <p>
      Example fetching data from inside <code>getServerSideProps()</code>.
    </p>
    <p>You are currently on: /users/index-ssr</p>
    <List items={items} />
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
);

export const getServerSideProps: GetServerSideProps = async () => {
  const items: User[] = sampleUserData;
  return { props: { items } };
};

export default WithSSRProps;
