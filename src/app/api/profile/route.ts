import { NextResponse } from 'next/server';
import { getAuthSession } from '@/libs/auth';

export const GET = async () => {
  const session = await getAuthSession();

  if (!session?.user) {
    return NextResponse.json(
      { message: 'Unauthorized', data: null },
      { status: 200 },
    );
  }

  return NextResponse.json(
    { message: 'success', data: session.user },
    { status: 200 },
  );
};
