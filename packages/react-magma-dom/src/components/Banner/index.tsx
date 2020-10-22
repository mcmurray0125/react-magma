import * as React from 'react';
import styled from '../../theme/styled';
import isPropValid from '@emotion/is-prop-valid';
import { AlertProps } from '../Alert';
import { AlertVariant, buildAlertBackground, VARIANT_ICON } from '../AlertBase';
import { CrossIcon } from 'react-magma-icons';
import { Button, ButtonSize, ButtonVariant, ButtonColor } from '../Button';
import { IconButton } from '../IconButton';
import { ThemeContext } from '../../theme/ThemeContext';

export interface BannerProps extends AlertProps {
  actionButtonText?: string;
  actionButtonOnClick?: () => void;
}

const StyledBanner = styled.div<AlertProps>`
  align-items: stretch;
  background: ${props => buildAlertBackground(props)};
  color: ${props =>
    props.variant === 'warning'
      ? props.theme.colors.neutral01
      : props.theme.colors.neutral08};
  display: flex;
  line-height: 20px;
  position: relative;
  text-align: center;

  @media (max-width: ${props => props.theme.breakpoints.small}px) {
    text-align: left;
    font-size: 14px;
  }
`;

const BannerContents = styled.div`
  align-items: center;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  padding: 13px 15px;

  @media (max-width: ${props => props.theme.breakpoints.small}px) {
    justify-content: flex-start;
  }
`;

const ButtonWrapper = styled.span`
  align-items: center;
  display: flex;
  flex-shrink: 0;
`;

const allowedProps = ['icon', 'isInverse', 'theme', 'variant'];

const shouldForwardProp = prop => {
  return isPropValid(prop) || allowedProps.includes(prop);
};

const DismissButton = styled(IconButton, { shouldForwardProp })<{
  alertVariant?: AlertVariant;
}>`
  border-radius: 0;
  color: ${({ alertVariant, theme }) =>
    alertVariant === 'warning'
      ? theme.colors.neutral01
      : theme.colors.neutral08};
  height: calc(100% - 6px);
  margin: 3px;
  padding: 0 15px;
  width: auto;

  &&:focus:not(:disabled) {
    outline: 2px dotted
      ${({ alertVariant, theme }) =>
        alertVariant === 'warning'
          ? theme.colors.neutral01
          : theme.colors.neutral08};
    outline-offset: 0 !important;
  }

  &:hover,
  &:focus {
    :not(:disabled) {
      &:before {
        background: ${({ alertVariant, theme }) =>
          alertVariant === 'warning'
            ? theme.colors.neutral01
            : theme.colors.neutral08};
        opacity: 0.15;
      }

      &:after {
        display: none;
      }
    }
  }
`;

const IconWrapper = styled.span`
  display: inline-flex;
  padding-right: 10px;

  @media (max-width: 600px) {
    display: none;
  }
`;

function renderIcon(variant = 'info') {
  const Icon = VARIANT_ICON[variant];

  return (
    <IconWrapper>
      <Icon size={20} />
    </IconWrapper>
  );
}

function getButtonColor(variant: AlertVariant) {
  switch (variant) {
    case 'success':
      return ButtonColor.success;
    case 'warning':
      return ButtonColor.secondary;
    case 'danger':
      return ButtonColor.danger;
    default:
      return ButtonColor.primary;
  }
}

export const Banner = React.forwardRef<HTMLDivElement, BannerProps>(
  (props, ref) => {
    const {
      actionButtonText,
      actionButtonOnClick,
      children,
      closeAriaLabel,
      isDismissible,
      onDismiss,
      testId,
      variant,
      ...other
    } = props;

    const theme = React.useContext(ThemeContext);

    return (
      <StyledBanner
        {...other}
        data-testid={testId}
        ref={ref}
        theme={theme}
        variant={variant}
      >
        <BannerContents theme={theme}>
          {renderIcon(variant)}
          {children}
          {actionButtonText && actionButtonOnClick && (
            <Button
              color={getButtonColor(variant)}
              isInverse
              onClick={actionButtonOnClick}
              style={{ margin: '0 0 0 30px' }}
              size={ButtonSize.small}
            >
              {actionButtonText}
            </Button>
          )}
        </BannerContents>

        {isDismissible && (
          <ButtonWrapper>
            <DismissButton
              alertVariant={variant}
              aria-label={
                closeAriaLabel ? closeAriaLabel : 'Close this message'
              }
              icon={<CrossIcon size={13} />}
              isInverse
              onClick={onDismiss}
              theme={theme}
              variant={ButtonVariant.link}
            />
          </ButtonWrapper>
        )}
      </StyledBanner>
    );
  }
);
