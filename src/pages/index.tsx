import { GetStaticProps } from 'next';
import Portfolio from '../components/Portfolio';

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

export default function Home() {
  return (
    <main className="font-primary">
      <Portfolio />
    </main>
  );
}
