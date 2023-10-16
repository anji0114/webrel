type TQueryKeys = {
  [key in string]: {
    [key in string]: string;
  };
};

export const QUERY_KEYS = {
  PROJECT: {
    FETCH_PROJECTS: 'FETCH_PROJECTS',
  },
} as const satisfies TQueryKeys;