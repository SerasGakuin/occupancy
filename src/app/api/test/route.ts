import { NextResponse } from 'next/server';
import { getStudentNameFromLineId } from '@/lib/studentMaster';
import { ApiResponse } from '@/types';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { userId } = body;

        if (!userId) {
            return NextResponse.json<ApiResponse>({ status: 'error', message: 'userId is required' }, { status: 400 });
        }

        const name = await getStudentNameFromLineId(userId);

        if (name) {
            return NextResponse.json<ApiResponse>({ status: 'ok', data: { name } });
        } else {
            return NextResponse.json<ApiResponse>({ status: 'error', message: 'Student not found' }, { status: 404 });
        }
    } catch (error: unknown) {
        console.error('Error in test API:', error);
        const message = error instanceof Error ? error.message : 'Unknown error';
        return NextResponse.json<ApiResponse>({ status: 'error', message }, { status: 500 });
    }
}
