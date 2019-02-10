import React from 'react';
import ListItem from './ListItem/ListItem';
import './ListWrapper.css';
import { twitterAccounts } from '../../data/twitterAccounts';

const ListWrapper = () => (
  <ul className="listWrapper_wrapper">
    {twitterAccounts.map(item => (
      <ListItem
        key={item.image}
        {...item}
      />
    ))}
  </ul>
);

export default ListWrapper;
