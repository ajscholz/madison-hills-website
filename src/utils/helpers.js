export const sectionHelper = (ids, sections) => {
  // get a list of all the section ids from graphql query
  const sectionIds = sections.map(section => section.id);

  // return the ordereed array (ordered based on what I sent in)
  return ids.map(id => ({ ...sections[sectionIds.findIndex(i => i === id)] }));
};
