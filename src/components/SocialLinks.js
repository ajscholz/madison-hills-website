import React from 'react';
import styled from 'styled-components';

import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const platforms = {
  facebook: { color: '#3b5999', icon: FaFacebookF },
  twitter: { color: '#55acee', icon: FaTwitter },
  instagram: { color: '#e4405f', icon: FaInstagram },
};

export default props => {
  console.log(props.accounts);

  return (
    <SocialLinks size={props.accounts.length}>
      {props.accounts.map(account => (
        <SocialButton account={account} key={account.platform} />
      ))}
    </SocialLinks>
  );
};

const SocialLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.size}, max-content);
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
  <SingleButton background={platforms[props.account.platform].color}>
    <a
      href={props.account.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit our ${props.account.platform} page`}
    >
      <Icon as={platforms[props.account.platform].icon} />
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
