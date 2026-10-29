import type { MetadataRoute } from "next";
import { company } from "@/lib/site";
export const dynamic = "force-static";
export default function sitemap():MetadataRoute.Sitemap {return ["","about/","services/","fleet/","rentals/","events/","memorial/","journeys/","contact/","privacy/","terms/"].map(path=>({url:`${company.url}/${path}`,lastModified:new Date("2026-10-30"),changeFrequency:path===""?"monthly":"yearly",priority:path===""?1:0.7}));}
