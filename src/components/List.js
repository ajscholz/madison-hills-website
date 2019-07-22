import styled from "styled-components"

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 auto;
`

const ListItem = styled.li`
  font-size: 0.9rem;
  :not(:last-of-type) {
    margin-bottom: 0.25rem;
  }
`

export { List, ListItem }
