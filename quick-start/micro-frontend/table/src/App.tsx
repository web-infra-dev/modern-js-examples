import React, {useEffect} from 'react';
import { Table } from 'antd';
import { useModel } from '@modern-js/runtime/model';
import tableListModel from './models/tableList';

const TableList: React.FC  = () => {

  const [{data}, {load}] = useModel(tableListModel);

  useEffect(() => {
    load();
  }, [])

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
  ]

  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  )

}

export default TableList
