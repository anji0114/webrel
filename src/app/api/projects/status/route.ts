import { NextRequest, NextResponse } from 'next/server';
import { getAuthSession } from '@/libs/auth';
// import { db } from '@/libs/db';

export const POST = async (req: NextRequest) => {
  const session = await getAuthSession();
  if (!session?.user) {
    return new Response('Unauthorized', { status: 401 });
  }

  const body = await req.json();

  // const status = await db.status.create({
  //   data: {},
  // });

  return NextResponse.json({ message: 'success', data: body });
};
