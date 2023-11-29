import { NextRequest, NextResponse } from 'next/server';
import { getAuthSession } from '@/libs/auth';
import { db } from '@/libs/db';
import { TContext } from '@/types/api';

export const GET = async (req: NextRequest, context: TContext) => {
  const session = await getAuthSession();
  if (!session?.user) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const projectId = context.params.id;

  const project = await db.project.findFirst({
    where: {
      id: projectId,
    },
    select: {
      ownerId: true,
    },
  });

  if (session.user.id !== project?.ownerId) {
    NextResponse.json({ message: 'not found' }, { status: 404 });
  }

  const pages = await db.projectPage.findMany({
    where: {
      projectId: projectId,
    },
  });

  return NextResponse.json({ message: 'success', data: pages });
};

export const POST = async (req: NextRequest, context: TContext) => {
  const session = await getAuthSession();

  if (!session?.user) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
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
