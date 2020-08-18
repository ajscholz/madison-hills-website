import styled from 'styled-components';

export default styled.div`
  height: auto;
  width: 100%;
  max-width: 400px;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto auto;
  border-radius: 4px;
  overflow: hidden;
  outline: none;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-left: 6px solid var(--primary);
  cursor: pointer;
  transition: var(--mainTransition);

  :hover,
  :focus {
    transform: scale(1.05);
    box-shadow: var(--shadow3);
  }

  & .card-header {
    height: 150px;
    width: 100%;
    background: var(--black);
    position: relative;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    /* transition: var(--mainTransition); */
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      /* transition: var(--mainTransition); */
    }
  }

  & .card-body {
    width: 100%;
    padding: 1.25rem;
    background: var(--white);
    color: var(--black);
    overflow: hidden;

    white-space: nowrap;
    h3 {
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .footer {
      font-size: 0.8rem;
      margin-bottom: 0;
      opacity: 0.6;
    }

    .metadata {
      display: flex;
      justify-content: space-between;

      h6 {
        margin: 0;
        text-transform: uppercase;
        color: gray;
        opacity: 0.6;
        font-weight: bold;
        letter-spacing: 0.5px;
        :first-of-type {
          margin-right: 1rem;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
    }
  }
`;
