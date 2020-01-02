import React, { ReactNode } from 'react';

import './style';
import ListFilter from '@/components/List/ListFilter';
import SearchResult from '@/components/List/SearchResult';
import Item from '@/components/List/Item';

interface IListProps {
  children : ReactNode;
}

const List = ({children} : IListProps) => {

  return (
    <div className="List_Container">
      {children}
    </div>
  );
};

List.Item = Item;
List.ListFilter = ListFilter;
List.SearchResult = SearchResult;

export default List;
