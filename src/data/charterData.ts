export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface SpeciesItem {
  id: string;
  name: string;
  tagline: string;
  badge: string;
  image: string;
  imagePosition?: string;
  bestMonths: string;
  waterDepth: string;
  rigsUsed: string;
  tackleProvided: string;
  summary: string;
}

export interface PricingTier {
  id: string;
  groupLabel: string;
  price: number;
  popular?: boolean;
  subtitle: string;
  highlights: string[];
}

export interface ChecklistItem {
  id: string;
  title: string;
  detail: string;
  icon: "boat" | "fuel" | "rod" | "water" | "fish" | "license" | "weather" | "sun" | "snacks" | "cooler";
  actionUrl?: string;
  actionLabel?: string;
}

export interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  caption: string;
  tag: string;
  span?: "tall" | "wide" | "normal";
}

export interface CatchPhoto {
  id: string;
  src: string;
  alt: string;
  caption: string;
  objectPosition?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  href: string;
}

export interface ExperienceCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  objectPosition?: string;
}

export interface Testimonial {
  id: string;
  author: string;
  quote: string;
  rating: number;
  avatar?: string;
  initials: string;
  avatarColor: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  highlight?: string;
}

export interface PartnerLink {
  name: string;
  logo: string;
  href: string;
}

export const SITE_INFO = {
  name: "New Orleans Style Fishing Charters",
  legalName: "New Orleans Style Fishing Charters L.L.C.",
  establishedYear: 2008,
  tagline: "Come Fish a Nawlins Good Time!",
  captain: "Captain Jason Shilling",
  phone: "(504) 416-5896",
  phoneHref: "tel:5044165896",
  hours: "5:00 AM – 10:00 PM, Mon–Sun",
  email: "info@neworleansstylefishingcharters.com",
  address: "4811 Privateer Blvd Suite 100, Barataria, LA 70036",
  launchName: "Joe's Landing · Lafitte, LA",
  mapsUrl:
    "https://www.google.com/maps/place/New+Orleans+Style+Fishing+Charters/@29.6853213,-90.1017318,979m/data=!3m2!1e3!4b1!4m6!3m5!1s0x8620b083c79a6479:0x5b0f099807e20398!8m2!3d29.6853213!4d-90.1017318!16s%2Fg%2F1tfnyywt?entry=ttu&g_ep=EgoyMDI2MTExNy4wIKXMDSoASAFQAw%3D%3D",
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1800!2d-90.1017318!3d29.6853213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8620b083c79a6479%3A0x5b0f099807e20398!2sNew%20Orleans%20Style%20Fishing%20Charters!5e1!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
  googleReviewsUrl: "https://maps.app.goo.gl/qZBynFGAhDfVwSy7A",
  googleWriteReviewUrl:
    "https://search.google.com/local/writereview?placeid=ChIJeWSax4OwIIYRmAPiB5gJD1s",
  googleRating: "4.9",
  googleReviewCount: 202,
  tripAdvisorUrl:
    "https://www.tripadvisor.com/Attraction_Review-g40019-d7224970-Reviews-New_Orleans_Style_Fishing_Charters-Barataria_Louisiana.html",
  tripAdvisorRating: "5.0",
  tripAdvisorReviewCount: 126,
  fishingBookerRating: "4.8",
  fishingBookerReviewCount: "70",
  yelpUrl:
    "https://www.yelp.com/biz/new-orleans-style-fishing-charters-lafitte-3?osq=New+Orleans+Style+Fishing+Charters",
  yelpRating: "5.0",
  yelpReviewCount: 15,
  instagramUrl: "https://www.instagram.com/neworleansstylefishingcharters",
  facebookUrl: "https://www.facebook.com/neworleansstylefishingcharters",
  twitterUrl: "https://twitter.com/Nawlins_style",
  youtubeUrl: "https://www.youtube.com/watch?v=BnAS8CpVEO4",
  fishingBookerUrl: "https://fishingbooker.com/profile/view/439",
  galleryUrl: "https://www.neworleansstylefishingcharters.com/new-orleans-fishing-charter-gallery/",
  blogUrl: "https://www.neworleansstylefishingcharters.com/fishing-blog/",
  faqUrl: "https://www.neworleansstylefishingcharters.com/fishing-charter-faqs/",
  charterInfoUrl: "https://www.neworleansstylefishingcharters.com/louisiana-fishing-trips-charter-info/",
  lodgingUrl: "https://www.neworleansstylefishingcharters.com/lodging/",
  amenitiesUrl: "https://www.neworleansstylefishingcharters.com/amenities/",
  privacyUrl: "/privacy-policy",
  licenseUrl: "https://www.wlf.louisiana.gov/page/recreational-fishing-licenses-and-permits",
  ldwfRegsUrl: "https://www.eregulations.com/louisiana/fishing",
  transportPartner: {
    name: "Gone Fishing Transportation",
    contact: "Tony",
    phone: "(504) 913-4638",
    phoneHref: "tel:5049134638",
  },
  shippingPartner: {
    name: "Louisiana Dry Ice & Shipping Co.",
    contact: "Patrick Peaden",
    phone: "(504) 333-0286",
    phoneHref: "tel:5043330286",
    address: "5210 Lapalco Blvd Suite D, Marrero, LA 70072",
  },
  restaurants: [
    { name: "Restaurant Des Familles (Lafitte)", href: "https://www.desfamilles.com/" },
    { name: "Oceana Grill (New Orleans)", href: "https://www.oceanagrill.com/" },
  ],
  paymentMethods: "Cash, Credit/Debit Cards, Venmo, Cash App & PayPal",
  minAge: "4 years old and older welcome",
  deposit: 150,
  cancellationDays: 7,
};

// Verified exact Guest House details from /lodging/ & /amenities/
export const LODGING_INFO = {
  title: "Private Guest House Rental",
  layout: "2 Bedrooms · 1½ Baths · Sleeps up to 8",
  baseRate: "$200 / night (up to 4 guests)",
  extraGuestRate: "+$25 / night per extra guest (up to 8)",
  cleaningFee: "$75 per stay cleaning fee",
  amenities: "Wi-Fi · Streaming-ready TVs · Washer/Dryer · Coffee Pot · Microwave · BBQ Pit",
};

// Exact 8-item navigation structure matching the live website
export const NAV_ITEMS: NavItem[] = [
  { label: "Charter Info", href: "/charter-info" },
  { label: "Amenities", href: "/amenities" },
  { label: "Lodging", href: "/lodging" },
  { label: "FAQs", href: "/faqs" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Location", href: "/location" },
  { label: "Contact Us", href: "/contact" },
];

// Section 4: The Fishing Experience (3 authentic photography-focused feature cards)
export const EXPERIENCE_CARDS: ExperienceCard[] = [
  {
    id: "exp-inshore",
    title: "Incredible Inshore Fishing",
    subtitle: "Redfish · Speckled Trout · Drum",
    description:
      "Target hard-fighting Louisiana redfish, paper-mouth speckled trout, black drum, sheepshead, and flounder year-round across the productive Barataria estuary.",
    image: "/images/real/catches/catch-08.jpg",
    imageAlt: "Angler holding two copper Louisiana redfish aboard a bay boat in Lafitte",
    objectPosition: "object-[50%_22%]",
  },
  {
    id: "exp-bayou",
    title: "Explore the Louisiana Bayou",
    subtitle: "Lafitte & Barataria Marshes",
    description:
      "Fish quiet backwater marshes, lakes, bays, and winding bayous in less than five feet of water—surrounded by coastal wildlife, dolphins, and South Louisiana scenery.",
    image: "/images/real/catches/catch-06.jpg",
    imageAlt: "Sunrise redfish catch on calm Lafitte bayou marsh waters south of New Orleans",
    objectPosition: "object-[50%_28%]",
  },
  {
    id: "exp-skill",
    title: "Fun for Every Skill Level",
    subtitle: "Families · Beginners · Pros",
    description:
      "Private charters built around your crew—whether you are an experienced angler chasing a limit or bringing family and kids (ages 4+) out for their very first cast.",
    image: "/images/real/family-catch.jpg",
    imageAlt: "Family smiling together behind a full catch of redfish and trout at Joe's Landing",
    objectPosition: "object-center",
  },
];

export const OFFICIAL_CREDENTIALS = [
  "Fully Insured",
  "Captains are US Coast Guard Licensed",
  "LA Dept. of Wildlife and Fisheries Licensed",
];

export const OFFICIAL_PARTNERS: PartnerLink[] = [
  {
    name: "Cajun Rods",
    logo: "/images/real/partner-1.jpg",
    href: "https://cajunrods.com/",
  },
  {
    name: "Mercury Marine",
    logo: "/images/real/partner-3.jpg",
    href: "https://www.mercurymarine.com/en/us/",
  },
  {
    name: "Sitka Gear",
    logo: "/images/real/partner-2.jpg",
    href: "https://www.sitkagear.com/",
  },
];

// 100% Fact-checked species data strictly from neworleansstylefishingcharters.com (zero live bait, zero invented stats)
export const SPECIES_LIST: SpeciesItem[] = [
  {
    id: "redfish",
    name: "Redfish",
    tagline: "Hard-Fighting Marsh Staple",
    badge: "Daily Primary Target",
    image: "/images/real/species-photo-redfish.jpg",
    imagePosition: "object-[50%_30%]",
    bestMonths: "Peak Apr–Jul & Oct (Year-Round)",
    waterDepth: "4 / person · 18\"–27\" LA slot",
    rigsUsed: "Popping corks, market shrimp, spoons, soft plastics & spinner baits",
    tackleProvided: "7' medium-action spinning rod & 2500 Penn reel",
    summary:
      "Hard-fighting redfish targeted daily across the backwater marsh, lakes, bays, and bayous of Lafitte.",
  },
  {
    id: "speckled-trout",
    name: "Speckled Trout",
    tagline: "Paper-Mouth Local Favorite",
    badge: "Daily Primary Target",
    image: "/images/real/species-photo-trout.jpg",
    imagePosition: "object-center",
    bestMonths: "Peak Apr–Jul & Oct (Year-Round)",
    waterDepth: "15 / person · 13\"–20\" LA slot",
    rigsUsed: "Popping corks, market shrimp & soft plastics (no live bait)",
    tackleProvided: "7' medium-action spinning rod & 2500 Penn reel",
    summary:
      "Paper-mouth speckled trout caught daily in the Barataria estuary—a South Louisiana inshore classic.",
  },
  {
    id: "black-drum",
    name: "Black Drum",
    tagline: "Lafitte Inshore Staple",
    badge: "Main Target Species",
    image: "/images/real/species-photo-black-drum.jpg",
    imagePosition: "object-[50%_25%]",
    bestMonths: "Year-Round (Productive Fall–Spring)",
    waterDepth: "5 / person · 16\"–27\" LA slot",
    rigsUsed: "Market shrimp & artificial tackle (no live bait)",
    tackleProvided: "7' medium-action spinning rod & 2500 Penn reel",
    summary:
      "Listed among Capt. Jason's main targeted inshore species throughout the Lafitte and Barataria estuary.",
  },
  {
    id: "sheepshead",
    name: "Sheepshead",
    tagline: "Sought-After Table Fare",
    badge: "Main Target Species",
    image: "/images/real/species-photo-sheepshead.jpg",
    imagePosition: "object-[50%_38%]",
    bestMonths: "Cooler Months & Year-Round",
    waterDepth: "Estuary banks, bayous & structure",
    rigsUsed: "Market shrimp & light inshore rigs",
    tackleProvided: "7' medium-action spinning rod & 2500 Penn reel",
    summary:
      "Featured in Capt. Jason's main targeted species lineup and prized for sweet, flaky fillets ready for the oven.",
  },
  {
    id: "flounder",
    name: "Flounder",
    tagline: "Barataria Marsh Bonus",
    badge: "Inshore Species",
    image: "/images/real/species-photo-flounder.jpg",
    imagePosition: "object-[50%_32%]",
    bestMonths: "Spring & Fall Inshore Trips",
    waterDepth: "Shallow marsh drains & bays",
    rigsUsed: "Soft plastics & market shrimp (no live bait)",
    tackleProvided: "7' medium-action spinning rod & 2500 Penn reel",
    summary:
      "One of the prized South Louisiana inshore species caught alongside redfish and speckled trout in Lafitte.",
  },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "1-2-people",
    groupLabel: "1–2 People",
    price: 550,
    subtitle: "All Inclusive – total cost, not per person",
    highlights: [
      "Private 5-hour trip starting at safe light",
      "Boat, USCG Captain, fuel, oil, ice & bottled water",
      "7' rods, 2500 Penn reels, tackle, bait & fish cleaning",
    ],
  },
  {
    id: "3-people",
    groupLabel: "3 People",
    price: 600,
    popular: true,
    subtitle: "All Inclusive – total cost, not per person",
    highlights: [
      "Private 5-hour trip (evening trips also available)",
      "22 ft custom bay boat powered by 225hp Mercury Pro XS",
      "All gear, ice, bottled water & fillets packed in zip-locks",
    ],
  },
  {
    id: "4-people",
    groupLabel: "4 People",
    price: 650,
    subtitle: "All Inclusive – total cost, not per person",
    highlights: [
      "Private 5-hour trip — up to 4 guests + Captain",
      "Multi-boat trips arranged for 5+ guests (3–4 boats/day)",
      "Ages 4+ welcome · All gear, bait, water & cleaning included",
    ],
  },
];

// Strictly verified inclusions from Homepage, /louisiana-fishing-trips-charter-info/ & /fishing-charter-faqs/
export const FEES_INCLUDE: ChecklistItem[] = [
  {
    id: "inc-boat",
    title: "Boat & USCG Licensed Captain",
    detail: "Private 5-hour New Orleans fishing charter from Joe's Landing on a 22 ft custom bay boat (225hp Mercury Pro XS), up to 4 guests.",
    icon: "boat",
  },
  {
    id: "inc-fuel",
    title: "All Gas & Oil",
    detail: "All fuel and oil needed for your 5-hour trip through the Lafitte and Barataria marshes are covered.",
    icon: "fuel",
  },
  {
    id: "inc-gear",
    title: "Fishing Equipment (Rods, Reels, Bait & Tackle)",
    detail: "7' medium-action spinning rods, 2500 Penn reels (bait casters on request), popping corks, market shrimp, soft plastics, spoons & spinner baits.",
    icon: "rod",
  },
  {
    id: "inc-water",
    title: "Ice & Bottled Water",
    detail: "All boat ice and bottled water needed on board for your 5-hour inshore fishing trip.",
    icon: "water",
  },
  {
    id: "inc-cleaning",
    title: "Cleaning & Packing of Fish",
    detail: "We clean and filet your catch and pack it in zip-lock bags—ready to cook and enjoy.",
    icon: "fish",
  },
];

// Strictly verified "What should I bring on my trip?" + alcohol policy verbatim from /fishing-charter-faqs/ & Homepage
export const WHAT_TO_BRING: ChecklistItem[] = [
  {
    id: "bring-license",
    title: "Louisiana Fishing License ($20 for 18+)",
    detail: "Required for anyone 18 years old or older—easily obtained in advance by phone or online via LDWF.",
    icon: "license",
    actionUrl: SITE_INFO.licenseUrl,
    actionLabel: "Buy Online (LDWF)",
  },
  {
    id: "bring-weather",
    title: "Dress Accordingly for the Weather",
    detail: "Dress for South Louisiana weather—charters typically start just before sunrise (later starts can usually be accommodated).",
    icon: "weather",
  },
  {
    id: "bring-sun",
    title: "Sunglasses & Sun Block",
    detail: "Don't forget sunglasses and sun block for your 5-hour fishing charter on the water.",
    icon: "sun",
  },
  {
    id: "bring-food",
    title: "Food, Snacks & Beverages",
    detail: "Bring any food, snacks, or beverages you want. Alcohol is allowed (not provided)—preferably no glass bottles.",
    icon: "snacks",
  },
  {
    id: "bring-cooler",
    title: "Cooler to Transport Your Fish",
    detail: "Bring a cooler to transport your filets after we clean them if you decide to keep your catch (keep or release is your choice).",
    icon: "cooler",
  },
];

// 12 Unique Real Verified Catch Photos from neworleansstylefishingcharters.com (4x2 default grid + 4 revealed on "View More")
export const CATCH_FEED_PHOTOS: CatchPhoto[] = [
  {
    id: "cf-1",
    src: "/images/real/catches/catch-01.jpg",
    alt: "Four guests at Joe's Landing fillet table with a full catch of Lafitte redfish — New Orleans Style Fishing Charters",
    caption: "Full Joe's Landing table of golden Lafitte redfish",
    objectPosition: "object-center",
  },
  {
    id: "cf-2",
    src: "/images/real/catches/catch-02.jpg",
    alt: "Family fishing charter crew displaying redfish and speckled trout at Joe's Landing in Barataria, Louisiana",
    caption: "Family inshore charter haul at Joe's Landing",
    objectPosition: "object-center",
  },
  {
    id: "cf-3",
    src: "/images/real/catches/catch-03.jpg",
    alt: "Charter crew in front of the New Orleans Style Fishing Charters dock board loaded with redfish and trout",
    caption: "Loaded hanging board at New Orleans Style Fishing Charters",
    objectPosition: "object-center",
  },
  {
    id: "cf-4",
    src: "/images/real/catches/catch-04.jpg",
    alt: "Anglers posing behind a row of slot redfish and speckled trout caught on a private Lafitte fishing trip",
    caption: "Morning limit of slot redfish & speckled trout",
    objectPosition: "object-center",
  },
  {
    id: "cf-5",
    src: "/images/real/catches/catch-05.jpg",
    alt: "Large multi-boat group fishing charter lined up with dozens of redfish and trout at Joe's Landing",
    caption: "Multi-boat group charter haul out of Barataria",
    objectPosition: "object-center",
  },
  {
    id: "cf-6",
    src: "/images/real/catches/catch-06.jpg",
    alt: "Angler holding a fresh Louisiana redfish on a custom bay boat at sunrise in the Lafitte marshes",
    caption: "Safe-light morning redfish in the calm Lafitte marsh",
    objectPosition: "object-[50%_28%]",
  },
  {
    id: "cf-7",
    src: "/images/real/catches/catch-07.jpg",
    alt: "Parents and young angler smiling with their Lafitte inshore catch at Joe's Landing dock table",
    caption: "Kid-friendly family trip — redfish & speckled trout",
    objectPosition: "object-center",
  },
  {
    id: "cf-8",
    src: "/images/real/catches/catch-08.jpg",
    alt: "Guest holding two copper redfish aboard Captain Jason Shilling's bay boat in South Louisiana",
    caption: "Double hookup of Barataria estuary copper redfish",
    objectPosition: "object-[50%_25%]",
  },
  {
    id: "cf-9",
    src: "/images/real/catches/catch-09.jpg",
    alt: "Couple showing off their private New Orleans inshore charter redfish limit at Joe's Landing",
    caption: "Private 2-person charter limit at Joe's Landing",
    objectPosition: "object-center",
  },
  {
    id: "cf-10",
    src: "/images/real/catches/catch-10.jpg",
    alt: "Father and son behind a full row of fresh Lafitte redfish on the Joe's Landing cleaning table",
    caption: "Cleaned & ready for the table in Lafitte, LA",
    objectPosition: "object-center",
  },
  {
    id: "cf-11",
    src: "/images/real/catches/catch-11.jpg",
    alt: "Smiling angler holding a big Louisiana redfish on the bay boat in Barataria Bay",
    caption: "Hard-fighting redfish landed in shallow marsh water",
    objectPosition: "object-[50%_22%]",
  },
  {
    id: "cf-12",
    src: "/images/real/catches/catch-12.jpg",
    alt: "Two anglers at Joe's Landing fillet table with ten golden South Louisiana redfish",
    caption: "Back-to-back redfish action just south of New Orleans",
    objectPosition: "object-center",
  },
];

// Verified Real Blog Articles from https://www.neworleansstylefishingcharters.com/fishing-blog/
export const BLOG_POSTS: BlogPost[] = [
  {
    id: "blog-fall-fishing",
    title: "Fall Fishing in South Louisiana: Chasing Redfish and Speckled Trout with Capt. Jason",
    date: "Sep 21, 2026",
    category: "Fishing Report",
    excerpt:
      "When people ask me when my favorite time of year to fish South Louisiana is, fall fishing is always high on my list as a guide in the Lafitte marshes.",
    image: "/images/real/charter-boat.webp",
    imageAlt: "Two anglers holding redfish aboard a Lafitte fishing charter boat in South Louisiana",
    href: "/blog",
  },
  {
    id: "blog-why-lafitte",
    title: "Why Fish in Lafitte When Visiting New Orleans?",
    date: "May 30, 2025",
    category: "Lafitte Guide",
    excerpt:
      "Southern Louisiana is famous for its incredible fishing, drawing anglers from all around—discover why Lafitte's calm inshore marshes are a must-do just south of New Orleans.",
    image: "/images/real/hero-screenshot.webp",
    imageAlt: "Aerial view of the Lafitte and Barataria shallow marsh waters south of New Orleans",
    href: "/blog",
  },
  {
    id: "blog-first-time-tips",
    title: "10 Tips for First-Time Anglers on a Fishing Charter",
    date: "May 6, 2024",
    category: "Charter Tips",
    excerpt:
      "Are you gearing up for your first New Orleans fishing charter adventure? Excitement levels are high, and a little preparation goes a long way for a great day on the water.",
    image: "/images/real/catch-5.webp",
    imageAlt: "Smiling young first-time angler with fresh speckled trout at Joe's Landing fillet table",
    href: "/blog",
  },
];

// 100% Real Photos from neworleansstylefishingcharters.com
export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "g-1",
    src: "/images/real/charter-boat.webp",
    alt: "Two men on a fishing boat in the bayou, each holding redfish caught on a New Orleans Style Fishing Charter trip",
    caption: "Fun day on the bayou catching hard-fighting Lafitte redfish.",
    tag: "Redfish",
    span: "tall",
  },
  {
    id: "g-2",
    src: "/images/real/catch-5.webp",
    alt: "Young angler at Joe's Landing fillet table with fresh speckled trout catch",
    caption: "Fish on the table and smiles all around back at Joe's Landing!",
    tag: "Family Charter",
    span: "normal",
  },
  {
    id: "g-3",
    src: "/images/real/family-catch.jpg",
    alt: "Family fishing for the first time with New Orleans Style Fishing Charters",
    caption: "Family fishing for the first time with New Orleans Style Fishing Charters.",
    tag: "First-Time Anglers",
    span: "normal",
  },
  {
    id: "g-4",
    src: "/images/real/hero-live-1.jpg",
    alt: "Owner of New Orleans Style Fishing Charters, Captain Jason Shilling, holding a redfish",
    caption: "Captain Jason Shilling putting crews on shallow-water redfish & speckled trout.",
    tag: "Capt. Jason",
    span: "normal",
  },
  {
    id: "g-5",
    src: "/images/real/hero-screenshot.webp",
    alt: "Aerial view of Lafitte bayou and Barataria marshlands",
    caption: "Backwater marsh, lakes, bays, and bayous of Lafitte — typically less than 5' of water.",
    tag: "Lafitte Bayou",
    span: "wide",
  },
];

// All 5 Real Verified Google Business Profile Testimonials verbatim from the live homepage (with official Google avatars)
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "rev-1",
    author: "Claire Humphreys",
    quote:
      "Captain Jason and New Orleans Style Fishing Charters are amazing! We highly recommend going out with him if you are interested in catching a ton of fish and having a blast doing it! He not only took us to great spots so we could try to catch a lot of fish, but he took his time assisting our daughter as she reeled up her catches too!",
    rating: 5,
    avatar: "/images/real/reviews/unnamed-34.png",
    initials: "CH",
    avatarColor: "#203F39",
  },
  {
    id: "rev-2",
    author: "Yvette Williams",
    quote:
      "My son and I had a great time with Capt. Jason. Our trip was very successful. Staying in the rental was a huge plus. Everything we needed was right there and allowed us to expand our catch of many different 'species'. Thank you for making our stay a very memorable one.",
    rating: 5,
    avatar: "/images/real/reviews/unnamed-35.png",
    initials: "YW",
    avatarColor: "#BF754C",
  },
  {
    id: "rev-3",
    author: "Derek Towles",
    quote:
      "Jason was great. I'd highly recommend him to anyone who wants to do some fishing while in the New Orleans area. We managed to catch our limit of speckled trout and also got into some red fish and drum. Jason is a knowledgeable and experienced guide who meets you where you are no matter if you're a seasoned veteran or a beginner.",
    rating: 5,
    avatar: "/images/real/reviews/unnamed-36.png",
    initials: "DT",
    avatarColor: "#2B514A",
  },
  {
    id: "rev-4",
    author: "Brandon John",
    quote:
      "Great time, great experience for me and my 14 year old. It's an active-style of fishing which is our preference (lots of casting). We caught plenty of fish including some monster red fish which my son still talks about. Captain Jason is great company and communicates well. It was my first time seeing dolphins and gators near my fishing boat (we're from the midwest).",
    rating: 5,
    avatar: "/images/real/reviews/unnamed-37.png",
    initials: "BJ",
    avatarColor: "#5C7362",
  },
  {
    id: "rev-5",
    author: "Eddie Zhang",
    quote:
      "Trip started at 6:30AM, and we limited out at 45 speckled trout by 8:30AM, and went looking for reds and sheepshead, and half of our group didn't even know what a rod was. Absolutely fantastic trip, and Captain Jason was even better cause he not only put up with our party's ineptitude for fishing, but also helped us get over the learning curve.",
    rating: 5,
    initials: "EZ",
    avatarColor: "#203F39",
  },
];

// Exact 6 Homepage FAQs from the Content Brief — concise, conversational US English & fact-checked
export const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    question: "How long are your fishing charters?",
    answer:
      "Our private inshore charters last 5 hours and usually leave Joe's Landing right before sunrise. Later morning starts and evening trips are often available upon request.",
  },
  {
    id: "faq-2",
    question: "What should I bring on my fishing trip?",
    answer:
      "Bring your fishing license, sunglasses, sunscreen, weather-appropriate clothes, and any food or drinks you'd like (alcohol is welcome—please avoid glass bottles). We provide all gear, bait, ice, and bottled water; just bring a cooler if you'd like to take fillets home.",
  },
  {
    id: "faq-3",
    question: "Do I need a fishing license?",
    answer:
      "Yes. Everyone 18 and older needs a $20 Louisiana fishing license before heading out. You can easily buy one online or by phone through the LDWF ahead of your trip.",
  },
  {
    id: "faq-4",
    question: "Where will we be fishing?",
    answer:
      "We fish the calm, shallow marshes, lakes, and bayous around Lafitte and Barataria—usually in under 5 feet of water. You'll target redfish, speckled trout, black drum, sheepshead, and flounder.",
  },
  {
    id: "faq-5",
    question: "Are beginners and children welcome?",
    answer:
      "Absolutely! Every trip is private for just your group, and we welcome all skill levels plus kids ages 4 and up. Each boat holds up to 4 guests, and we can easily set up multiple boats for larger groups.",
  },
  {
    id: "faq-6",
    question: "How far are you from downtown New Orleans?",
    answer:
      "We launch from Joe's Landing in Lafitte, about 20 miles (35–45 minutes) south of downtown New Orleans. Because Uber and Lyft don't pick up for return rides from Lafitte, call Tony at Gone Fishing Transportation for easy round-trip service and mention Captain Jason.",
  },
];
