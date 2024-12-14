import Container from '@/common/components/containers/Container';
import Layout from '@/common/components/Layout';

export default function Home() {
  return (
    <Layout className={``} currentPath='/salaries'>
      <h1>Ye But Wallets</h1>
      <Container>
        <h1>Hello</h1>
        <p>Irem opossum paradoxum</p>
      </Container>
    </Layout>
  );
}
