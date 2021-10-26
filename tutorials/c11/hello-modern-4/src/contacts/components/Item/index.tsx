import Avatar from '../Avatar';

type InfoProps = {
  avatar: string;
  name: string;
  email: string;
  archived?: boolean;
};

const Item = ({
  info,
  onArchive,
}: {
  info: InfoProps;
  onArchive?: () => void;
}) => {
  const { avatar, name, email, archived } = info;
  return (
    <div className="flex p-4 items-center border-gray-200 border-b">
      <Avatar src={avatar} />
      <div className="ml-4 custom-text-gray flex-1 flex justify-between">
        <div className="flex-1">
          <p>{name}</p>
          <p>{email}</p>
        </div>
        <button
          type="button"
          disabled={archived}
          onClick={onArchive}
          className={`text-white font-bold py-2 px-4 rounded-full ${
            archived
              ? 'bg-gray-400 cursor-default'
              : 'bg-blue-500 hover:bg-blue-700'
          }`}>
          {archived ? 'Archived' : 'Archive'}
        </button>
      </div>
    </div>
  );
};

export default Item;
