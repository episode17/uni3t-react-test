import React, { useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { stringify } from 'query-string';

import * as api from './api';
import useQuery from './hooks/useQuery';
import useLocationParams from './hooks/useLocationParams';

import Page from './components/Page';
import Header from './components/Header';
import Spinner from './components/Spinner';
import Error from './components/Error';
import PostList from './components/PostList';
import Post from './components/Post';
import Pagination from './components/Pagination';
import Button from './components/Button';

const PER_PAGE = 6;

const App = () => {
  const history = useHistory();
  const { sort } = useParams();

  // get the query parameters from url
  const { count = 0, before, after } = useLocationParams();

  // get the query executor & query status
  const [getListing, { status, data, error }] = useQuery(api.getListing);

  /**
   * TASK 01: Call the api function
   * -------
   *
   * Call `getListing()` with the right parameters on mount & on route changes
   *
   * Hint:
   *  See `src/api` for the list of parameters
   *
   * Hint:
   *  A route change occurs when `sort`, `count`, `before` or `after` change.
   *
   * Hint:
   *  `status`, `data` & `error` will get updated automatically with the
   *  relevant values.
   */

  // ...

  // scroll to top whenever the query has fetched new data
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data]);

  const handleSortChange = sort => {
    history.push(`/${sort}`);
  };

  return (
    <Page>
      <Header sort={sort} onSortChange={handleSortChange} />
      {data?.children.length > 0 && (
        <PostList faded={status === 'pending'}>
          {/**
           * TASK 03: Render the posts
           * -------
           *
           * Hint:
           *  Use the Post component like: <Post data={...} />
           */}

          {/* ... */}
        </PostList>
      )}
      {status === 'pending' ? (
        <Spinner />
      ) : status === 'rejected' ? (
        <Error error={error} />
      ) : (
        <Pagination>
          {data?.before && (
            <Button
              as={Link}
              to={`/${sort}?${stringify({
                count: before ? count - PER_PAGE : count + 1,
                before: data.before
              })}`}
            >
              Prev
            </Button>
          )}
          {data?.after && (
            <Button
              as={Link}
              to={`/${sort}?${stringify({
                count: before ? count - 1 : count + PER_PAGE,
                after: data.after
              })}`}
            >
              Next
            </Button>
          )}
        </Pagination>
      )}
    </Page>
  );
};

export default App;
