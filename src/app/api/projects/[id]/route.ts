import { NextRequest, NextResponse } from 'next/server';
import { getAuthSession } from '@/libs/auth';
import { db } from '@/libs/db';

type TContext = {
  params: { id: string };
};

export const GET = async (request: NextRequest, context: TContext) => {
  const session = await getAuthSession();
  if (!session?.user) {
    return new Response('Unauthorized', { status: 401 });
  }

  const { id } = context.params;
  const project = await db.project.findUnique({
    where: {
      id: id,
    },
  });

  if (project?.ownerId !== session.user.id) {
    return new Response('Not Found', { status: 404 });
  }

  return NextResponse.json({ message: 'success', data: project });
};

export const DELETE = async (request: NextRequest, context: TContext) => {
  const session = await getAuthSession();
  if (!session?.user) {
    return new Response('Unauthorized', { status: 401 });
  }

  const { id } = context.params;
  const project = await db.project.delete({
    where: {
      id: id,
    },
  });

  return NextResponse.json({ message: 'success', data: project });
};
