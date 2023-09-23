import type { User } from 'next-auth';

type UserId = string;

declare module 'next-auth/jwt' {
  interface JWT {
    id: UserId;
    accountId?: string | null;
  }
}

declare module 'next-auth' {
  interface Session {
    user: User & {
      id: UserId;
      accountId?: string | null;
    };
  }
}
