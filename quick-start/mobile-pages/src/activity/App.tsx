import React, { useEffect, useState } from 'react';
import styled from '@modern-js/runtime/styled';
import products from '@api/products';

const TitleWrapper = styled.div`
  font-size: 2rem;
  text-align: center;
  margin: 0.5rem 0;
  color: goldenrod;
`;

const ItemWrapper = styled.li`
  display: flex;
  justify-content: space-around;
  font-size: 1.5rem;
  line-height: 2;
`;

interface Product {
  id: string;
  name: string;
  price: number;
}

const App: React.FC = () => {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    const load = async () => {
      const _data = await products();
      setData(_data);
    };

    load();
  }, []);

  return (
    <div>
      <TitleWrapper>Promotion Campaign</TitleWrapper>
      <div>
        {data.map(item => {
          const { id, name, price } = item;
          return (
            <ItemWrapper key={id}>
              <span>{name}</span>
              <span>${price}</span>
            </ItemWrapper>
          );
        })}
      </div>
    </div>
  );
};

export default App;
