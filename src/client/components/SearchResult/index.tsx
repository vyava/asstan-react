import React from 'react';
import './styles.less';
import { Button } from 'antd';

const SearchResult = () => {
  return (
    <div className="Search_Result">
      <b>147 Sonuç</b>
      
      <span className="search_result_location">
        <Button size="small" type="primary" icon="close-circle">KARTAL</Button>
        <Button size="small" type="primary" icon="close-circle">MALTEPE</Button>
        <Button size="small" type="primary" icon="close-circle">TUZLA</Button>
        <Button size="small" type="primary" icon="close-circle">PENDİK</Button>
        <Button size="small" type="primary" icon="close-circle">ŞİŞLİ</Button>
        <Button size="small" type="primary" icon="close-circle">BEŞİKTAŞ</Button>
        <Button size="small" type="primary" icon="close-circle">KADIKÖY</Button>
        <Button size="small" type="primary" icon="close-circle">KARTAL</Button>
        <Button size="small" type="primary" icon="close-circle">KARTAL</Button>
        <Button size="small" type="primary" icon="close-circle">MALTEPE</Button>
        <Button size="small" type="primary" icon="close-circle">TUZLA</Button>
        <Button size="small" type="primary" icon="close-circle">PENDİK</Button>
        <Button size="small" type="primary" icon="close-circle">ŞİŞLİ</Button>
        <Button size="small" type="primary" icon="close-circle">BEŞİKTAŞ</Button>
        <Button size="small" type="primary" icon="close-circle">KADIKÖY</Button>
        <Button size="small" type="primary" icon="close-circle">KARTAL</Button>
      </span>
      <span>içinde</span>
    </div>
  );
};

export default SearchResult;
