import React from 'react';
import styled from 'styled-components';
import AccordionItem from './AccordionItem';

export default props => {
  const [openItem, setOpenItem] = React.useState(null);
  return (
    <Accordion>
      {props.items.map((item, index) => {
        return (
          <AccordionItem
            belief={item}
            key={item.contentful_id}
            isOpen={openItem === index ? true : false}
            click={setOpenItem}
            index={index}
          />
        );
      })}
    </Accordion>
  );
};

const Accordion = styled.div`
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-gap: 1rem;
`;
