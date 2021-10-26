import { List } from 'antd';
import LaddaButton, { S, SLIDE_UP } from 'react-ladda';
import 'ladda/dist/ladda.min.css';
import Avatar from './components/Avatar';

const getAvatar = (users: Array<{ name: string; email: string }>) =>
  users.map(user => ({
    ...user,
    avatar: `https://avatars.dicebear.com/v2/identicon/${user.name}.svg`,
  }));

const mockData = getAvatar([
  { name: 'Thomas', email: 'w.kccip@bllmfbgv.dm' },
  { name: 'Chow', email: 'f.lfqljnlk@ywoefljhc.af' },
  { name: 'Bradley', email: 'd.wfovsqyo@gpkcjwjgb.fr' },
  { name: 'Davis', email: '"t.kqkoj@utlkwnpwk.nu' },
]);

function App() {
  return (
    <div>
      <List
        dataSource={mockData}
        renderItem={({ name, email, avatar }) => (
          <List.Item
            key={name}
            actions={[
              <LaddaButton
                key={email}
                loading={false}
                data-size={S}
                data-style={SLIDE_UP}
                data-spinner-size={20}
                data-spinner-color="#ddd"
                data-spinner-lines={8}>
                Call
              </LaddaButton>,
            ]}>
            <List.Item.Meta
              avatar={<Avatar src={avatar} />}
              title={name}
              description={email}
            />
          </List.Item>
        )}
      />
    </div>
  );
}

export default App;
