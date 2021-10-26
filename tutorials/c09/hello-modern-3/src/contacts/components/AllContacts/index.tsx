import { useState, useEffect } from 'react';
import { List } from 'antd';
import { get as concats } from '@api/contacts';
import Item from '../Item';

const AllContacts = () => {
  const [list, setList] = useState(
    [] as Array<{ name: string; email: string; avatar: string }>,
  );
  const loadMockData = async () => {
    const { data } = await concats();
    setList(data);
  };
  useEffect(() => {
    if (!list.length) {
      loadMockData();
    }
  });
  return (
    (list.length && (
      <List
        dataSource={list}
        renderItem={info => <Item key={info.name} info={info} />}
      />
    )) || (
      <div className="p-4 items-center border-gray-200 border-b border-t custom-text-gray">
        Pending...
      </div>
    )
  );
};

export default AllContacts;
