import { List } from 'antd';
import Item from '../Item';

const getAvatar = (users: Array<{ name: string; email: string }>) =>
  users.map(user => ({
    ...user,
    avatar: `https://avatars.dicebear.com/v2/identicon/${user.name}.svg`,
  }));

const mockArchivedData = getAvatar([
  { name: 'Thomas', email: 'w.kccip@bllmfbgv.dm' },
  { name: 'Chow', email: 'f.lfqljnlk@ywoefljhc.af' },
]);

const ArchivedContacts = () => (
  <List
    dataSource={mockArchivedData}
    renderItem={info => <Item key={info.name} info={info} />}
  />
);

export default ArchivedContacts;
