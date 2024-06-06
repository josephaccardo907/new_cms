import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy'
import { schemaTypes } from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Wellness',

  projectId: 't5jsvkpo',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), vercelDeployTool()],

  schema: {
    types: schemaTypes,
  },
})
