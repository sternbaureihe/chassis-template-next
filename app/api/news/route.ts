import { NextResponse } from 'next/server';

// TODO: Wire to Mercedes news feed filtered by chassis
export async function GET() {
  const chassisCode = process.env.CHASSIS_CODE || 'W124';
  return NextResponse.json({
    chassis: chassisCode,
    articles: [],
    message: 'News feed coming soon.',
  });
}
