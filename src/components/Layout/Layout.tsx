import React from 'react';
import styles from './Layout.module.scss';
import {Header} from '../Header/index';
import {Footer} from '../Footer/index';

const Layout = () => {
  return (
    <>
    <Header />
    <div className={styles.container}>
      <h1>Hello</h1>
    </div>
    <Footer />
    </>
  )
}

export default Layout;
