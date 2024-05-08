import { NextRequest, NextResponse } from 'next/server';
import { getAuthSession } from '@/libs/auth';
import { db } from '@/libs/db';

export const GET = async () => {
  const session = await getAuthSession();

  if (!session?.user) {
    return NextResponse.json(
      { message: 'Unauthorized', data: null },
      { status: 401 },
    );
  }

  const profile = await db.user.findFirst({
    where: {
      id: session.user.id,
    },
  });

  return NextResponse.json(
    { message: 'success', data: profile },
    { status: 200 },
  );
};

export const PUT = async (req: NextRequest) => {
  const session = await getAuthSession();

  if (!session?.user) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const body = await req.json();

  const existingAccount = await db.user.findUnique({
    where: {
      accountId: body.accountId,
    },
  });

  if (existingAccount && existingAccount.id !== session.user.id) {
    return NextResponse.json(
      { message: 'このアカウントIDは使用済みです' },
      { status: 400 },
    );
  }

  const profile = await db.user.update({
    where: {
      id: session.user.id,
    },

    data: {
      name: body.name,
      occupation: body.occupation,
      accountId: body.accountId,
    },
  });

  return NextResponse.json(
    { message: 'success', data: profile },
    { status: 200 },
  );
};
