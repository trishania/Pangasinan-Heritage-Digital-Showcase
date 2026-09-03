/**
 * data/heritageSites.ts — Static data for Pangasinan heritage sites.
 * Content is static so it can be used with Next.js static export.
 *
 * Google Maps URLs are placeholders — replace `https://maps.app.goo.gl/...`
 * with the actual short links when available.
 */

import type { HeritageSite } from "@/components/molecules/HeritageCard";

export const HERITAGE_SITES: HeritageSite[] = [

  // ── Lingayen ───────────────────────────────────────────────────────────────
  {
    id:          "1",
    name:        "Pangasinan Provincial Capitol Building",
    location:    "Lingayen, Pangasinan",
    category:    "Historical",
    description:
      "The neoclassical Pangasinan Capitol (built 1917) is one of the \"Eight Architectural " +
      "Heritage Treasures\" of the Philippines. This grand government landmark has served " +
      "as the province's seat of power for over a century, with its iconic columns and " +
      "manicured grounds open to the public.",
    imageUrl:    "/images/pangasinan-capitol-building.webp",
    imageAlt:    "The neoclassical Pangasinan Provincial Capitol Building in Lingayen, surrounded by manicured grounds",
    visitInfo:   "Grounds open daily · Free admission",
    rating:      4,
    slug:        "pangasinan-capitol",
    mapsUrl:     "https://www.google.com/maps/search/?api=1&query=Pangasinan+Provincial+Capitol%2C+Lingayen%2C+Pangasinan",
  },
  {
    id:          "2",
    name:        "Banáan Pangasinan Provincial Museum (Casa Real)",
    location:    "Lingayen, Pangasinan",
    category:    "Cultural",
    description:
      "Housed in the historic Casa Real, this cultural museum acts as a \"doorway to the past\" " +
      "of Pangasinan. Its 11 galleries showcase the province's history, indigenous language, " +
      "arts, and heritage — an essential stop for understanding the rich Pangasinan identity.",
    imageUrl:    "/images/banaan-provincial-museum.webp",
    imageAlt:    "The historic Casa Real building housing the Banáan Pangasinan Provincial Museum in Lingayen",
    visitInfo:   "Mon–Fri, 9:00–16:00 · ₱200 (adults) · ₱100 (students)",
    rating:      4,
    slug:        "banaan-museum",
    mapsUrl:     "https://www.google.com/maps/search/?api=1&query=Casa+Real+Pangasinan+Provincial+Museum%2C+Lingayen%2C+Pangasinan",
  },
  {
    id:          "3",
    name:        "Epiphany of Our Lord Co-Cathedral (Lingayen Church)",
    location:    "Lingayen, Pangasinan",
    category:    "Historical",
    description:
      "One of the oldest churches in Pangasinan, founded in 1587, featuring a distinctive " +
      "Chinese-influenced bell tower and 1800s-era bells. This co-cathedral is the spiritual " +
      "heart of Lingayen and a living piece of Philippine colonial religious heritage.",
    imageUrl:    "/images/epiphany-cathedral-lingayen.webp",
    imageAlt:    "The historic Epiphany of Our Lord Co-Cathedral in Lingayen with its Chinese-influenced bell tower",
    visitInfo:   "Open daily · Free entrance",
    rating:      4,
    slug:        "lingayen-church",
    mapsUrl:     "https://www.google.com/maps/search/?api=1&query=Epiphany+of+Our+Lord+Parish%2C+Lingayen%2C+Pangasinan",
  },

  // ── Manaoag ────────────────────────────────────────────────────────────────
  {
    id:          "4",
    name:        "Minor Basilica of Our Lady of the Rosary of Manaoag",
    location:    "Manaoag, Pangasinan",
    category:    "Cultural",
    description:
      "A major pilgrimage destination raised to minor basilica status in 2015, famed for the " +
      "miraculous image of Our Lady of Manaoag. An on-site museum displays centuries of " +
      "religious memorabilia and Marian artifacts, drawing devotees from across the Philippines.",
    imageUrl:    "/images/manaoag-basilica.webp",
    imageAlt:    "The magnificent Minor Basilica of Our Lady of the Rosary of Manaoag surrounded by pilgrims",
    visitInfo:   "Open daily · Free entrance (donations welcome)",
    rating:      5,
    slug:        "manaoag-basilica",
    mapsUrl:     "https://www.google.com/maps/search/?api=1&query=Minor+Basilica+of+Our+Lady+of+the+Rosary+of+Manaoag%2C+Manaoag%2C+Pangasinan",
  },

  // ── Calasiao ───────────────────────────────────────────────────────────────
  {
    id:          "5",
    name:        "Saints Peter and Paul Parish Church",
    location:    "Calasiao, Pangasinan",
    category:    "Historical",
    description:
      "An 18th-century Baroque church declared a National Cultural Treasure by the NCCA — " +
      "the only such recognition in Pangasinan province. Its towering brick bell tower and " +
      "intricate colonial stone carvings stand as testaments to centuries of Filipino faith " +
      "and craftsmanship.",
    imageUrl:    "/images/saints-peter-paul-church.webp",
    imageAlt:    "The 18th-century Baroque Saints Peter and Paul Parish Church with its towering brick bell tower in Calasiao",
    visitInfo:   "Open daily · Free entrance",
    rating:      4,
    slug:        "calasiao-church",
    mapsUrl:     "https://www.google.com/maps/search/?api=1&query=Saints+Peter+and+Paul+Parish+Church%2C+Calasiao%2C+Pangasinan",
  },

  // ── San Carlos City ────────────────────────────────────────────────────────
  {
    id:          "6",
    name:        "Minor Basilica of Saint Dominic de Guzman",
    location:    "San Carlos City, Pangasinan",
    category:    "Historical",
    description:
      "The oldest parish in Pangasinan, established in 1587 and elevated to a Minor Basilica " +
      "in 2022. The church played a remarkable role in WWII history, reportedly spared from " +
      "heavy damage while the surrounding city bore the brunt of wartime destruction.",
    imageUrl:    "/images/saint-dominic-basilica.webp",
    imageAlt:    "The historic Minor Basilica of Saint Dominic de Guzman in San Carlos City, the oldest parish in Pangasinan",
    visitInfo:   "Open daily · Free entrance",
    rating:      4,
    slug:        "san-carlos-church",
    mapsUrl:     "https://www.google.com/maps/search/?api=1&query=San+Carlos+Church%2C+San+Carlos+City%2C+Pangasinan",
  },

  // ── Dagupan City ───────────────────────────────────────────────────────────
  {
    id:          "7",
    name:        "Santuario de San Juan Evangelista (Old Dagupan Cathedral)",
    location:    "Dagupan City, Pangasinan",
    category:    "Historical",
    description:
      "A historic Roman Catholic church dating to the early 1600s and the former cathedral " +
      "of the Lingayen-Dagupan Archdiocese. Also known as St. John's Cathedral, it has " +
      "been rebuilt multiple times — most notably after the devastating 1892 earthquake — " +
      "yet remains a proud symbol of Dagupan's colonial past.",
    imageUrl:    "/images/santuario-san-juan-evangelista.webp",
    imageAlt:    "The historic Santuario de San Juan Evangelista, the Old Dagupan Cathedral, at the corner of Zamora and Jovellanos Streets",
    visitInfo:   "Open daily · Free entrance",
    rating:      3,
    slug:        "dagupan-cathedral",
    mapsUrl:     "https://www.google.com/maps/search/?api=1&query=Metropolitan+Cathedral+of+St.+John+the+Evangelist%2C+Dagupan+City%2C+Pangasinan",
  },

  // ── Alaminos City ──────────────────────────────────────────────────────────
  {
    id:          "8",
    name:        "Hundred Islands National Park",
    location:    "Alaminos City, Pangasinan",
    category:    "Coastal",
    description:
      "The Philippines' first national park, comprising 124 islands in Lingayen Gulf — a " +
      "top eco-tourism destination famed for island-hopping, pristine beaches, and panoramic " +
      "views. Home to diverse marine life, snorkeling reefs, and dramatic lagoons, it remains " +
      "Pangasinan's crown jewel of natural heritage.",
    imageUrl:    "/images/hundred-islands.webp",
    imageAlt:    "Aerial view of the emerald-green islets of Hundred Islands National Park in Alaminos, Pangasinan, surrounded by turquoise waters of Lingayen Gulf",
    visitInfo:   "Open daily · ~₱200 day-tour admission (incl. fees)",
    rating:      5,
    slug:        "hundred-islands",
    mapsUrl:     "https://www.google.com/maps/search/?api=1&query=Hundred+Islands+National+Park%2C+Lucap%2C+Alaminos+City%2C+Pangasinan",
  },
  {
    id:          "9",
    name:        "Saint Joseph Cathedral Parish",
    location:    "Alaminos City, Pangasinan",
    category:    "Historical",
    description:
      "The city's cathedral whose origins trace back to an 18th-century church, rebuilt " +
      "between 1837–1849 after a devastating fire. Today it serves as an active diocesan " +
      "seat and a quiet place of worship within walking distance of the bustling Lucap Wharf.",
    imageUrl:    "/images/saint-joseph-cathedral.webp",
    imageAlt:    "Saint Joseph Cathedral Parish in Alaminos City, the diocesan seat with colonial origins",
    visitInfo:   "Open daily · Free entrance",
    rating:      3,
    slug:        "alaminos-cathedral",
    mapsUrl:     "https://www.google.com/maps/search/?api=1&query=Saint+Joseph+Cathedral%2C+Alaminos+City%2C+Pangasinan",
  },

  // ── Bolinao ────────────────────────────────────────────────────────────────
  {
    id:          "10",
    name:        "Cape Bolinao Lighthouse",
    location:    "Bolinao, Pangasinan",
    category:    "Historical",
    description:
      "Standing since 1905, the Cape Bolinao Lighthouse rises 351 feet above sea level at " +
      "Punta Piedra Point, offering a breathtaking 360° panorama of the West Philippine Sea. " +
      "One of the oldest and most historically significant lighthouses in the Philippines, " +
      "it guided seafarers for generations and shaped Pangasinan's coastal identity.",
    imageUrl:    "/images/bolinao-lighthouse.webp",
    imageAlt:    "The white-painted Cape Bolinao Lighthouse from 1905 standing on a rocky cliff overlooking the South China Sea in Bolinao, Pangasinan",
    visitInfo:   "Grounds open daily · Free entrance · Best at sunrise",
    rating:      4,
    slug:        "bolinao-lighthouse",
    mapsUrl:     "https://www.google.com/maps/search/?api=1&query=Cape+Bolinao+Lighthouse%2C+Bolinao%2C+Pangasinan",
  },

  // ── Santa Barbara ──────────────────────────────────────────────────────────
  {
    id:          "11",
    name:        "Holy Family Parish Church",
    location:    "Santa Barbara, Pangasinan",
    category:    "Historical",
    description:
      "A Spanish colonial church built in 1716, this heritage landmark is a beloved site " +
      "of Holy Week devotions and year-round pilgrimage. Its thick stone walls and centuries " +
      "of history make it one of the most atmospheric colonial churches in the province.",
    imageUrl:    "/images/holy-family-parish-church.webp",
    imageAlt:    "The Spanish colonial Holy Family Parish Church built in 1716 in Santa Barbara, Pangasinan",
    visitInfo:   "Open daily · Free entrance",
    rating:      4,
    slug:        "holy-family-church",
    mapsUrl:     "https://www.google.com/maps/search/?api=1&query=Holy+Family+Parish+Church%2C+Santa+Barbara%2C+Pangasinan",
  },


  // ── Lingayen (additional) ──────────────────────────────────────────────────
  {
    id:          "14",
    name:        "Lingayen Beach & Baywalk",
    location:    "Lingayen, Pangasinan",
    category:    "Coastal",
    description:
      "A scenic public coastline along the Lingayen Gulf, perfect for leisurely walks and " +
      "stunning sunsets. The baywalk promenade offers sweeping views of the gulf and is a " +
      "favourite local gathering spot for families, joggers, and visitors alike.",
    imageUrl:    "/images/lingayen-beach-baywalk.webp",
    imageAlt:    "Scenic Lingayen Beach and Baywalk along the Lingayen Gulf in Pangasinan",
    visitInfo:   "Open daily · Free",
    rating:      4,
    slug:        "lingayen-beach",
    mapsUrl:     "https://www.google.com/maps/search/?api=1&query=Lingayen+Beach+and+Baywalk%2C+Lingayen%2C+Pangasinan",
  },
  {
    id:          "15",
    name:        "Lingayen Gulf WWII Landing Site",
    location:    "Lingayen, Pangasinan",
    category:    "Historical",
    description:
      "The historic stretch of Lingayen Gulf where Allied forces landed in January 1945 during " +
      "the liberation of the Philippines — one of the largest amphibious operations of the " +
      "Pacific War. A defining chapter in Philippine and World War II history now marked along " +
      "the coastline for visitors to reflect upon.",
    imageUrl:    "/images/lingayen-gulf-wwii-landing.webp",
    imageAlt:    "Historical marker commemorating the WWII Allied landing at Lingayen Gulf, Pangasinan",
    visitInfo:   "Open area · Free",
    rating:      3,
    slug:        "lingayen-landing-site",
    mapsUrl:     "https://www.google.com/maps/search/?api=1&query=Lingayen+Landing+Site%2C+Lingayen%2C+Pangasinan",
  },

  // ── Calasiao (additional) ──────────────────────────────────────────────────
  {
    id:          "16",
    name:        "Puto Calasiao",
    location:    "Calasiao, Pangasinan",
    category:    "Cultural",
    description:
      "Calasiao is the undisputed puto capital of the Philippines, famed for its white, " +
      "bite-sized steamed rice cakes crafted from a generations-old recipe. A beloved culinary " +
      "tradition and living cultural icon, Puto Calasiao is enjoyed across the archipelago and " +
      "embodies the town's proud heritage of artisanal food craft.",
    imageUrl:    "/images/puto-calasiao.webp",
    imageAlt:    "Freshly steamed Puto Calasiao, the iconic white rice cake of Calasiao, Pangasinan",
    visitInfo:   "Available from local vendors daily",
    rating:      4,
    slug:        "puto-calasiao",
    mapsUrl:     "https://www.google.com/maps/search/?api=1&query=Puto+Calasiao%2C+Calasiao%2C+Pangasinan",
  },

  // ── Dagupan City (additional) ──────────────────────────────────────────────
  {
    id:          "17",
    name:        "Tondaligan Blue Beach",
    location:    "Dagupan City, Pangasinan",
    category:    "Coastal",
    description:
      "A popular public beach along Dagupan's coastline, celebrated for its striking " +
      "blue-green waters and family-friendly atmosphere. Tondaligan is a go-to recreational " +
      "destination for locals and a symbol of Dagupan's vibrant seaside identity.",
    imageUrl:    "/images/tondaligan-blue-beach.webp",
    imageAlt:    "Tondaligan Blue Beach with calm blue-green waters in Dagupan City, Pangasinan",
    visitInfo:   "Open daily · Free",
    rating:      4,
    slug:        "tondaligan-beach",
    mapsUrl:     "https://www.google.com/maps/search/?api=1&query=Tondaligan+Beach%2C+Dagupan+City%2C+Pangasinan",
  },

  // ── Bolinao (additional) ───────────────────────────────────────────────────
  {
    id:          "18",
    name:        "Patar Beach",
    location:    "Patar, Bolinao, Pangasinan",
    category:    "Coastal",
    description:
      "One of Pangasinan's most celebrated beaches, Patar is renowned for its fine white " +
      "sand, sweeping coastal views, and mesmerising sunsets over the West Philippine Sea. " +
      "A premier destination for relaxation, swimming, and water sports.",
    imageUrl:    "/images/patar-beach.webp",
    imageAlt:    "Vast white sand beach at Patar, Bolinao, Pangasinan with the West Philippine Sea at sunset",
    visitInfo:   "Open daily · Fees vary by resort/area",
    rating:      5,
    slug:        "patar-beach",
    mapsUrl:     "https://www.google.com/maps/search/?api=1&query=Patar+Beach%2C+Bolinao%2C+Pangasinan",
  },
  {
    id:          "19",
    name:        "Patar Rock Formation",
    location:    "Patar, Bolinao, Pangasinan",
    category:    "Natural",
    description:
      "A dramatic coastal landscape of limestone formations sculpted by centuries of wave " +
      "action and weathering. Located along Patar Beach, these geological wonders create a " +
      "striking contrast against the turquoise waters of the West Philippine Sea.",
    imageUrl:    "/images/patar-rock-formation.webp",
    imageAlt:    "Dramatic limestone rock formations along the coastline of Patar, Bolinao, Pangasinan",
    visitInfo:   "Open daily · Free / verify locally",
    rating:      4,
    slug:        "patar-rock-formation",
    mapsUrl:     "https://www.google.com/maps/search/?api=1&query=Patar+Rock+Formation%2C+Bolinao%2C+Pangasinan",
  },
  {
    id:          "20",
    name:        "Bolinao Falls",
    location:    "Bolinao, Pangasinan",
    category:    "Natural",
    description:
      "A refreshing natural waterfall tucked in verdant greenery, offering cool plunge pools " +
      "and lush surroundings. Bolinao Falls is a favourite inland adventure destination for " +
      "those exploring beyond Bolinao's famous beaches.",
    imageUrl:    "/images/bolinao-falls.webp",
    imageAlt:    "Natural waterfall with freshwater pools surrounded by tropical vegetation in Bolinao, Pangasinan",
    visitInfo:   "Open daily · Local entrance/guide fees apply",
    rating:      4,
    slug:        "bolinao-falls",
    mapsUrl:     "https://www.google.com/maps/search/?api=1&query=Bolinao+Falls%2C+Bolinao%2C+Pangasinan",
  },
  {
    id:          "21",
    name:        "Enchanted Cave",
    location:    "Patar, Bolinao, Pangasinan",
    category:    "Natural",
    description:
      "A remarkable natural limestone cave containing a crystal-clear freshwater pool of " +
      "unknown depth. Visitors can swim inside amid dramatic stalactites and rock formations, " +
      "creating a magical underground experience unique to Bolinao.",
    imageUrl:    "/images/enchanted-cave.webp",
    imageAlt:    "Crystal-clear freshwater pool inside the Enchanted Cave natural limestone cave in Patar, Bolinao, Pangasinan",
    visitInfo:   "Open daily, 8:00–17:00 · Paid admission (verify current rate)",
    rating:      5,
    slug:        "enchanted-cave",
    mapsUrl:     "https://www.google.com/maps/search/?api=1&query=Enchanted+Cave%2C+Patar%2C+Bolinao%2C+Pangasinan",
  },

  // ── Bayambang ──────────────────────────────────────────────────────────────

  {
    id:          "23",
    name:        "Bayambang Giant Bamboo Sculpture",
    location:    "Bayambang, Pangasinan",
    category:    "Cultural",
    description:
      "A towering landmark crafted entirely from bamboo, celebrating the artistry and " +
      "sustainable heritage of Bayambang. This striking cultural installation embodies the " +
      "town's identity as a bamboo craft community and a hub of local creativity.",
    imageUrl:    "/images/bayambang-giant-bamboo.webp",
    imageAlt:    "Giant bamboo sculpture landmark in Bayambang, Pangasinan celebrating local artistry",
    visitInfo:   "Accessible during daylight hours · Free",
    rating:      3,
    slug:        "bayambang-bamboo",
    mapsUrl:     "https://www.google.com/maps/search/?api=1&query=Giant+Bamboo+Sculpture%2C+Bayambang%2C+Pangasinan",
  },

  // ── Alaminos City (additional) ─────────────────────────────────────────────
  {
    id:          "24",
    name:        "Bued Mangrove Park",
    location:    "Brgy. Bued, Alaminos City, Pangasinan",
    category:    "Natural",
    description:
      "An eco-tourism sanctuary protecting a rich mangrove ecosystem along the Alaminos " +
      "coastline. The park supports diverse marine biodiversity and provides boardwalk nature " +
      "trails, making it an ideal destination for eco-tourism and environmental learning.",
    imageUrl:    "/images/bued-mangrove-park.webp",
    imageAlt:    "Boardwalk trail through the mangrove ecosystem of Bued Mangrove Park in Alaminos City, Pangasinan",
    visitInfo:   "Hours/fees vary · Contact local office",
    rating:      3,
    slug:        "bued-mangrove",
    mapsUrl:     "https://www.google.com/maps/search/?api=1&query=Bued+Mangrove+Park%2C+Alaminos+City%2C+Pangasinan",
  },
  {
    id:          "25",
    name:        "Lucap Park",
    location:    "Brgy. Lucap, Alaminos City, Pangasinan",
    category:    "Coastal",
    description:
      "A lively public park and recreational gateway serving as the main embarkation point " +
      "for island-hopping tours to Hundred Islands National Park. Lucap's wharf, resorts, " +
      "and seafront park make it the vibrant hub of Alaminos's eco-tourism scene.",
    imageUrl:    "/images/lucap-park.webp",
    imageAlt:    "Lucap Park near Hundred Islands National Park in Alaminos City, Pangasinan with boats docked at the wharf",
    visitInfo:   "Open daily · Free public access",
    rating:      4,
    slug:        "lucap-park",
    mapsUrl:     "https://www.google.com/maps/search/?api=1&query=Lucap+Wharf%2C+Alaminos+City%2C+Pangasinan",
  },

  // ── Balungao (original) ────────────────────────────────────────────────────
  {
    id:          "26",
    name:        "Balungao Hot Spring",
    location:    "Balungao, Pangasinan",
    category:    "Natural",
    description:
      "Nestled in the rolling foothills of the Caraballo Mountains, Balungao Hot Spring is " +
      "a natural thermal wonder with mineral-rich waters said to have therapeutic properties. " +
      "The peaceful surroundings, lush greenery, and bubbling springs make it a beloved " +
      "wellness retreat for both locals and eco-tourists seeking natural healing.",
    imageUrl:    "/images/balungao-hotspring.webp",
    imageAlt:    "Natural thermal hot spring surrounded by lush tropical vegetation in Balungao, Pangasinan, with steam rising from the mineral-rich water",
    visitInfo:   "Open daily · ₱50 per person · Facilities available",
    rating:      4,
    slug:        "balungao-hot-spring",
    mapsUrl:     "https://maps.app.goo.gl/Aby7FHvgcorzFuW26",
  },
];

export default HERITAGE_SITES;
