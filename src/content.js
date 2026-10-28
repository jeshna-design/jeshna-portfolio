// All site copy and media lives here. Replace the placeholders with Jeshna's own
// text and images (import them from ./assets and drop them into the `image` fields).

import portrait from './assets/portrait.jpg'
import noberoPost1 from './assets/nobero-post-1.jpg'
import noberoPost2 from './assets/nobero-post-2.jpg'
import noberoPost3 from './assets/nobero-post-3.jpg'
import icedCoffee from './assets/iced-coffee.jpg'
import diaryCover from './assets/diary-cover.jpg'
import ragiPoster from './assets/ragi-poster.jpg'
import ragiJar from './assets/ragi-jar.jpg'
import logoDessert from './assets/logo-dessert.jpg'
import logoDessertFactory from './assets/logo-dessert-factory.jpg'
import logoBearista from './assets/logo-bearista.jpg'
import uecPoster from './assets/uec-poster.jpg'
import typographyPoster from './assets/typography-poster.jpg'
import behindTheScenes from './assets/behind-the-scenes.jpg'

export const site = {
  name: 'Jeshna',
  resumeUrl: '#',
  email: 'jeshnasuja.design@gmail.com',
  linkedin: 'https://www.linkedin.com/in/jeshna-rj-06a569278',
  medium: 'https://medium.com/@jeshnasuja.design',
}

export const hero = {
  eyebrow: 'How I like to work',
  headline: ['A hard problem. A clear goal.', 'And the space to explore.'],
  // Rotating pills under the headline; the portrait card shows the active one.
  pills: [
    { label: 'UX/UI Designer', icon: 'avatar' },
    { label: 'Graphic Designer', icon: 'laptop' },
    { label: 'B2C & B2B', icon: 'grid' },
  ],
  portrait,
}

export const filters = ['All', 'Branding', 'Handwork', 'B2C', 'B2B', 'Side projects']

export const projects = [
  {
    category: 'Branding',
    tag: 'Instagram carousel',
    title: 'NOBERO Hoodie Collection',
    description: 'A miniature-storytelling Instagram carousel where tiny characters craft oversized hoodies.',
    image: noberoPost3,
    fit: 'contain',
    tint: '#6e1015',
    href: '#/work/nobero',
  },
  {
    category: 'Branding',
    tag: 'Poster',
    title: 'Iced Coffee: Cooler Days',
    description: 'A warm, coffee-inspired poster that puts the iced coffee front and centre.',
    image: icedCoffee,
    fit: 'contain',
    tint: '#3b2a20',
    href: '#/work/iced-coffee',
  },
  {
    category: 'Handwork',
    tag: 'Diary cover',
    title: 'Confidence and Insecurities',
    description: 'A hand-drawn diary cover that expresses two contrasting emotions through illustration and colour.',
    image: diaryCover,
    fit: 'contain',
    tint: '#e4ebe0',
    href: '#/work/diary-cover',
  },
  {
    category: 'Handwork',
    tag: 'Product advertising',
    title: 'Britannia Nutri Choice Ragi Biscuit',
    description: 'Hand-painted promotional visuals that make the ragi biscuit the main focus.',
    image: ragiJar,
    fit: 'contain',
    tint: '#4a3328',
    href: '#/work/ragi-biscuit',
  },
  {
    category: 'Branding',
    tag: 'Logo',
    title: 'Dessert-Inspired Brand',
    description: 'Playful and minimal dessert branding in soft pastels and simple shapes.',
    image: logoDessert,
    fit: 'plain',
    tint: '#ffffff',
    href: '#/work/dessert-logo',
  },
  {
    category: 'Branding',
    tag: 'Logo',
    title: 'Dessert Factory',
    description: 'Cute, expressive dessert branding built around a pastry character.',
    image: logoDessertFactory,
    fit: 'plain',
    tint: '#ffffff',
    href: '#/work/dessert-factory',
  },
  {
    category: 'Branding',
    tag: 'Logo',
    title: 'Jeshna’s Bear-ista',
    description: 'A character-based café identity built around a bear barista mascot.',
    image: logoBearista,
    fit: 'plain',
    tint: '#ffffff',
    href: '#/work/bearista',
  },
]

export const archive = {
  title: 'UI archive',
  // Up to three images peek out of the folder.
  items: [uecPoster, typographyPoster, behindTheScenes, icedCoffee],
}

export const testimonials = [
  { quote: 'Placeholder testimonial — a sentence or two from someone you’ve worked with.', name: 'Colleague Name', role: 'Role, Company', avatar: null },
  { quote: 'Placeholder testimonial — what it was like to work together.', name: 'Colleague Name', role: 'Role, Company', avatar: null },
  { quote: 'Placeholder testimonial — a specific strength they noticed.', name: 'Colleague Name', role: 'Role, Company', avatar: null },
  { quote: 'Placeholder testimonial — the impact on the team or product.', name: 'Colleague Name', role: 'Role, Company', avatar: null },
  { quote: 'Placeholder testimonial — keep these short so the cards stay even.', name: 'Colleague Name', role: 'Role, Company', avatar: null },
]

export const contact = [
  { lead: 'drop me a quick', strong: 'email', href: `mailto:${site.email}` },
  { lead: 'connect on', strong: 'LinkedIn', href: site.linkedin },
  { lead: 'read my notes on', strong: 'Medium', href: site.medium },
]

// Case study pages, opened from a project card via its `href` (#/work/<slug>).
export const caseStudies = {
  nobero: {
    eyebrow: 'Branding • Instagram carousel',
    title: 'NOBERO Hoodie Collection',
    intro:
      'A creative Instagram carousel that tells the story of a clothing brand through tiny characters working on oversized garments.',
    meta: [
      { label: 'Brand', value: 'NOBERO' },
      { label: 'Format', value: 'Instagram carousel' },
      { label: 'Tools', value: 'Adobe Photoshop' },
      { label: 'Type', value: 'Concept project' },
    ],
    tint: '#6e1015',
    posts: [
      {
        title: 'Post 1: Made While You Sleep',
        image: noberoPost1,
        text:
          'This post introduces the creative concept. The miniature workers interacting with oversized fabric create the illusion that the garment is being carefully crafted. The headline builds curiosity, while the supporting line reinforces the idea of attention to detail.',
      },
      {
        title: 'Post 2: Crafted by Little Hands',
        image: noberoPost2,
        text:
          'This post continues the storytelling by shifting the focus to a hoodie. The miniature characters appear to inspect and work around the garment, highlighting the craftsmanship concept. The oversized product photography maintains visual continuity with the first post.',
      },
      {
        title: 'Post 3: A Little Story in Every Stitch',
        image: noberoPost3,
        text: null, // shown in the carousel strip only; add a write-up to list it under the posts
      },
    ],
    sections: [
      {
        heading: 'Project overview',
        body: [
          'The objective of this project was to select an existing brand and create a creative Instagram carousel that communicates its identity through visual storytelling.',
          'I selected NOBERO, a casual and lifestyle clothing brand, and developed a concept around the idea of clothes being carefully crafted. Instead of using conventional product advertisements, I explored a miniature storytelling approach where tiny characters interact with oversized clothing.',
          'The aim was to make the posts visually interesting, memorable and engaging while communicating the brand’s product quality and comfort.',
        ],
      },
      {
        heading: 'Problem statement',
        body: [
          'Fashion brands frequently use conventional product photographs and promotional layouts to showcase their collections. Although these communicate product features, they may lack originality and fail to capture the audience’s attention in a crowded social media environment.',
          'The challenge was to create a distinctive Instagram carousel for NOBERO that communicates the idea of craftsmanship and comfort through an imaginative visual concept rather than relying on traditional product advertising.',
        ],
      },
      {
        heading: 'Concept and creative direction',
        body: [
          'My concept was “Made While You Sleep” and “Crafted by Little Hands.”',
          'I imagined tiny characters working on oversized clothing, almost as if they were responsible for creating and perfecting every detail of the garment.',
          'This creates a playful contrast between the miniature characters and the large clothing products, making the advertisement more imaginative and attention-grabbing.',
        ],
      },
    ],
    decisions: [
      { element: 'Deep red background', why: 'Creates a bold, premium contrast with the light-coloured clothing' },
      { element: 'Oversized clothing', why: 'Makes the product the main focal point' },
      { element: 'Miniature characters', why: 'Adds imagination, storytelling and visual interest' },
      { element: 'Ladders', why: 'Creates a sense of scale and interaction' },
      { element: 'Serif typography', why: 'Gives the campaign an elegant editorial feel' },
      { element: 'Dotted texture', why: 'Adds depth without distracting from the product' },
      { element: 'Short headlines', why: 'Makes the message easy to understand while scrolling' },
    ],
    solution: [
      'The final outcome is a creative Instagram carousel that uses surreal imagery, miniature characters and oversized product photography to communicate a brand message.',
      'Rather than presenting clothing in a conventional manner, I used visual storytelling to make the products more engaging and encourage viewers to swipe through the carousel.',
      'The consistent background, typography and visual style help connect the posts as part of one campaign.',
    ],
    skills: [
      'Creative advertising and campaign development',
      'Instagram carousel design',
      'Visual storytelling and conceptual thinking',
      'Image manipulation and compositing',
      'Typography and visual hierarchy',
      'Colour theory and layout design',
      'Adobe Photoshop',
    ],
    takeaway:
      'This project allowed me to move beyond conventional product advertising and explore how imagination and visual storytelling can transform an ordinary clothing photograph into an engaging brand campaign.',
  },
  'iced-coffee': {
    eyebrow: 'Branding • Poster',
    title: 'Iced Coffee: Cooler Days',
    intro: 'Made for your hustle. Sip the chill.',
    tint: '#3b2a20',
    posts: [{ title: 'Iced Coffee: Cooler Days', image: icedCoffee, text: null }],
    sections: [
      {
        heading: 'Design approach',
        body: [
          'I used a warm, coffee-inspired colour palette with a blurred café background to create a cosy atmosphere. The central product placement makes the iced coffee the main focus, while playful illustrations on the cup add personality. Bold typography and short phrases such as “Bold Brew” and “Smooth Chill” communicate the product experience.',
        ],
      },
    ],
  },
  'diary-cover': {
    eyebrow: 'Handwork • Diary cover',
    title: 'Confidence and Insecurities',
    intro: 'A hand-drawn diary cover that expresses confidence and insecurity through illustration and colour.',
    meta: [
      { label: 'Illustration', value: 'Hand-drawn' },
      { label: 'Colour', value: 'Colour symbolism' },
      { label: 'Forms', value: 'Organic' },
      { label: 'Type', value: 'Handwritten' },
    ],
    tint: '#e4ebe0',
    posts: [{ title: 'Diary cover: Confidence and Insecurities', image: diaryCover, aspect: '601 / 420', text: null }],
    sections: [
      {
        heading: 'Problem statement',
        body: [
          'Emotions such as confidence and insecurity can be difficult to express visually without relying entirely on words. The challenge was to create a diary cover that represents these contrasting feelings through illustration and colour.',
        ],
      },
      {
        heading: 'Concept and solution',
        body: [
          'I used two contrasting illustrations to represent different emotional experiences. Green symbolises growth, nature and transformation, while blue conveys introspection and emotional vulnerability. The handwritten text adds a personal, journal-like quality, making the cover feel expressive and intimate.',
        ],
      },
      {
        heading: 'Design approach',
        body: ['Hand-drawn illustration, colour symbolism, organic forms and handwritten typography.'],
      },
    ],
  },
  'ragi-biscuit': {
    eyebrow: 'Handwork • Product advertising',
    title: 'Britannia Nutri Choice Ragi Biscuit',
    intro: 'Hand-painted promotional visuals for a ragi biscuit, built around the product and an earthy colour palette.',
    meta: [
      { label: 'Illustration', value: 'Hand-painted' },
      { label: 'Textures', value: 'Simulated' },
      { label: 'Details', value: 'Packaging' },
      { label: 'Message', value: 'Promotional' },
    ],
    tint: '#4a3328',
    posts: [
      { title: 'Ragi Biscuit: the jar', image: ragiJar, text: null },
      { title: 'Ragi Biscuit: healthy or tasty', image: ragiPoster, text: null },
    ],
    sections: [
      {
        heading: 'Problem statement',
        body: [
          'Packaged biscuits need to communicate product identity and appeal quickly. The challenge was to create a distinctive promotional visual that highlights the product while making the advertisement feel engaging and memorable.',
        ],
      },
      {
        heading: 'Concept and solution',
        body: [
          'I illustrated a transparent jar filled with biscuits to make the product the main focal point. The lid, glass reflections, biscuit textures and product label help establish the appearance of a physical product.',
          'The earthy colour palette complements the ragi biscuit theme, while the discount message introduces a promotional element.',
        ],
      },
      {
        heading: 'Design approach',
        body: ['Hand-painted product illustration, simulated textures, packaging details and promotional communication.'],
      },
    ],
  },
  'dessert-logo': {
    eyebrow: 'Branding • Logo',
    title: 'Dessert-Inspired Brand',
    intro: 'Playful and minimal dessert branding.',
    tint: '#f6dede',
    posts: [{ title: 'Dessert-inspired logo', image: logoDessert, aspect: '324 / 243', width: 'min(560px, 100%)', text: null }],
    sections: [
      {
        heading: 'Problem statement',
        body: [
          'The challenge was to create a logo that communicates a dessert brand’s playful personality while remaining visually simple and memorable.',
        ],
      },
      {
        heading: 'Design approach',
        body: [
          'I used soft pastel colours, simple shapes and dessert-inspired elements to create a light, sweet and approachable visual identity. The minimal illustration keeps the logo friendly and easy to recognise.',
        ],
      },
      {
        heading: 'Solution',
        body: [
          'I used a minimal illustrated composition with soft pinks and organic shapes to create a welcoming and youthful identity.',
        ],
      },
    ],
  },
  'dessert-factory': {
    eyebrow: 'Branding • Logo',
    title: 'Dessert Factory',
    intro: 'Cute, expressive dessert branding.',
    tint: '#f3dfd2',
    posts: [{ title: 'Dessert Factory logo', image: logoDessertFactory, aspect: '294 / 198', width: 'min(560px, 100%)', text: null }],
    sections: [
      {
        heading: 'Problem statement',
        body: [
          'Dessert brands need an identity that feels inviting and stands out while communicating their product category.',
        ],
      },
      {
        heading: 'Design approach',
        body: [
          'I used a character-inspired pastry illustration as the main visual element. The warm brown and pink palette creates a sweet and appetising appearance, while the decorative script typography adds personality.',
        ],
      },
      {
        heading: 'Solution',
        body: [
          'I developed a character-based pastry illustration and paired it with decorative typography to create a fun and recognisable logo.',
        ],
      },
    ],
  },
  bearista: {
    eyebrow: 'Branding • Logo',
    title: 'Jeshna’s Bear-ista',
    intro: 'A character-based café identity.',
    tint: '#ead8c8',
    posts: [{ title: 'Jeshna’s Bear-ista logo', image: logoBearista, aspect: '1 / 1', width: 'min(441px, 100%)', text: null }],
    sections: [
      {
        heading: 'Problem statement',
        body: [
          'The objective was to create a café identity that feels different from conventional coffee shop logos and has a recognisable character.',
        ],
      },
      {
        heading: 'Design approach',
        body: [
          'I created a bear mascot holding a coffee cup, combining the idea of a bear with a barista to develop the name “Bear-ista”. The warm brown tones communicate comfort, while the oversized initials create a distinctive visual element.',
        ],
      },
      {
        heading: 'Solution',
        body: [
          'I used a bear mascot as the central identity, making the logo approachable, memorable and suitable for a youthful café brand.',
        ],
      },
    ],
  },
}
