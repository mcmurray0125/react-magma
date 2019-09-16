import React from 'react';
import { axe } from 'jest-axe';
import { StyledButton } from '.';
import { render, fireEvent } from 'react-testing-library';
import { magma } from '../../theme/magma';
import { darken, lighten } from 'polished';

describe('Styled Button', () => {
  it('should find element by testId', () => {
    const testId = 'test-id';
    const { getByTestId } = render(
      <StyledButton testId={testId}>test</StyledButton>
    );

    expect(getByTestId(testId)).toBeInTheDocument();
  });

  it('should render a button with the passed in text', () => {
    const text = 'test text';
    const { getByText } = render(<StyledButton>{text}</StyledButton>);

    expect(getByText(text)).toBeInTheDocument();
  });

  it('should autofocus a button when the passed autoFocus', () => {
    const text = 'test text';
    // eslint-disable-next-line jsx-a11y/no-autofocus
    const { getByText } = render(<StyledButton autoFocus>{text}</StyledButton>);

    expect(getByText(text)).toHaveFocus();
  });

  it('should disable a button when the passed disabled', () => {
    const text = 'test text';
    const { getByText } = render(
      <StyledButton disabled variant="solid">
        {text}
      </StyledButton>
    );

    expect(getByText(text)).toBeDisabled();
    expect(getByText(text)).toHaveStyleRule(
      'background',
      magma.colors.neutral06
    );
  });

  it('should render correct styled for disabled outline button when the passed disabled', () => {
    const text = 'test text';
    const { getByText } = render(
      <StyledButton disabled variant="outline">
        {text}
      </StyledButton>
    );

    expect(getByText(text)).toHaveStyleRule('background', 'rgba(0,0,0,0)');
  });

  describe('Button classes', () => {
    describe('Variants', () => {
      it('solid button', () => {
        const text = 'test text';
        const { getByText } = render(
          <StyledButton variant="solid">{text}</StyledButton>
        );
        const button = getByText(text);

        expect(button).toHaveStyleRule('background', magma.colors.primary);
        expect(button).toHaveStyleRule('background', '#004165', {
          target: ':hover'
        });
        expect(button).toHaveStyleRule('background', '#002032', {
          target: ':active'
        });
        expect(button).toHaveStyleRule('border-color', magma.colors.primary);
        expect(button).toHaveStyleRule('color', magma.colors.neutral08);
      });

      it('outline button', () => {
        const text = 'test text';
        const { getByText } = render(
          <StyledButton variant="outline">{text}</StyledButton>
        );
        const button = getByText(text);

        expect(button).toHaveStyleRule('background', 'rgba(0,0,0,0)');
        expect(button).toHaveStyleRule('background', '#e5eff4', {
          target: ':hover'
        });
        expect(button).toHaveStyleRule('background', '#b2cfe0', {
          target: ':active'
        });
        expect(button).toHaveStyleRule('color', magma.colors.primary);
      });

      it('link button', () => {
        const text = 'test text';
        const { getByText } = render(
          <StyledButton variant="link">{text}</StyledButton>
        );
        const button = getByText(text);

        expect(button).toHaveStyleRule('background', 'rgba(0,0,0,0)');
        expect(button).toHaveStyleRule('color', magma.colors.primary);
      });
    });

    describe('Colors', () => {
      it('primary button', () => {
        const text = 'test text';
        const { getByText } = render(
          <StyledButton color="primary" theme="magma" variant="solid">
            {text}
          </StyledButton>
        );
        const button = getByText(text);

        expect(button).toHaveStyleRule('background', magma.colors.primary);
        expect(button).toHaveStyleRule(
          'background',
          darken(0.1, magma.colors.primary),
          { target: ':hover' }
        );
        expect(button).toHaveStyleRule(
          'background',
          darken(0.2, magma.colors.primary),
          { target: ':active' }
        );
        expect(button).toHaveStyleRule('border-color', magma.colors.primary);
        expect(button).toHaveStyleRule('color', magma.colors.neutral08);
      });

      it('secondary button', () => {
        const text = 'test text';
        const { getByText } = render(
          <StyledButton color="secondary" theme="magma" variant="solid">
            {text}
          </StyledButton>
        );

        const button = getByText(text);

        expect(button).toHaveStyleRule('background', magma.colors.neutral08);
        expect(button).toHaveStyleRule(
          'background',
          darken(0.1, magma.colors.neutral08),
          { target: ':hover' }
        );
        expect(button).toHaveStyleRule(
          'background',
          darken(0.2, magma.colors.neutral08),
          { target: ':active' }
        );
        expect(button).toHaveStyleRule('border-color', magma.colors.neutral05);
        expect(button).toHaveStyleRule('color', magma.colors.neutral02);
      });

      it('success button', () => {
        const text = 'test text';
        const { getByText } = render(
          <StyledButton color="success" theme="magma" variant="solid">
            {text}
          </StyledButton>
        );
        const button = getByText(text);

        expect(button).toHaveStyleRule('background', magma.colors.success01);
        expect(button).toHaveStyleRule(
          'background',
          darken(0.1, magma.colors.success01),
          { target: ':hover' }
        );
        expect(button).toHaveStyleRule(
          'background',
          darken(0.2, magma.colors.success01),
          { target: ':active' }
        );
        expect(button).toHaveStyleRule('border-color', magma.colors.success01);
        expect(button).toHaveStyleRule('color', magma.colors.neutral08);
      });

      it('danger button', () => {
        const text = 'test text';
        const { getByText } = render(
          <StyledButton color="danger" theme="magma" variant="solid">
            {text}
          </StyledButton>
        );
        const button = getByText(text);

        expect(button).toHaveStyleRule('background', magma.colors.danger);
        expect(button).toHaveStyleRule(
          'background',
          darken(0.1, magma.colors.danger),
          { target: ':hover' }
        );
        expect(button).toHaveStyleRule(
          'background',
          darken(0.2, magma.colors.danger),
          { target: ':active' }
        );
        expect(button).toHaveStyleRule('border-color', magma.colors.danger);
        expect(button).toHaveStyleRule('color', magma.colors.neutral08);
      });

      it('marketing button', () => {
        const text = 'test text';
        const { getByText } = render(
          <StyledButton color="marketing">{text}</StyledButton>
        );
        const button = getByText(text);

        expect(button).toHaveStyleRule('background', magma.colors.pop04);
        expect(button).toHaveStyleRule(
          'background',
          lighten(0.1, magma.colors.pop04),
          { target: ':hover' }
        );
        expect(button).toHaveStyleRule(
          'background',
          lighten(0.2, magma.colors.pop04),
          { target: ':active' }
        );
        expect(button).toHaveStyleRule('border-color', magma.colors.pop04);
        expect(button).toHaveStyleRule('color', magma.colors.foundation01);
      });
    });

    describe('Inverse', () => {
      it('primary button', () => {
        const text = 'test text';
        const { getByText } = render(
          <StyledButton inverse color="primary" theme="magma" variant="solid">
            {text}
          </StyledButton>
        );
        const button = getByText(text);

        expect(button).toHaveStyleRule('background', magma.colors.neutral08);
        expect(button).toHaveStyleRule('border-color', magma.colors.neutral08);
        expect(button).toHaveStyleRule('color', magma.colors.primary);
      });

      it('secondary button', () => {
        const text = 'test text';
        const { getByText } = render(
          <StyledButton inverse color="secondary" theme="magma" variant="solid">
            {text}
          </StyledButton>
        );
        const button = getByText(text);

        expect(button).toHaveStyleRule('background', magma.colors.neutral08);
        expect(button).toHaveStyleRule('border-color', magma.colors.neutral08);
        expect(button).toHaveStyleRule('color', magma.colors.neutral02);
      });

      it('success button', () => {
        const text = 'test text';
        const { getByText } = render(
          <StyledButton inverse color="success" theme="magma" variant="solid">
            {text}
          </StyledButton>
        );
        const button = getByText(text);

        expect(button).toHaveStyleRule('background', magma.colors.neutral08);
        expect(button).toHaveStyleRule('border-color', magma.colors.neutral08);
        expect(button).toHaveStyleRule('color', magma.colors.success01);
      });

      it('danger button', () => {
        const text = 'test text';
        const { getByText } = render(
          <StyledButton inverse color="danger" theme="magma" variant="solid">
            {text}
          </StyledButton>
        );
        const button = getByText(text);

        expect(button).toHaveStyleRule('background', magma.colors.neutral08);
        expect(button).toHaveStyleRule('border-color', magma.colors.neutral08);
        expect(button).toHaveStyleRule('color', magma.colors.danger);
      });
    });

    describe('Sizes', () => {
      it('medium button', () => {
        const text = 'test text';
        const { getByText } = render(
          <StyledButton size="medium">{text}</StyledButton>
        );
        const button = getByText(text);

        expect(button).toHaveStyleRule('font-size', '.875rem');
        expect(button).toHaveStyleRule('padding', '0 15px');
        expect(button).toHaveStyleRule('top', '18px', {
          target: ':after'
        });
      });

      it('small button', () => {
        const text = 'test text';
        const { getByText } = render(
          <StyledButton size="small">{text}</StyledButton>
        );
        const button = getByText(text);

        expect(button).toHaveStyleRule('font-size', '.750rem');
        expect(button).toHaveStyleRule('padding', '0 10px');
        expect(button).toHaveStyleRule('top', '14px', {
          target: ':after'
        });
      });

      it('large button', () => {
        const text = 'test text';
        const { getByText } = render(
          <StyledButton size="large">{text}</StyledButton>
        );
        const button = getByText(text);

        expect(button).toHaveStyleRule('font-size', '1.125rem');
        expect(button).toHaveStyleRule('padding', '0 20px');
        expect(button).toHaveStyleRule('top', '22px', {
          target: ':after'
        });
      });

      it('disabled inverse outline button', () => {
        const text = 'test text';
        const { getByText } = render(
          <StyledButton disabled inverse variant="outline">
            {text}
          </StyledButton>
        );
        const button = getByText(text);

        expect(button).toHaveStyleRule(
          'border-color',
          'rgba(255,255,255,0.25)'
        );
        expect(button).toHaveStyleRule('color', 'rgba(255,255,255,0.25)');
      });
    });

    describe('Shapes', () => {
      it('fill button', () => {
        const text = 'test text';
        const { getByText } = render(
          <StyledButton shape="fill">{text}</StyledButton>
        );
        const button = getByText(text);

        expect(button).toHaveStyleRule('border-radius', '5px');
      });

      it('leftCap button', () => {
        const text = 'test text';
        const { getByText } = render(
          <StyledButton shape="leftCap">{text}</StyledButton>
        );
        const button = getByText(text);

        expect(button).toHaveStyleRule('border-radius', '5px 0 0 5px');
      });

      it('rightCap button', () => {
        const text = 'test text';
        const { getByText } = render(
          <StyledButton shape="rightCap">{text}</StyledButton>
        );
        const button = getByText(text);

        expect(button).toHaveStyleRule('border-radius', '0 5px 5px 0');
      });

      it('round button', () => {
        const text = 'test text';
        const { getByText } = render(
          <StyledButton shape="round">{text}</StyledButton>
        );
        const button = getByText(text);

        expect(button).toHaveStyleRule('border-radius', '100%');
      });
    });

    it('allCaps button', () => {
      const text = 'test text';
      const { getByText } = render(
        <StyledButton textTransform="uppercase">{text}</StyledButton>
      );
      const button = getByText(text);

      expect(button).toHaveStyleRule('text-transform', 'uppercase');
    });

    it('textTransform none button', () => {
      const text = 'test text';
      const { getByText } = render(
        <StyledButton textTransform="none">{text}</StyledButton>
      );
      const button = getByText(text);

      expect(button).toHaveStyleRule('text-transform', 'none');
    });
  });

  describe('IconOnly', () => {
    it('icon small', () => {
      const text = 'test text';
      const { getByText } = render(
        <StyledButton iconOnly size="small">
          {text}
        </StyledButton>
      );
      const button = getByText(text);

      expect(button).toHaveStyleRule('display', 'inline-flex');
      expect(button).toHaveStyleRule('height', '28px');
      expect(button).toHaveStyleRule('width', '28px');
    });

    it('icon medium', () => {
      const text = 'test text';
      const { getByText } = render(
        <StyledButton iconOnly size="medium">
          {text}
        </StyledButton>
      );
      const button = getByText(text);

      expect(button).toHaveStyleRule('display', 'inline-flex');
      expect(button).toHaveStyleRule('height', '37px');
      expect(button).toHaveStyleRule('width', '37px');
    });

    it('icon large', () => {
      const text = 'test text';
      const { getByText } = render(
        <StyledButton iconOnly size="large">
          {text}
        </StyledButton>
      );
      const button = getByText(text);

      expect(button).toHaveStyleRule('display', 'inline-flex');
      expect(button).toHaveStyleRule('height', '44px');
      expect(button).toHaveStyleRule('width', '44px');
    });
  });

  describe('Block', () => {
    it('default button', () => {
      const text = 'test text';
      const { getByText } = render(<StyledButton>{text}</StyledButton>);
      const button = getByText(text);

      expect(button).toHaveStyleRule('display', 'inline-flex');
      expect(button).toHaveStyleRule('width', 'auto');
    });

    it('block button', () => {
      const text = 'test text';
      const { getByText } = render(<StyledButton block>{text}</StyledButton>);
      const button = getByText(text);

      expect(button).toHaveStyleRule('display', 'flex');
      expect(button).toHaveStyleRule('width', '100%');
    });
  });

  it('should trigger the passed in function when clicked', () => {
    const onClickSpy = jest.fn();
    const text = 'test text';
    const { getByText } = render(
      <StyledButton onClick={onClickSpy}>{text}</StyledButton>
    );

    fireEvent(
      getByText(text),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true
      })
    );

    expect(onClickSpy).toHaveBeenCalledTimes(1);
  });

  it('Does not violate accessibility standards', () => {
    const text = 'test text';
    const { container } = render(<StyledButton>{text}</StyledButton>);
    return axe(container.innerHTML).then(result => {
      return expect(result).toHaveNoViolations();
    });
  });
});
