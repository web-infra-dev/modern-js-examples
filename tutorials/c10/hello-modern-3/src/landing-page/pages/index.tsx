import { Helmet } from '@modern-js/runtime/head';

const Index = () => (
  <>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <p>
      Welcome to <a href="/contacts">Contact List</a>!
    </p>
  </>
);

export default Index;
