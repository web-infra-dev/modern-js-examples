import { Helmet } from '@modern-js/runtime/head';
import { Link } from '@modern-js/runtime/router';

const Docs = () => (
  <>
    <Helmet>
      <title>Docs</title>
    </Helmet>
    <p>I am docs</p>
    <p>
      <Link to="/comments/i-am-a-comment-title">[Random comment]</Link>
    </p>
  </>
);

export default Docs;
