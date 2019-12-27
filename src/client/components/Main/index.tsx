import React from 'react';
import './styles';
import { Collapse } from "antd";
import List from '@/components/List';
import Map from '@/components/Map';

import { bayiList } from '../../../../__mocks__/db';

const {Panel} = Collapse
const Main = () => {

  // const onChange = (params : any, another : any) => {
  //   console.log(params)
  // }
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
            <Collapse destroyInactivePanel accordion>
              {
                bayiList.map(bayi => (
                  <Panel key={bayi._id} header={<List.Item  bayi={bayi} />}>
                    <p>{bayi.adres}</p>
                  </Panel>
                ))
              }
            </Collapse>
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
