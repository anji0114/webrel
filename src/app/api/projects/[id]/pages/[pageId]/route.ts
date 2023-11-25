import { NextRequest, NextResponse } from 'next/server';
import { getAuthSession } from '@/libs/auth';
import { db } from '@/libs/db';

type TContext = {
  params: { id: string; pageId: string };
};

export const PATCH = async (request: NextRequest, context: TContext) => {
  const session = await getAuthSession();
  if (!session?.user) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const projectId = context.params.id;

  const project = await db.project.findFirst({
    where: {
      id: projectId,
    },
  });

  if (project?.ownerId !== session.user.id) {
    return NextResponse.json({ message: 'not found' }, { status: 404 });
  }

  const body = await request.json();
  const pageId = context.params.pageId;

  await db.projectPage.update({
    where: {
      id: pageId,
    },

    data: {
      name: body.name,
      path: body.path,
    },
  });

  return NextResponse.json({ message: 'success' });
};

export const DELETE = async (request: NextRequest, context: TContext) => {
  const session = await getAuthSession();
  if (!session?.user) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const pageId = context.params.pageId;

  const projectPage = await db.projectPage.delete({
    where: {
      id: pageId,
    },
  });

  return NextResponse.json({ message: 'success', data: { projectPage } });
};
