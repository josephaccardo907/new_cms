import { defineField, defineType } from 'sanity'

interface Option {
    title: string;
    value: string;
}

export default defineType({
    name: 'comments',
    title: 'Comments',
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
            name: 'comment',
            title: 'Comment',
            type: 'text',
            validation: (Rule) => Rule.required().error('Comment is required!')
        }),
    ]
})