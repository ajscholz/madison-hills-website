// parses the rich text description to keep formatting

import React from 'react';

const ContentfulRichText = ({ content }) => {
  const paragraphArray = content.content.map((paragraph, index) => {
    return (
      <p key={index} style={{ fontWeight: '200' }}>
        {paragraph.content.map((text, index) => {
          // if there are no marks (see below) give me the text
          // 'marks' is what gives styling from contentful
          if (text.marks.length === 0) {
            return text.value;
          } else {
            // create array of styles
            const styles = text.marks.map(mark => mark.type);
            return (
              <span
                key={index}
                style={{
                  fontWeight: styles.includes('bold') && 'bold',
                  fontStyle: styles.includes('italic') && 'italic',
                }}
              >
                {text.value}
              </span>
            );
          }
        })}
      </p>
    );
  });

  return <>{paragraphArray.map(paragraph => paragraph)}</>;
};

export default ContentfulRichText;
