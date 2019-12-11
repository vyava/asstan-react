import * as React from 'react';
import './styles.less';
import { Layout, Col, Row } from 'antd';
import { hot } from 'react-hot-loader/root';
import Header from '../../components/Header';


const App: React.FunctionComponent = ({ children }) => {
  return (
    <Layout className="Root_Container">
      <Header />
      {children}
    </Layout>
  );
};

export default hot(App);
