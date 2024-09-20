import React, { useState, Suspense } from 'react';
import { Button } from 'remote/Button';

const Index = (): JSX.Element => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Button />
      </Suspense>
    </div>
  );
};

export default Index;
