import React, {useState} from 'react';
import './styles';
import classNames from "classnames";
import { Collapse, Skeleton } from "antd";
import List from '@/components/List';
import Map from '@/components/Map';

import { bayiList } from '../../../../__mocks__/db';

const { Panel } = Collapse
const Main = () => {

  // const onChange = (params : any, another : any) => {
  //   console.log(params)
  // }

  let [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false)
  }, 3000)

  return (
    <>
      <div className="corner"></div>
      <main className="Main_Content">
        <List>
          <div className="List_Controller">
            <List.ListFilter />
            <List.SearchResult />
          </div>
          <div className={classNames({"Item_Container" : true, loading : loading})}>
            <Skeleton loading={loading} active={loading} />
            <Collapse destroyInactivePanel accordion>
              {
                bayiList.map(bayi => (
                  <Panel key={bayi._id} header={<List.Item bayi={bayi} />}>
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
