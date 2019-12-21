import React from 'react';
import './styles';
import { Button, Icon } from 'antd';
import { areas } from "../../../../__mocks__/db";


const _areas = areas.map((area, i) => (
            <a key={i} className="button_little">
                <Icon className="remove_icon" type="close-circle" />
                <span>{area}</span>
            </a>))



const SearchResult = () => {
  return (
    <div className="Search_Result">
      <div className="result_count">
        <b>147 Sonuç</b>
      </div>

      <span className="search_result_location">
        {_areas}
      </span>
      <span className="search_result_location_edit"><Button size="default" type="dashed" icon="more" /></span>
    </div>
  );
};

export default SearchResult;
