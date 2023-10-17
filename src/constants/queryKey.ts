type TQueryKeys = {
  [key in string]: {
    [key in string]: string;
  };
};

export const QUERY_KEYS = {
  PROJECT: {
    FETCH_PROJECTS: 'FETCH_PROJECTS',
    FETCH_PROJECT: 'FETCH_PROJECT',
  },
} as const satisfies TQueryKeys;