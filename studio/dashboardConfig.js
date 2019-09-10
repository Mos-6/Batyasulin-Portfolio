export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '5d774fd71abb9e1f4e42bcfb',
                  title: 'Sanity Studio',
                  name: 'sanity-batya-portfolio-studio',
                  apiId: 'faae0401-b051-4735-91ef-28d8b77f7220'
                },
                {
                  buildHookId: '5d774fd748398fc3d11892ab',
                  title: 'Portfolio Website',
                  name: 'sanity-batya-portfolio',
                  apiId: 'bf57d6c7-f091-4e89-bffe-af2db0153172'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Mos-6/sanity-batya-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-batya-portfolio.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
