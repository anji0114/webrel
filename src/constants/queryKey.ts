type TQueryKeys = {
  [key in string]: {
    [key in string]: string;
  };
};

export const QUERY_KEYS = {
  PROJECT: {
    FETCH_PROJECTS: 'FETCH_PROJECTS',
    FETCH_PROJECT: 'FETCH_PROJECT',
    FETCH_PROJECT_PAGES: 'FETCH_PROJECT_PAGES',
  },
  PROFILE: {
    FETCH_PROFILE: 'FETCH_PROFILE',
  },
} as const satisfies TQueryKeys;