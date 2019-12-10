import * as React from 'react';
import { Layout, Col, Row } from 'antd';
// import { hot } from 'react-hot-loader/root';
import Header from '../../components/Header';
import './styles.less';

const App: React.FunctionComponent = ({ children }) => {
  return (
    <Layout className="Root-Container">
      <Header />
      <Layout.Content>
        <Row>
          <Col>{children}</Col>
        </Row>
      </Layout.Content>
    </Layout>
  );
};

export default App;
