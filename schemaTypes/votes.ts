import { defineField, defineType } from 'sanity'
import AuthorSelect from '../src/components/AuthorSelect'


export default defineType({
    name: 'votes',
    title: 'Votes',
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
            name: 'type',
            title: 'Type',
            type: 'string',
            options: {
                list: [
                    { title: 'up', value: 'up' },
                    { title: 'down', value: 'down' },
                ],
            },
            validation: (Rule) => Rule.required().error('Title is required!')
        })
    ]
})