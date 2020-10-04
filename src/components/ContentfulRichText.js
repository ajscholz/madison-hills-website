// parses contentful rich text data to keep formatting

import React from 'react';
import styled from 'styled-components';

// ------- HELPER FUNCTION TO GET AN ARRAY OF <p>'S ------- //
export const contentfulRichTextIsolator = (content, className, style, rest) =>
  content.content.map((paragraph, index) => {
    return (
      <P
        key={index}
        className={className && className}
        style={{ ...style }}
        {...rest}
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
      </P>
    );
  });

// ------- COMPONENT USING HELPER FUNCTION TO RETURN <p>S AS JSX ------- //
const ContentfulRichText = ({ content, className, style, ...rest }) => (
  <>
    {contentfulRichTextIsolator(content, className, style, rest).map(
      paragraph => paragraph
    )}
  </>
);

export default ContentfulRichText;

const P = styled.p`
  text-align: ${props => (props.position === 'left' ? 'left' : 'center')};
`;
