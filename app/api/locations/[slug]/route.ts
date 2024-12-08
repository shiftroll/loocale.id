import { NextResponse } from 'next/server'

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  // Replace with your data fetching logic
  const locationData = {
    title: params.slug,
    // ... other data
  }

  return NextResponse.json(locationData)
} 