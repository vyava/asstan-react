import * as React from 'react';
import './styles.less';
import { RouteComponentProps } from 'react-router';
import Aside from "../../components/Aside";



const Home: React.FunctionComponent<RouteComponentProps> = () => {
  return <Aside />;
};

export default Home;
