import React from 'react';
import './styles.less';

import List from '../List';
import Map from '../Map';

const Main = () => {
  return (
    <>
      <div className="corner"></div>
      <main className="Main_Content">
        <List />
        <div className="Main_Content_Controller">
          <Map />
        </div>
      </main>
    </>
  );
};

export default Main;
