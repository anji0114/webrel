import { NextRequest, NextResponse } from 'next/server';
import { getAuthSession } from '@/libs/auth';

export const POST = async (req: NextRequest) => {
  const session = await getAuthSession();
  if (!session?.user) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const body = await req.json();

  return NextResponse.json({ message: 'success', data: body });
};
