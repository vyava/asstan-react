import * as React from 'react';
import { Layout, Col, Row } from 'antd';
// import { hot } from 'react-hot-loader/root';
import Header from "../../components/Header";
import './styles.less';

const App: React.FunctionComponent = ({ children }) => {
  return (
    <div className="zafer">
      <Layout>
        <Layout.Header>
          <Header></Header>
        </Layout.Header>
        <Layout.Content>
          <Row>
            <Col>
              {children}
            </Col>
          </Row>
          
        </Layout.Content>
      </Layout>
    </div>
  );
};

export default App;