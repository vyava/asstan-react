import React, { ReactNode } from 'react';
import './style';
import ListFilter from './ListFilter';
import SearchResult from './SearchResult';
import Item from './Item';

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
