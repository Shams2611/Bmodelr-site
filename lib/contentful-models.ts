// Contentful Models for the BModlr + Vida site

// Hero Model
export interface HeroModel {
  headline: string
  subText: string
  ctaText: string
  ctaLink: string
  backgroundImage: {
    url: string
    alt: string
  }
}

// Section Block Model
export interface SectionBlockModel {
  title: string
  introText: string
  bulletList: string[]
}

// Project Tile Model
export interface ProjectTileModel {
  icon: string
  title: string
  description: string
  link: string
}

// Contact Model
export interface ContactModel {
  email: string
  formEmbedCode?: string
}

// Example of how to use these models with Contentful
/*
import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export async function getHeroContent() {
  const entries = await client.getEntries<HeroModel>({
    content_type: 'hero',
    limit: 1,
  });
  
  return entries.items[0].fields;
}

export async function getSectionBlocks() {
  const entries = await client.getEntries<SectionBlockModel>({
    content_type: 'sectionBlock',
    order: 'sys.createdAt',
  });
  
  return entries.items.map(item => item.fields);
}

export async function getProjectTiles() {
  const entries = await client.getEntries<ProjectTileModel>({
    content_type: 'projectTile',
    order: 'sys.createdAt',
  });
  
  return entries.items.map(item => item.fields);
}

export async function getContactInfo() {
  const entries = await client.getEntries<ContactModel>({
    content_type: 'contact',
    limit: 1,
  });
  
  return entries.items[0].fields;
}
*/
