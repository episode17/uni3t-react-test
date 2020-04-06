import styled from 'styled-components';

/**
 * TASK 04: Layout the posts
 * -------
 *
 * Display the posts in 1, 2 or 3 columns
 *
 * Hint:
 *  Use breakpoints at: 0, 1000px and 1400px respectively
 *
 * Hint:
 *  Try using CSS grids
 */

const PostList = styled.div`
  ${props => props.faded && 'opacity: 0.5;'} /* ... */
`;

export default PostList;
