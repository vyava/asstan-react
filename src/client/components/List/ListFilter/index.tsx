import React, { useState } from 'react';
import { Input, Icon, Select, Button, Tooltip } from 'antd';
import './styles';

import { locationList } from "../../../../../__mocks__/db"

let { Option } = Select;

let cities: any = [];

locationList.map((city) => {
  cities.push(<Option key={city._id}>{city.name}</Option>);
});

const ListFilter = () => {
  let [inputFocused, setInputFocused]: [boolean, any] = useState(false);

  let changeContainer = (event: any) => {
    setInputFocused(!inputFocused);
  };

  const { Search } = Input;

  return (
    <div className={`List_Filter${inputFocused ? ' inputFocused' : ''}`}>
      <div className="Input_Container">
        <Search
          placeholder="Ara"
          // loading={true}
          // onChange={(e) => console.log(e.target.value)}
          onFocus={changeContainer}
          onBlur={changeContainer}
        ></Search>
      </div>
      <div className="Filter_Container">
        <div className="filter_location">
          <Select
            mode="multiple"
            placeholder="Konum" // Hard coded
            notFoundContent="Bulunamadı" // Hard coded
            maxTagCount={1}
            autoFocus={true}
            showArrow={true} // Hard coded
            maxTagTextLength={8}
            size="default"
            removeIcon={<Icon type="close-circle" />}
            loading={false} // Hard coded
            style={{ width: '100%' }}
            dropdownRender={menu => (
              <div>
                {/* <ButtonGroup key="Kayıtlı Liste">
                    <Option>as</Option>
                </ButtonGroup> */}

                {menu}
                
                <Button type="dashed">Load more</Button>
              </div>
            )}
          >
            {cities}
          </Select>
        </div>
        <div className="Saved_Filter">
          <Tooltip title="Kayıtlı Filtreler">
            <Icon type="unordered-list" />
          </Tooltip>
        </div>
        <div className="Search_Container">
          <Button size="default" type="primary">ARA</Button>
        </div>
      </div>
    </div>
  );
};

export default ListFilter;
