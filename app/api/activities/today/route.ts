import { NextResponse } from 'next/server';
import { getTodaysActivities } from '@/lib/static-dashboard-data';

export async function GET() {
  try {
    // For now, use a default user ID since we don't have authentication fully set up
    const userId = "default-user";
    const activities = await getTodaysActivities(userId);
    
    return NextResponse.json(activities);
  } catch (error) {
    console.error('Error fetching today\'s activities:', error);
    return NextResponse.json(
      { error: 'Failed to fetch activities' },
      { status: 500 }
    );
  }
}



