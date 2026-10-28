// All site copy and media lives here. Replace the placeholders with Jeshna's own
// text and images (import them from ./assets and drop them into the `image` fields).

export const site = {
  name: 'Jeshna',
  resumeUrl: '#',
  email: 'hello@example.com',
}

export const hero = {
  eyebrow: 'How I like to work',
  headline: ['A hard problem. A clear goal.', 'And the space to explore.'],
  // Rotating pills under the headline; the portrait card shows the active one.
  pills: [
    { label: 'Product Designer', icon: 'avatar' },
    { label: '4+ yrs', icon: 'laptop' },
    { label: 'B2C & B2B', icon: 'grid' },
  ],
  portrait: null, // e.g. import portrait from './assets/me.jpg'
}

export const filters = ['All', 'B2C', 'B2B', 'Side projects']

export const projects = [
  {
    category: 'B2C',
    tag: 'Product led growth',
    title: 'Project title goes here',
    description: 'One line on the outcome — what changed and by how much.',
    image: null,
    tint: '#ece5dd',
    href: '#',
  },
  {
    category: 'B2C',
    tag: 'Design initiative',
    title: 'Another project title',
    description: 'A short summary of the insight that led to the work.',
    image: null,
    tint: '#e3e4e1',
    href: '#',
  },
  {
    category: 'B2B',
    tag: 'Enterprise solution',
    title: 'A B2B case study',
    description: 'Who it helped and what they can now do that they couldn’t before.',
    image: null,
    tint: '#e6e2ec',
    href: '#',
  },
  {
    category: 'Side projects',
    tag: 'Personal build',
    title: 'Something built for fun',
    description: 'A tool or experiment, and why it exists.',
    image: null,
    tint: '#efe9dc',
    href: '#',
  },
]

export const archive = {
  title: 'UI archive',
  // Up to three images peek out of the folder.
  items: [null, null, null, null, null, null],
}

export const testimonials = [
  { quote: 'Placeholder testimonial — a sentence or two from someone you’ve worked with.', name: 'Colleague Name', role: 'Role, Company', avatar: null },
  { quote: 'Placeholder testimonial — what it was like to work together.', name: 'Colleague Name', role: 'Role, Company', avatar: null },
  { quote: 'Placeholder testimonial — a specific strength they noticed.', name: 'Colleague Name', role: 'Role, Company', avatar: null },
  { quote: 'Placeholder testimonial — the impact on the team or product.', name: 'Colleague Name', role: 'Role, Company', avatar: null },
  { quote: 'Placeholder testimonial — keep these short so the cards stay even.', name: 'Colleague Name', role: 'Role, Company', avatar: null },
]

export const contact = [
  { lead: 'drop me a quick', strong: 'email', href: 'mailto:hello@example.com' },
  { lead: 'connect on', strong: 'LinkedIn', href: '#' },
  { lead: 'see what I post on', strong: 'X', href: '#' },
  { lead: 'read my notes on', strong: 'Medium', href: '#' },
]
