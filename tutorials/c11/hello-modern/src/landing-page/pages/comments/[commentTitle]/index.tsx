import { Helmet } from '@modern-js/runtime/head';
import { Link } from '@modern-js/runtime/router';
import _ from 'lodash';

const Index = ({ match: { params } }: any) => {
  const title = _.startCase(params.commentTitle);
  return (
    <>
      <Helmet>
        <title>Comment: {title}</title>
      </Helmet>
      <p>
        <Link to="/docs/">{'< Back'}</Link>
      </p>
      <h1>Subject: {title}</h1>
      <p>Post: I am a comment</p>
    </>
  );
};

export default Index;
