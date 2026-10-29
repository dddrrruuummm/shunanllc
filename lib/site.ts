export const company = {
  name: "SHUN AN LLC",
  shortName: "SHUN AN",
  url: "https://shunanllc.com",
  email: "contact@shunanllc.com",
  phone: "(909) 555-0148",
  phoneHref: "+19095550148",
  phoneIsPlaceholder: true,
  address: "5875 Silver Oaks Dr",
  city: "Chino, CA 91710",
  maps: "https://www.google.com/maps/search/?api=1&query=5875%20Silver%20Oaks%20Dr%2C%20Chino%2C%20CA%2091710",
};
export const navigation = [
  { href: "/services/", label: "Chauffeur services" },
  { href: "/fleet/", label: "The collection" },
  { href: "/rentals/", label: "Car rentals" },
  { href: "/events/", label: "Event fleets" },
];
export const tripTypes = [
  { name: "Airport transfers", short: "Airport", description: "A considered start or finish to your flight. Share your terminal, flight number, luggage and destination so your transfer can be arranged around the details.", note: "Chino · ONT · LAX · SNA", href: "/services/#routes" },
  { name: "Business travel", short: "Business", description: "From your first meeting to your last appointment. Put your stops, timing and vehicle preferences into one brief for a tailored business travel quote.", note: "Meetings · Hotels · Multiple stops", href: "/services/#business" },
  { name: "Special occasions", short: "Occasions", description: "Make the journey part of the occasion. Discuss your event timing, passenger count and return plans before selecting a vehicle.", note: "Celebrations · Dinners · Events", href: "/services/#occasions" },
  { name: "Private journeys", short: "Private", description: "An afternoon out, a personal itinerary or a day that needs a little more flexibility. Tell us where you want to go and how you would like to travel.", note: "Point to point · Hourly requests", href: "/contact/?trip=Private%20journey" },
];
// Planning estimates derived from public competitor rates. See docs/PRICING-RESEARCH.md.
// These are editable sample prices, not confirmed SHUN AN offers or live quotations.
export const routes = [
  { from: "Chino", to: "Ontario Airport", code: "ONT", sedan: 95, suv: 125 },
  { from: "Chino", to: "Los Angeles Airport", code: "LAX", sedan: 195, suv: 235 },
  { from: "Chino", to: "John Wayne Airport", code: "SNA", sedan: 165, suv: 205 },
  { from: "Chino", to: "Downtown Los Angeles", code: "DTLA", sedan: 175, suv: 215 },
];
export const vehicles = [
  { name: "Rolls-Royce Phantom", category: "Ceremonial flagship", price: null as number|null, hourly: null as number|null, image: "fleet-hero-concept.jpg", alt: "Coordinated black Phantom-style limousines", detail: "The signature preference for distinguished receptions, wedding arrivals and ceremonial fleets.", type: "Luxury" },
  { name: "Mercedes-Maybach S-Class", category: "Flagship luxury sedan", price: 795 as number|null, hourly: null as number|null, image: "maybach.jpg", alt: "Two-tone W223 Mercedes-Maybach S-Class on a road", detail: "A flagship preference for an unhurried, elevated journey.", type: "Sedan" },
  { name: "Rolls-Royce Cullinan", category: "Ultra-luxury SUV", price: 1495 as number|null, hourly: null as number|null, image: "cullinan.jpg", alt: "Black Rolls-Royce Cullinan viewed from the rear", detail: "An unmistakable choice for special arrivals and private occasions.", type: "Luxury" },
  { name: "Cadillac Escalade", category: "Premium SUV", price: 425 as number|null, hourly: 125 as number|null, image: "escalade.jpg", alt: "Modern black Cadillac Escalade front view", detail: "A commanding SUV preference for airport and group itineraries.", type: "SUV" },
  { name: "Bentley Flying Spur", category: "Grand touring sedan", price: null as number|null, hourly: null as number|null, image: "bentley.jpg", alt: "Modern black Bentley Flying Spur front view", detail: "A distinctive sedan for business travel and occasion-led journeys.", type: "Sedan" },
];
export const journeys = [
  { image: "fleet-chauffeurs.jpg", title: "The chauffeur presentation", category: "Chauffeurs", text: "Formal attire and a composed welcome, considered alongside your fleet.", alt: "Suited chauffeurs standing beside the passenger doors of a varied luxury vehicle lineup" },
  { image: "fleet-memorial.jpg", title: "A dignified farewell", category: "Memorial", text: "A quiet, coordinated procession for family farewells.", alt: "Five black luxury limousines in a dignified memorial procession formation" },
  { image: "fleet-hero-concept.jpg", title: "The ceremonial arrival", category: "Occasions", text: "An imposing formation for a distinguished reception.", alt: "Six black Phantom-style luxury limousines outside a grand hotel" },
  { image: "fleet-wedding-concept.jpg", title: "The wedding entrance", category: "Occasions", text: "White and silver luxury, considered as one occasion.", alt: "Four white and silver Phantom-style wedding limousines" },
  { image: "fleet-executive.jpg", title: "Executive formation", category: "Business", text: "A coordinated sedan preference for guest and business itineraries.", alt: "A long line of BMW 7 Series executive sedans" },
  { image: "fleet-supercars.jpg", title: "The grand opening", category: "Occasions", text: "An exotic-car presence for a moment in the spotlight.", alt: "A row of exotic sports cars on a cobblestone street" },
  { image: "fleet-exotics.jpg", title: "A collection of character", category: "Occasions", text: "Distinctive automotive personalities, brought together.", alt: "Several exotic and luxury cars arranged on a city street" },
  { image: "fleet-night.jpg", title: "After dark", category: "Business", text: "Luxury vehicle preferences for evening travel arrangements.", alt: "A row of Mercedes and other luxury vehicles photographed at night" },
  { image: "fleet-rolls.jpg", title: "An elevated welcome", category: "Airport", text: "A paired luxury vehicle presentation for guest arrivals.", alt: "A Rolls-Royce Cullinan and a Mercedes G-Class parked together" },
  { image: "fleet-sports.jpg", title: "The statement collection", category: "Occasions", text: "Supercar preferences that bring a sense of occasion.", alt: "Several exotic sports cars parked in front of an elegant building" },
];
export const money = (value: number) => `$${value.toLocaleString("en-US")}`;
