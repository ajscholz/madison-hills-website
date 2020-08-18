const path = require('path');

exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions;
  const typeDefs = [
    schema.buildObjectType({
      name: 'ContentfulMessage',
      fields: {
        year: {
          type: 'String',
          resolve: source => new Date(source.messageDate).getFullYear(),
        },
      },
      interfaces: ['Node'],
    }),
  ];
  createTypes(typeDefs);
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const seriesTemplate = path.resolve(`src/templates/SeriesTemplate.js`);
  const messageTemplate = path.resolve(`src/templates/MessageTemplate.js`);
  const blogTemplate = path.resolve(`src/templates/BlogTemplate.js`);

  const result = await graphql(
    `
      {
        allSeries: allContentfulMessageSeries {
          nodes {
            title: seriesTitle
            id: contentful_id
          }
        }
        allMessages: allContentfulMessage {
          nodes {
            title: messageTitle
            id: contentful_id
            series: messageSeries {
              id: contentful_id
            }
          }
        }
        allBlogPosts: allContentfulBlogPost {
          nodes {
            id: contentful_id
            slug
          }
        }
      }
    `
  );

  if (result.errors) {
    reporter.panicOnBuild(
      `Error while running GraphQL query from gatsby-node.`
    );
    return;
  }

  result.data.allSeries.nodes.forEach(series => {
    createPage({
      path: `messages/series/${series.title
        .toLowerCase()
        .replace(/ /g, '-')
        .replace(/[?!,/^*%$@#()'"`|]/g, '')}`,
      component: seriesTemplate,
      context: {
        id: series.id,
      },
    });
  });

  result.data.allMessages.nodes.forEach(message => {
    createPage({
      path: `messages/${message.title
        .toLowerCase()
        .replace(/ /g, '-')
        .replace(/[?!,/^*%$@#()'"`|]/g, '')}`,
      component: messageTemplate,
      context: {
        id: message.id,
        seriesId: message.series.id,
      },
    });
  });

  result.data.allBlogPosts.nodes.forEach(blog => {
    createPage({
      path: `blog/${blog.slug}`,
      component: blogTemplate,
      context: { id: blog.id },
    });
  });
};

// slug: `${message.title.toLowerCase().replace(/ /g, '-')}`,

// CREATES PAGE CONTEXT FOR MULTIPLE LAYOUTS
exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions;

  if (page.path.match(/party-people/)) {
    page.context.landing = true;
    createPage(page);
  }
};
