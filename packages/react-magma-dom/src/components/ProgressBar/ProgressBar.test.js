import React from 'react';
import { axe } from 'jest-axe';
import { ProgressBar } from '.';
import { render } from '@testing-library/react';

describe('ProgressBar', () => {
  it('should render the progress bar component', () => {
    const { container } = render(<ProgressBar />);

    expect(container).toBeInTheDocument();
  });

  it('should render the progress bar component with inverse styles', () => {
    const { container } = render(<ProgressBar inverse />);

    expect(container.firstChild.firstChild).toHaveStyleRule(
      'background',
      'rgba(0,0,0,0.25)'
    );
  });

  it('should render the progress bar component with custom height', () => {
    const { container } = render(<ProgressBar height="10" />);

    expect(container.firstChild.firstChild).toHaveStyleRule('height', '10px');
  });

  it('should render the progress bar component with correct percentage value', () => {
    const { container } = render(<ProgressBar percentage={50} />);

    expect(container.querySelector('[role="progressbar"]')).toHaveStyleRule(
      'width',
      '50%'
    );
  });

  it('should render the progress bar component with danger color', () => {
    const { container } = render(
      <ProgressBar percentage={50} bgColor="danger" />
    );

    expect(container.querySelector('[role="progressbar"]')).toHaveStyleRule(
      'background',
      '#E70000'
    );
  });

  it('should render the progress bar component with pop01 color', () => {
    const { container } = render(
      <ProgressBar percentage={50} bgColor="pop01" />
    );

    expect(container.querySelector('[role="progressbar"]')).toHaveStyleRule(
      'background',
      '#E0004D'
    );
  });

  it('should render the progress bar component with pop02 color', () => {
    const { container } = render(
      <ProgressBar percentage={50} bgColor="pop02" />
    );

    expect(container.querySelector('[role="progressbar"]')).toHaveStyleRule(
      'background',
      '#FA6600'
    );
  });

  it('should render the progress bar component with success color', () => {
    const { container } = render(
      <ProgressBar percentage={50} bgColor="success" />
    );

    expect(container.querySelector('[role="progressbar"]')).toHaveStyleRule(
      'background',
      '#3A8200'
    );
  });

  it('should render the progress bar component shimmer animation', () => {
    const { container } = render(<ProgressBar percentage={50} animated />);

    expect(container.querySelector('[role="progressbar"]')).toHaveStyleRule(
      'animation-name',
      'placeholderShimmer'
    );
  });

  it('should render the progress bar with the percentage label displayed', () => {
    const { getByText } = render(<ProgressBar percentage={50} labelVisible />);

    expect(getByText('50%')).toBeInTheDocument();
  });

  it('Does not violate accessibility standards', () => {
    const { container } = render(<ProgressBar />);

    return axe(container.innerHTML).then(result => {
      return expect(result).toHaveNoViolations();
    });
  });
});