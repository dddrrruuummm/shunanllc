import type { Metadata } from "next";
import { PageIntro, ContactBand } from "@/components/ui";
import { JourneyGallery } from "@/components/journey-gallery";
export const metadata:Metadata={title:"Fleet Gallery",description:"Explore private travel, airport journeys and luxury vehicle inspiration for your SHUN AN LLC inquiry.",alternates:{canonical:"/journeys/"}};
export default function Journeys(){return <><PageIntro title="A presence, multiplied." text="Ceremonial formations, wedding entrances, memorial processions and the chauffeur presentation. Explore the details of a coordinated journey."/><section className="wrap content-section" style={{paddingTop:0}}><JourneyGallery/></section><ContactBand/></>}
