export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6100e0f002a5335ba9c5a692',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ptvxhfzm',
                  apiId: 'eaa94619-63b5-4276-a16b-7f6ce5586ce9'
                },
                {
                  buildHookId: '6100e0f09ab16954ae49f7dc',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-yh6tzevi',
                  apiId: '5aef1d7d-7dfa-48cb-b964-2f78af0e0b54'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/thanhpsc-95/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-yh6tzevi.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
