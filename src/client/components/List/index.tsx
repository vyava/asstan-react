import React from 'react';
import './style.less';
import ListFilter from '../ListFilter';
import Item from '../Item';

import { bayiList } from '../../../../__mocks__/db';
import SearchResult from '../SearchResult';

const List: React.FunctionComponent = ({ children }) => {
  let bayiler = bayiList.map((bayi, i) => <Item key={bayi._id} bayi={bayi} />);

  return (
    <div className="List_Container">
      <div className="List_Controller">
        <ListFilter />
        <SearchResult />
      </div>
      <div className="Item_Container">{bayiler}</div>
    </div>
  );
};

export default List;
