import React, { useState, memo, useRef, useEffect } from 'react';
import styled from 'styled-components';
import ResizeObserver from 'resize-observer-polyfill';
import { useSpring, a } from 'react-spring';

import { FaChevronRight } from 'react-icons/fa';

export function usePrevious(value) {
  const ref = useRef();
  useEffect(() => void (ref.current = value), [value]);
  return ref.current;
}

export function useMeasure() {
  const ref = useRef();
  const [bounds, set] = useState({ left: 0, top: 0, width: 0, height: 0 });
  const [ro] = useState(
    () => new ResizeObserver(([entry]) => set(entry.contentRect))
  );
  useEffect(() => {
    if (ref.current) ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);
  return [{ ref }, bounds];
}

export default memo(({ children, style, defaultOpen = false, belief }) => {
  const [isOpen, setOpen] = useState(defaultOpen);
  const previous = usePrevious(isOpen);
  const [bind, { height: viewHeight }] = useMeasure();
  const { height, opacity, transform, transform2 } = useSpring({
    from: {
      height: 0,
      opacity: 0,
      transform: 'translate3d(20px,0,0)',
      transform2: `rotate(0deg)`,
    },
    to: {
      height: isOpen ? viewHeight : 0,
      opacity: isOpen ? 1 : 0,
      transform: `translate3d(${isOpen ? 0 : 20}px,0,0)`,
      transform2: `rotate(${isOpen ? 45 : 0}deg)`,
    },
  });

  return (
    <Frame>
      <Head
        // style={{ opacity: children ? 1 : 0.3 }}
        onClick={() => setOpen(!isOpen)}
      >
        <Icon style={{ transform2 }} />
        <div style={style}>{belief.title}</div>
      </Head>
      <a.div
        style={{
          opacity,
          height: isOpen && previous === isOpen ? 'auto' : height,
        }}
      >
        <a.div style={{ transform }} {...bind}>
          <Container>
            <Text>{belief.text}</Text>
            <Reference>
              {belief.references.map(reference => (
                <StyledLink
                  href={reference.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  index={reference.ref}
                >
                  {reference.ref}
                </StyledLink>
              ))}
            </Reference>
          </Container>
        </a.div>
      </a.div>
    </Frame>
  );
});

const Frame = styled.div`
  width: 100%;
  height: auto;
  border: 1px solid var(--primaryDark);
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  background: none;
  margin-bottom: auto;
`;

const Head = styled.button`
  width: 100%;
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  color: inherit;
  font-size: 1rem;
  cursor: pointer;
  outline: none;
  padding: 1rem 1.5rem;
  background: var(--primaryDark);
`;

const Icon = styled(a(FaChevronRight))`
  margin-right: 0.45rem;
  font-size: 0.9rem;
  opacity: 0.9;
`;

const Container = styled.div`
  padding: 1rem 1.5rem;
`;

const Text = styled.div`
  font-size: 0.8rem;
  font-weight: 300;
  margin-bottom: 1rem;
`;

const Reference = styled.div`
  padding: 0;
  font-size: 0.6rem;
  text-transform: capitalize;
  opacity: 0.6;
  font-style: italic;
  display: flex;
  flex-wrap: wrap;
`;

const StyledLink = styled.a`
  margin-right: 0.25rem;
  :not(:last-of-type):after {
    content: ',';
  }
`;
