import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

jest.mock('../content/footerContent', () => ({
  ownerText: 'Owner: Caleb Nichol',
  ownerImage: 'owner.jpg',
  address: 'The Newport Group Newport Beach The O.C. C.A. 92660',
  email: 'contact@thenewportgroup.com',
  phone: '555-123-4567',
  imageSmall: 'map.jpg',
  alt: 'Map of Newport Beach',
}));

describe('Footer', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it('should load the footer', () => {
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
  it('Checks the images have the right src and alt text', () => {
    expect(screen.getAllByRole('img')[0]).toHaveAttribute('src', 'owner.jpg');
    expect(screen.getAllByRole('img')[1]).toHaveAttribute('src', 'map.jpg');
    expect(screen.getAllByRole('img')[0]).toHaveAttribute(
      'alt',
      'Owner: Caleb Nichol'
    );
    expect(screen.getAllByRole('img')[1]).toHaveAttribute(
      'alt',
      'Map of Newport Beach'
    );
  });
  it('Checks the text is there', () => {
    expect(screen.getByText('Owner: Caleb Nichol')).toBeInTheDocument();
    expect(
      screen.getByText('The Newport Group Newport Beach The O.C. C.A. 92660')
    ).toBeInTheDocument();
    expect(screen.getByText('555-123-4567')).toBeInTheDocument();
  });
  it('Checks the email link', () => {
    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByText('contact@thenewportgroup.com')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', 'mailto:#');
  });
});
