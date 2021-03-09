import React, { ReactNode } from 'react';
import styles from './Layout.module.scss';
import {Header} from '../Header/index';
import {Footer} from '../Footer/index';

interface IProps {
  children: ReactNode;
}

const Layout: React.FC<IProps> = ({children}) => {
  return (
    <>
    <Header />
    <div className={styles.container}>
      <main>{children}</main>
    </div>
    <Footer />
    </>
  )
}

export default Layout;
