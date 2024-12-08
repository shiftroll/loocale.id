import Image from 'next/image'
import { Metadata } from 'next'

interface LocationPageProps {
  params: {
    location: string
  }
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  // Fetch location data and return metadata
  return {
    title: `${params.location} - Loocale`,
  }
}

export default async function LocationPage({ params }: LocationPageProps) {
  // Fetch location data here
  const locationData = await getLocationData(params.location)

  return (
    <>
      <div className="explore-single-page">
        <div className="right-side-floating">
          <div className="ask-expert-info">
            <div className="div-block-121">
              <div className="ask-our-expert-floating">Ask Our Expert</div>
            </div>
          </div>
          <div className="ask-expert-floating-button">
            <a href="/expert" className="ask-expert-link">
              <Image 
                src="/assets/images/ask-icon.png"
                alt="Ask Expert"
                width={24}
                height={24}
                className="ask-icon"
              />
            </a>
          </div>
        </div>

        {/* Convert the rest of the template similarly */}
      </div>
    </>
  )
} 