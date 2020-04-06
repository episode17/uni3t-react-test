/**
 * TASK 02: Fetch data from api
 * -------
 *
 * Return a promise that resolves with the data from the reddit listing
 * endpoint.
 *
 * Hint:
 *  `limit`, `count`, `before` & `after` must be passed as query string
 *  parameters if defined.
 *
 * Hint:
 *  Make sure an error is thrown for bad status codes (eg. not 2xx)
 *
 * Hint:
 *  The actual data is buried in a `data` key and looks like:
 *  {
 *    children: [],
 *    after: "...",
 *    before: "..."
 *  }
 */

export function getListing({
  subreddit = 'all',
  sort = 'top',
  limit,
  count,
  before,
  after
}) {
  const url = `${process.env.REACT_APP_REDDIT_URL}/r/${subreddit}/${sort}.json`;

  // ...
}
