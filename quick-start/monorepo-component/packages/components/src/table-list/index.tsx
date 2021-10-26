import type React from 'react';
import { useEffect } from 'react';
import { Table } from 'antd';
import { useModel } from '@modern-js/runtime/model';
import tableListModel from './table-list-model';

import './table-list.less';

const TableList: React.FC = () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Country',
      dataIndex: 'country',
      key: 'country',
    },
  ];

  const [{ data }, { load }] = useModel(tableListModel);
  console.info(data);

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="table-list table-theme">
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default TableList;
