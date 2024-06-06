import { defineField, defineType } from 'sanity'
import { fetchAdminData } from '../src/utils/fetchs';
import AsyncSelect from '../src/components/AsyncSelect';

export default defineType({
    name: 'posts',
    title: 'Posts',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required().error('Title is required!')
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: (Rule) => Rule.required().error('Description is required')
        }),
        defineField({
            name: 'type',
            title: 'Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Article', value: 'article' },
                    { title: 'Audio', value: 'audio' },
                    { title: 'Video', value: 'video' }
                ],
            },
            validation: (Rule) => Rule.required().error('Type is required')
        }),
        defineField({
            name: 'url',
            title: 'URL',
            type: 'url',
            validation: (Rule) => Rule.uri({
                scheme: ['http', 'https']
            }).error('URL is required')
        }),
        defineField({
            name: 'thumbnail',
            title: 'Thumbnail',
            type: 'string',
        }),
        defineField({
            name: 'targetAudience',
            title: 'TargetAudience',
            type: 'string',
            options: {
                list: [
                    { title: 'Teenager', value: 'teenager' },
                    { title: 'Parent', value: 'parent' }
                ]
            },
            validation: (Rule) => Rule.required().error('TargetAudience is required!')
        }),
        defineField({
            name: 'language',
            title: 'Language',
            type: 'string',
            initialValue: 'en',
        }),
        defineField({
            name: 'status',
            title: 'Status',
            type: 'string',
            options: {
                list: [
                    { title: 'draft', value: 'draft' },
                    { title: 'published', value: 'published' },
                    { title: 'archived', value: 'archived' }
                ]
            },
            initialValue: 'draft'
        }),
        defineField({
            name: 'featured',
            title: 'Featured',
            type: 'boolean',
            initialValue: false
        }),
        defineField({
            name: 'createdBy',
            title: 'createdBy',
            type: 'string',
            options: {
                list: [],
                url: 'http://localhost:3000/v1/users/getAdmins',
                formatResponse: (json: { id: string, name: string }[]) =>
                    json.map(({ id, name }) => ({
                        title: name,
                        value: id,
                    })),
            },
            components: {
                input: AsyncSelect
            }
        }),
        defineField({
            name: 'ageRestriction',
            title: 'AgeRestricition',
            type: 'string',
            options: {
                list: [
                    { title: 'none', value: 'none' },
                    { title: '13+', value: '13+' },
                    { title: '18+', value: '18+' }
                ]
            },
            initialValue: 'none'
        }),
        defineField({
            name: 'educationalUse',
            title: 'EducationalUse',
            type: 'boolean',
            initialValue: false
        }),
        defineField({
            name: 'commercialUse',
            title: 'CommercialUse',
            type: 'boolean',
            initialValue: false
        }),
        defineField({
            name: 'copyrightOwner',
            title: 'CopyrightOwner',
            type: 'string'
        })
    ]
})
