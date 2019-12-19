import React, { useState } from 'react';
import { Input, Icon, Select } from 'antd';
import './styles.less';

let { Option } = Select;

let cities: any = [];

['İstanbul', 'İzmir', 'Ankara', 'Kahramanmaraş'].map((e, i) => {
  cities.push(<Option key={i}>{e}</Option>);
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
          >
            {cities}
          </Select>
        </div>
        <div className="filter_another1">
          <Icon type="unordered-list" />
        </div>
        <div className="filter_another2">b</div>
      </div>
    </div>
  );
};

export default ListFilter;
