export const themes = [
  // Individual Themes for Books/Texts
  {
    id: 1,
    title: "Resilience in The Kingdom of This World",
    description: "Exploring resilience in Ti Noel's journey amidst revolution.",
    fullDescription: "In Alejo Carpentier's *The Kingdom of This World*, resilience is depicted through Ti Noel's enduring spirit during the struggles of Haitian independence.",
    quotes: [
      "'What is the history of Latin America but the chronicle of the marvelous real?'"
    ],
    type: "book",
    author: "Alejo Carpentier",
    image: "/images/kingdom.jpg?height=200&width=150"
  },
  {
    id: 2,
    title: "Freedom in The Infamous Rosalie",
    description: "The fight for freedom and the costs of resistance.",
    fullDescription: "Evelyn Trouillot's *The Infamous Rosalie* portrays the harrowing journey of enslaved individuals and their fight for freedom, highlighting resilience against oppression.",
    quotes: [
      "'Freedom is not given, it is taken.'"
    ],
    type: "book",
    author: "Evelyn Trouillot",
    image: "./images/infamous.jpeg?height=200&width=150"
  },
  {
    id: 3,
    title: "Identity in The Moor's Account",
    description: "The reclamation of narrative and self-identity.",
    fullDescription: "Laila Lalami's *The Moor's Account* tells the story of Mustafa, who reclaims his identity and humanity through storytelling amidst colonial conquest.",
    quotes: [
      "'I am nothing if not a storyteller.'"
    ],
    type: "book",
    author: "Laila Lalami",
    image: "/images/moors.jpg?height=200&width=150"
  },
  {
    id: 4,
    title: "Belonging in Geographies of Home",
    description: "Finding home amidst displacement and cultural identity.",
    fullDescription: "Loida Maritza Pérez's *Geographies of Home* explores the complexities of belonging, identity, and cultural heritage within the diaspora.",
    quotes: [
      "'Home is the place where our story begins.'"
    ],
    type: "book",
    author: "Loida Maritza Pérez",
    image: "/images/geo.jpg?height=200&width=150"
  },
  // Overarching Themes
  {
    id: 5,
    title: "Resilience",
    description: "The strength and perseverance of Afro-Latin communities.",
    fullDescription: "Across Afro-Latin literature, resilience emerges as a core theme, showcasing the ability to overcome adversity and preserve cultural identity.",
    relatedWorks: [
      "The Kingdom of This World",
      "The Infamous Rosalie"
    ],
    type: "overall"
  },
  {
    id: 6,
    title: "Identity",
    description: "Exploring the intersections of race, heritage, and personal history.",
    fullDescription: "The theme of identity is central to Afro-Latin narratives, as characters navigate their sense of self amidst cultural and historical complexity.",
    relatedWorks: [
      "The Moor's Account",
      "Geographies of Home"
    ],
    type: "overall"
  },
  {
    id: 7,
    title: "Spirituality",
    description: "Blending cultural and religious practices for resilience and identity.",
    fullDescription: "Spirituality serves as both a connection to heritage and a source of strength across Afro-Latin traditions.",
    relatedWorks: [
      "The Kingdom of This World",
      "Geographies of Home"
    ],
    type: "overall"
  }
];

