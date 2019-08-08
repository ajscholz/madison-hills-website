import React from 'react';
import styled from 'styled-components';

import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const platforms = {
  facebook: { color: '#3b5999', icon: FaFacebookF },
  twitter: { color: '#55acee', icon: FaTwitter },
  instagram: { color: '#e4405f', icon: FaInstagram },
};

export default props => {
  const accounts = Object.entries(props.accounts);

  console.log(accounts);

  return (
    <SocialLinks size={accounts.length}>
      {accounts.map(account => {
        if (account[1] === null) return null;
        return <SocialButton account={account} key={account[0]} />;
      })}
    </SocialLinks>
  );
};

const SocialLinks = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1.5rem;
  justify-items: center;
  position: absolute;
  top: calc(98.25px + 40vh - 19.19px);
  transform: translateX(-50%);
  left: 50%;
  @media (min-width: 660px) {
    top: calc(136.05px + 40vh - 27.59px);
    grid-gap: 2.5rem;
  }
`;

const SocialButton = props => (
  <SingleButton background={platforms[props.account[0]].color}>
    <a
      href={`https://www.${props.account[0]}.com/${props.account[1]}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit our ${props.account[0]} page`}
    >
      <Icon as={platforms[props.account[0]].icon} />
    </a>
  </SingleButton>
);

const SingleButton = styled.button`
  padding: 0rem;
  background: ${props => props.background};
  border: 0;
  border-radius: 50%;
  outline: 0;
  color: white;
  transition: var(--mainTransition);
  @media (min-width: 660px) {
    padding: 1rem;
  }
  &:hover {
    transform: scale(1.15);
  }
`;

const Icon = styled.svg`
  display: block;
  font-size: 1rem;
  @media (min-width: 660px) {
    font-size: 1.5rem;
  }
`;
