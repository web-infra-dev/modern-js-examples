import { useState, useEffect } from 'react';
import styled from '@modern-js/runtime/styled';
import { Helmet } from '@modern-js/runtime/head';
import { useLoader } from '@modern-js/runtime';
import getData from '@api/data';
import { NoSSR } from '@modern-js/runtime/ssr';

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const Content = styled.div`
  margin: 20px;
  padding: 10px;
  border: 1px solid gray;
  max-width: 1366px;
`;

const Introduction = () => {
  const [time, setTime] = useState(new Date().toString());

  const { data } = useLoader(async () => {
    const res = await getData();
    return res;
  });

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date().toString());
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div>
      <Helmet>
        <title>Introduction</title>
      </Helmet>
      {data ? (
        <>
          <Title>{data.title}</Title>
          <Content>{data.content}</Content>
        </>
      ) : null}
      <NoSSR>
        <div>Current time: {time}</div>
      </NoSSR>
    </div>
  );
};

export default Introduction;
