import * as React from 'react';
import './styles.less';
import { RouteComponentProps } from 'react-router';
import Aside from "../../components/Aside";
import Main from "../../components/Main";



const Home: React.FunctionComponent<RouteComponentProps> = () => {
  return (
    <>
      <Aside />
      <Main />
    </>
  );
};

export default Home;
