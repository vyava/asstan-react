import React, {useState} from 'react';
import './styles';
import { areas, ilceDetay } from "../../../../../__mocks__/db";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle, faPlus } from "@fortawesome/free-solid-svg-icons";

import ModalBox from "../../Modal";
import SearchResultDetail from "./SearchResultDetail";


import { Tooltip } from 'antd';

const _areas = areas.map((area, i) => (
  <a key={i} className="button_little">
    <FontAwesomeIcon icon={faMinusCircle} className="astn-btn fa-custom-icon" size="1x" onClick={() => (true)} />
    <span>{area}</span>
  </a>))



const SearchResult = () => {

  let [isModalVisible, setModalVisible] = useState(false);

  return (
    <>
      <div className="Search_Result">
        <div className="result_count">
          <b>147 Sonuç</b>
        </div>

        <span className="search_result_location">
          {_areas}
        </span>
        <span className="search_result_location_edit">
          <Tooltip title="Daha Fazla" placement="right">
            <button className="astn-btn" onClick={() => setModalVisible(true)}>
              <FontAwesomeIcon icon={faPlus} className="fa-custom-icon" size="1x" />
            </button>
          </Tooltip>
        </span>
      </div>
      <ModalBox isVisible={isModalVisible} setModalVisible={setModalVisible}>
        <SearchResultDetail dataSource={ilceDetay} targetKeys={[]} />
      </ModalBox>
      {/* <SearchResultDetail dataSource={ilceDetay} targetKeys={[]} /> */}
    </>
  );
};

export default SearchResult;
