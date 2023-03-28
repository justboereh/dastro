import { defineCollection, z } from 'astro:content'
import { Site } from '../constants'

const docs = defineCollection({
    schema: z.object({
        title: z.string().default(Site.title),
        description: z.string().default(Site.description),
    }),
})

export const collections = { docs }
