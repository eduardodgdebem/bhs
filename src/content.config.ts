import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const team = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdoc}', base: './src/content/team' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    experience: z.string().optional(),
    photo: z.string().optional(),
  }),
});

const services = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdoc}', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    image: z.string().optional(),
  }),
});

const units = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdoc}', base: './src/content/units' }),
  schema: z.object({
    city: z.string(),
    state: z.string().optional(),
    country: z.string().optional(),
    label: z.string().optional(),
    phone: z.string().optional(),
    image: z.string().optional(),
  }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdoc}', base: './src/content/testimonials' }),
  schema: z.object({
    clientName: z.string(),
    occasion: z.string().optional(),
  }),
});

export const collections = { team, services, units, testimonials };
