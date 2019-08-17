import React from 'react';

const MessageTemplate = () => {
  return <div>hello from the message template</div>;
};

export default MessageTemplate;

// `
//       {
//         allSeries: allContentfulMessageSeries {
//           edges {
//             series: node {
//               title: seriesTitle
//               start: seriesStartDate
//               end: seriesEndDate
//               length: seriesLength
//               image: seriesGraphic {
//                 fluid {
//                   ...GatsbyContentfulFluid
//                 }
//               }
//               description: seriesDescription {
//                 text: seriesDescription
//               }
//               message {
//                 title: messageTitle
//                 date: messageDate
//                 image: messagePhoto {
//                   fluid {
//                     ...GatsbyContentfulFluid
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     `
