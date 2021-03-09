import React from 'react';
import styles from './Layout.module.scss';
import {Header} from '../Header/index';
import {Footer} from '../Footer/index';


const Layout = (props: { children: React.ReactNode; }) => {
  return (
    <>
    <Header />
    <div className={styles.container}>
      <main>{props.children}</main>
    </div>
    <Footer />
    </>
  )
}

export default Layout;
