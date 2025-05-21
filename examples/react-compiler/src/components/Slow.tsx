import React, { useEffect } from 'react';

const sleep = (ms: number) => {
  const start = Date.now();
  let now = start;

  while (now - start < ms) now = Date.now();
};

export const SlowComponent = () => {
  sleep(300);
  useEffect(() => {
    console.log('re-render component');
  });

  return <div className="text-base my-4">Slow component</div>;
};
