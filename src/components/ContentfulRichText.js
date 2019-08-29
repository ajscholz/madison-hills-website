// parses contentful rich text data to keep formatting

import React from 'react';

// ------- HELPER FUNCTION TO GET AN ARRAY OF <p>'S ------- //
export const contentfulRichTextIsolator = (content, className, style) =>
  content.content.map((paragraph, index) => {
    return (
      <p
        key={index}
        className={className && className}
        style={{ textAlign: 'center', ...style }}
      >
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

// ------- COMPONENT USING HELPER FUNCTION TO RETURN <p>S AS JSX ------- //
const ContentfulRichText = ({ content, className, style }) => (
  <>
    {contentfulRichTextIsolator(content, className, style).map(
      paragraph => paragraph
    )}
  </>
);

export default ContentfulRichText;
