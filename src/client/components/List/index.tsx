import React, { ReactNode, useEffect, useState } from 'react';

import fetch from "isomorphic-fetch";

import './style';
import ListFilter from '@/components/List/ListFilter';
import SearchResult from '@/components/List/SearchResult';
import Item from '@/components/List/Item';

interface IListProps {
  children : ReactNode;
}

const List = ({children} : IListProps) => {

  let [bayiList, setBayiList] = useState([]);

  useEffect(() => {
    fetch(
      `http:localhost:7000/api/customers`,
      {
        method : 'GET',
      }
    )
      .then((data : any) => {setBayiList(data)})
  }, [])

  return (
    <div className="List_Container">
      {JSON.stringify(bayiList)}
      {children}
    </div>
  );
};

List.Item = Item;
List.ListFilter = ListFilter;
List.SearchResult = SearchResult;

export default List;
