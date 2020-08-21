export const sectionHelper = (ids, sections) => {
  // get a list of all the section ids from graphql query
  const sectionIds = sections.map(section => section.id);

  // return the ordereed array (ordered based on what I sent in)
  return ids.map(id => ({ ...sections[sectionIds.findIndex(i => i === id)] }));
};

export const getImageFocus = (dimensions, focalPoint) => {
  const y = `${Math.trunc((focalPoint.y / dimensions.height) * 100)}%`;
  const x = `${Math.trunc((focalPoint.x / dimensions.width) * 100)}%`;
  const position = `${x} ${y}`;

  return position;
};
