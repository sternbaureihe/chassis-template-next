import { NextResponse } from 'next/server';

// TODO: Wire to eBay/BaT API once researched
// Chassis-scoped via process.env.CHASSIS_CODE
export async function GET() {
  const chassisCode = process.env.CHASSIS_CODE || 'W124';
  return NextResponse.json({
    chassis: chassisCode,
    listings: [],
    message: 'Live classifieds feed coming soon.',
  });
}
