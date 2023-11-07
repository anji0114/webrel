import { NextRequest, NextResponse } from 'next/server';
import { getAuthSession } from '@/libs/auth';
import { db } from '@/libs/db';
import { TContext } from '@/types/api';

export const POST = async (req: NextRequest, context: TContext) => {
  const session = await getAuthSession();

  if (!session?.user) {
    return new Response('Unauthorized', { status: 401 });
  }

  const body = await req.json();

  const projectPage = await db.projectPage.create({
    data: {
      name: body.name,
      path: body.path,
      level: body.level,
      projectId: context.params.id,
    },
  });

  return NextResponse.json({ message: 'success', data: projectPage });
};
