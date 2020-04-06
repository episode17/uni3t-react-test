import { useCallback, useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'started': {
      return {
        ...state,
        status: 'pending'
      };
    }
    case 'resolved': {
      return {
        ...state,
        status: 'resolved',
        data: action.data
      };
    }
    case 'rejected': {
      return {
        ...state,
        status: 'rejected',
        data: null,
        error: action.error
      };
    }
    default: {
      return state;
    }
  }
}

export default function useQuery(query) {
  const [state, dispatch] = useReducer(reducer, {
    status: 'pending',
    data: null,
    error: null
  });

  const runQuery = useCallback(
    async (...params) => {
      try {
        dispatch({ type: 'started' });
        const response = await query(...params);
        dispatch({ type: 'resolved', data: response });
      } catch (err) {
        dispatch({ type: 'rejected', error: err });
      }
    },
    [query]
  );

  return [runQuery, state];
}
