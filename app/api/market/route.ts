import { NextResponse } from 'next/server';

// TODO: Wire to market data source
export async function GET() {
  const chassisCode = process.env.CHASSIS_CODE || 'W124';
  return NextResponse.json({
    chassis: chassisCode,
    data: null,
    message: 'Live market data feed coming soon.',
  });
}
