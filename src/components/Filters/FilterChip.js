import React, { useState, useRef } from 'react';
import { useSpring, useChain, animated } from 'react-spring';
import styled from 'styled-components';
const springConfig = {
  tension: 425,
  friction: 25,
  clamp: true,
};

const FilterChip = ({ children, className, click, active }) => {
  const [focused, setFocused] = useState(false);
  const buttonSpring = useSpring({
    config: springConfig,
    borderWidth: focused ? '2px ' : '0px',
    background: active ? '#3A4E48' : '#6A7B76',
    // color: active ? '#212121' : '#616161',
  });
  const shiftRef = useRef();
  const shiftSpring = useSpring({
    config: springConfig,
    ref: shiftRef,
    from: { marginLeft: active ? '12px' : '0px' },
    marginLeft: active ? '12px' : '0px',
  });

  const checkRef = useRef();
  const checkSpring = useSpring({
    config: springConfig,
    ref: checkRef,
    from: { offset: active ? 0 : 24 },
    offset: active ? 0 : 24,
  });
  useChain(active ? [shiftRef, checkRef] : [checkRef, shiftRef], [0, 0.1]);

  return (
    <>
      <animated.button
        className={className}
        onClick={() => click()}
        style={buttonSpring}
        onFocus={() => setFocused(true)}
        onBlur={() => {
          setFocused(false);
        }}
      >
        <div style={{ position: 'relative' }}>
          <span
            style={{
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              top: '2px',
              left: '-2px',
            }}
          >
            <animated.svg
              xmlns="http://www.w3.org/2000/svg"
              width={12}
              height={12}
              viewBox="0 0 24 24"
              fill="none"
              stroke="#212121"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray={24}
              strokeDashoffset={checkSpring.offset}
              className="feather-check"
            >
              <polyline points="4 12 9 17 20 6" />
            </animated.svg>
          </span>
          <animated.span style={{ ...shiftSpring }}>{children}</animated.span>
        </div>
      </animated.button>
    </>
  );
};

export default styled(FilterChip)`
  flex: 0 0 auto;
  height: 1.5rem;
  font-size: 0.75rem;
  border-radius: 50px;
  padding: 0 0.75rem;
  margin: 0.25rem;
  color: var(--white);
  border: 0px inset rgba(58, 78, 72, 0.8);
  box-sizing: border-box;
  &:focus {
    outline: none;
  }
`;
