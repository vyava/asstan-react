import React from 'react';
import classNames from 'classnames';
import './styles';
import { Icon } from 'antd';
import { IBayi } from '@/interface/Bayi';

interface IItemProps {
  bayi: IBayi;
}

const Item = (props: IItemProps) => {
  return (
    <a
      href="#"
      className={classNames({
        Item: true,
        faal: props.bayi.durum == 'FAAL',
        terk: props.bayi.durum == 'TERK',
        onay: props.bayi.durum.includes('ONAY')
      })}
    >
      <span className="item-detail-container">
        <b>{props.bayi.unvan}</b>
        <span className="location_short">{props.bayi.ilce}</span>
      </span>
      <Icon type="more" className="moreIcon" />
    </a>
  );
};

export default Item;
