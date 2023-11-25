import { NextRequest, NextResponse } from 'next/server';
import { getAuthSession } from '@/libs/auth';
import { db } from '@/libs/db';

export const GET = async () => {
  const session = await getAuthSession();

  if (!session?.user) {
    return new Response('Unauthorized', { status: 401 });
  }

  const projects = await db.project.findMany({
    where: {
      ownerId: session.user.id,
    },
  });

  return NextResponse.json({ message: 'success', data: projects });
};

export const POST = async (req: NextRequest) => {
  const session = await getAuthSession();

  if (!session?.user) {
    return new Response('Unauthorized', { status: 401 });
  }

  try {
    const body = await req.json();
    const project = await db.project.create({
      data: {
        name: body.name,
        description: body.description,
        ownerId: session.user.id,
      },
    });

    await db.projectUrl.create({
      data: {
        url: body.url,
        projectId: project.id,
      },
    });

    return NextResponse.json(
      {
        message: 'success',
        data: project,
      },
      { status: 201 },
    );
  } catch {
    return NextResponse.json(
      { message: 'bad request', data: null },
      { status: 400 },
    );
  }
};
