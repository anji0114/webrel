import { NextRequest, NextResponse } from 'next/server';
import { getAuthSession } from '@/libs/auth';
import { db } from '@/libs/db';
import { TContext } from '@/types/api';

export const POST = async (req: NextRequest, context: TContext) => {
  const session = await getAuthSession();

  if (!session?.user) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const body = await req.json();

  const projectPage = await db.projectUrl.create({
    data: {
      url: body.url,
      projectId: context.params.id,
    },
  });

  return NextResponse.json({ message: 'success', data: projectPage });
};
