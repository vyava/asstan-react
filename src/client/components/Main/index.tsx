import React from 'react';
import './styles';

import List from '@/components/List';
import Map from '@/components/Map';

import { bayiList } from '../../../../__mocks__/db';

const Main = () => {
  return (
    <>
      <div className="corner"></div>
      <main className="Main_Content">
        <List>
          <div className="List_Controller">
            <List.ListFilter />
            <List.SearchResult />
          </div>
          <div className="Item_Container">
            {
              bayiList.map(bayi => (
                <List.Item key={bayi._id} bayi={bayi} />
              ))
            }
          </div>
        </List>
        <div className="Main_Content_Controller">
          <Map />
        </div>
      </main>
    </>
  );
};

export default Main;
