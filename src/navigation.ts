// src/navigation.ts

import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Product',
      links: [
        { text: 'Features', href: getPermalink('/#features') },
        { text: 'How It Works', href: getPermalink('/#how-it-works') },
        { text: 'AI Auto-Reply', href: getPermalink('/#ai-replies') },
        { text: 'Supported Platforms', href: getPermalink('/#platforms') },
      ],
    },
    {
      text: 'Pricing',
      href: getPermalink('/pricing'),
    },
    {
      text: 'Use Cases',
      links: [
        { text: 'For Creators', href: getPermalink('/#for-creators') },
        { text: 'For Startups', href: getPermalink('/#for-startups') },
        { text: 'For Agencies', href: getPermalink('/#for-agencies') },
      ],
    },
    {
      text: 'Resources',
      links: [
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'FAQs', href: getPermalink('/faq') },
        { text: 'Help Center', href: getPermalink('/help') },
      ],
    },
    {
      text: 'Company',
      links: [
        { text: 'About Us', href: getPermalink('/about') },
        { text: 'Contact', href: getPermalink('/contact') },
        { text: 'Careers', href: getPermalink('/careers') },
      ],
    },
  ],
  actions: [
    {
      text: 'Join Waitlist',
      href: getPermalink('/#waitlist'),
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: getPermalink('/#features') },
        { text: 'How it Works', href: getPermalink('/#how-it-works') },
        { text: 'Pricing', href: getPermalink('/pricing') },
        { text: 'AI Reply System', href: getPermalink('/#ai-replies') },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Threads', href: '#' },
        { text: 'Twitter', href: '#' },
        { text: 'LinkedIn', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'FAQs', href: getPermalink('/faq') },
        { text: 'Help Center', href: getPermalink('/help') },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Contact', href: getPermalink('/contact') },
        { text: 'Careers', href: getPermalink('/careers') },
        { text: 'Privacy Policy', href: getPermalink('/privacy') },
        { text: 'Terms', href: getPermalink('/terms') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
    { text: 'Terms', href: getPermalink('/terms') },
  ],
  socialLinks: [
    { ariaLabel: 'X (Twitter)', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Threads', icon: 'tabler:brand-threads', href: '#' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/WebShivam/PostWing' },
  ],
  footNote: `
    <span class="font-semibold"> 🚀PostWing</span> © ${new Date().getFullYear()}. Built with ❤️ by WebShivam.
  `,
};
