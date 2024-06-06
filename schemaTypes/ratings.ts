import { defineField, defineType } from 'sanity'


export default defineType({
    name: 'ratings',
    title: 'Ratings',
    type: 'document',
    fields: [
        defineField({
            name: 'user_id',
            title: 'User ID',
            type: 'string',
            validation: (Rule) => Rule.required().error('User ID is required!')
        }),
        defineField({
            name: 'content_id',
            title: 'Content ID',
            type: 'string',
            validation: (Rule) => Rule.required().error('Content ID is required!')
        }),
        defineField({
            name: 'rating',
            title: 'Rating',
            type: 'string',
            validation: (Rule) => Rule.required().error('Rating is required!')
        }),
    ]
})