import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
interface IProduct {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
}

interface IProps {
  products: Array<IProduct>;
}

const Home: React.FC<IProps> = ({ products }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Derp Cart</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        {products.map((product: IProduct) => {
          return <p key={product.id}>{product.title}</p>;
        })}
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'>
          Powered by{' '}
          <img src='/vercel.svg' alt='Vercel Logo' className={styles.logo} />
        </a>
      </footer>
    </div>
  );
};

export async function getServerSideProps() {
  const products: Array<IProduct> = await (
    await fetch('https://fakestoreapi.com/products')
  ).json();

  return {
    props: {
      products,
    },
  };
}

export default Home;
