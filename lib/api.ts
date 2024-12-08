export async function getLocationData(slug: string) {
  // Replace with your data fetching logic
  const res = await fetch(`/api/locations/${slug}`)
  if (!res.ok) throw new Error('Failed to fetch location')
  return res.json()
} 