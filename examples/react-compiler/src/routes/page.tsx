import { SlowComponent } from '@/components/Slow';
import { useState } from 'react';

const Dialog = () => {
  return <div>This is a dialog 😉</div>;
};

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <p className="text-lg my-4">
        Click the button, the dialog will show up with a delay. Slow component
        re-render will be visible in the console.
      </p>
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        toggle dialog
      </button>
      {isOpen && <Dialog />}
      <SlowComponent />
    </>
  );
};

export default Index;
