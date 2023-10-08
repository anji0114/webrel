import { NextRequest, NextResponse } from 'next/server';
import { getAuthSession } from '@/libs/auth';
import { db } from '@/libs/db';

export const GET = async () => {
  const session = await getAuthSession();

  if (!session?.user) {
    return new Response('Unauthorized', { status: 401 });
  }

  return NextResponse.json({ name: 'GET', user: session.user });
};

export const POST = async (req: NextRequest) => {
  const session = await getAuthSession();

  if (!session?.user) {
    return new Response('Unauthorized', { status: 401 });
  }

  const body = await req.json();

  const project = await db.project.create({
    data: {
      name: body.name,
      description: body.description,
      ownerId: session.user.id,
    },
  });

  return NextResponse.json({ data: project, status: 200 });
};
