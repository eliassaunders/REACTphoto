import React from 'react';
import About from '..';
import { render, cleanup } from '@testing-library/react';
const { asFragment } = render(<About />);

import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

describe('About component', () => {
    // First Test
    it('renders', () => {
      render(<About />);
    });
  
    it('matches snapshot DOM node structure', () => {
        expect(asFragment()).toMatchSnapshot();
      })
  })