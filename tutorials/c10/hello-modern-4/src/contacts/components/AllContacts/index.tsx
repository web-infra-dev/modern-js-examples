import { useEffect } from 'react';
import { useLocalModel } from '@modern-js/runtime/model';
import { List } from 'antd';
import Item from '../Item';
import contacts from '../../models/contacts';

const AllContacts = () => {
  const [{ items, error, pending }, actions] = useLocalModel(contacts);

  useEffect(() => {
    if (!items.length && !error && !pending) {
      actions.load();
    }
  });
  return (
    (items.length && (
      <List
        dataSource={items}
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
