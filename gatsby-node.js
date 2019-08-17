const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const seriesTemplate = path.resolve(`src/templates/SeriesTemplate.js`);
  const messageTemplate = path.resolve(`src/templates/MessageTemplate.js`);

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
        .replace(/[[:punct:]]/g, '')}`,
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
        .replace(/[[:punct:]]/g, '')}`,
      component: messageTemplate,
      context: {
        id: message.id,
      },
    });
  });
};

// slug: `${message.title.toLowerCase().replace(/ /g, '-')}`,
