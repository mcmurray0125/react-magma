import * as React from 'react';
import styled from '@emotion/styled';
import { CreateStyled } from '@emotion/styled';

import { ThemeContext } from '../../theme/ThemeContext';
import { ThemeInterface } from '../../theme/magma';
import { useIsInverse } from '../../inverse';
import { Step, StepProps, StepStatus } from './Step';
import { transparentize } from 'polished';
import { I18nContext } from '../../i18n';

export interface StepperProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * @internal
   */
  testId?: string;
  /**
   * Customizable aria-label for accessibility.
   */
  ariaLabel: string;
  /**
   * Custom number for responsive styling, uses a minimum 'breakpoint' width from the set number.
   */
  breakpoint?: number;
  /**
   * Changes the Stepper view for responsive layouts, needs a minimum 'breakpoint' number.
   */
  breakpointLayout?: StepperLayout;
  /**
   * Sets the Stepper view
   * @default StepperLayout.showLabels
   */
  layout?: StepperLayout;
  /**
   * Sets a custom label for the Step count # of #.
   * @default 'Step'
   */
  stepLabel?: string;
  /**
   * Sets a custom label for the completed Step.
   * @default 'All steps completed'
   */
  completionLabel?: string;
  /**
   * Current step value.
   */
  currentStep: number;
  /**
   * Inverse styling.
   */
  isInverse?: boolean;
  /**
   * @internal
   */
  theme?: ThemeInterface;
}

export enum StepperLayout {
  showLabels = 'showLabels', //default
  hideLabels = 'hideLabels',
  summaryView = 'summaryView',
}

function buildSeparatorBackgroundColors(props) {
  const { isInverse, theme, stepStatus } = props;
  if (isInverse) {
    if (stepStatus === StepStatus.complete) {
      return theme.colors.tertiary500;
    }
    return theme.colors.primary400;
  } else {
    if (stepStatus === StepStatus.complete) {
      return theme.colors.primary500;
    }
    return theme.colors.neutral300;
  }
}

const typedStyled = styled as CreateStyled<ThemeInterface>;

const StyledStepper = typedStyled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const StyledStepContent = typedStyled.div<{
  showLabelsLayout?: boolean;
  theme?: ThemeInterface;
}>`
  display: flex;
  
`;

const StyledWrapper = typedStyled.div`
    position:relative;
    flex:1;
`;

const StyledSeparator = typedStyled.div<{
  isInverse?: boolean;
  bothLabels?: boolean;
  label?: boolean;
  secondaryLabel?: boolean;
  showLabelsLayout?: boolean;
  stepStatus: StepStatus;
  theme?: ThemeInterface;
}>`
  background: ${buildSeparatorBackgroundColors};
  width: ${props =>
    props.showLabelsLayout &&
    (props.bothLabels || props.label || props.secondaryLabel)
      ? 'calc(100% - 24px)'
      : '100%'};
  height: 2px;
  top: 11px;
  left: ${props =>
    props.showLabelsLayout &&
    (props.bothLabels || props.label || props.secondaryLabel)
      ? 'calc(50% + 12px)'
      : ''};
  position: ${props =>
    props.showLabelsLayout &&
    (props.bothLabels || props.label || props.secondaryLabel)
      ? 'absolute'
      : 'relative'};
  align-self: baseline;
  transition: all 0.4s ease;
`;

const StyledSummary = typedStyled.div<{
  isInverse?: boolean;
  theme: ThemeInterface;
}>`
  display: flex;
  flex-direction: column;
  position:relative;
  font-size: ${props =>
    props.theme.typographyVisualStyles.bodySmall.desktop.fontSize};
  letter-spacing: ${props =>
    props.theme.typographyVisualStyles.bodySmall.desktop.letterSpacing};
  line-height: ${props =>
    props.theme.typographyVisualStyles.bodySmall.desktop.lineHeight};
  color: ${props =>
    props.isInverse
      ? transparentize(0.3, props.theme.colors.neutral100)
      : props.theme.colors.neutral500};
  span {
    display: flex;
    text-align: left;
  }
  svg{
    height:0;
  }
  div > span{
    height: auto;
  }
  div div {
    margin:3px 0;
    span{
      margin:0
    }
  }
  div div span:last-child{
    margin: 4px 0 0 0;
  } 
`;

// Stepper!
export const Stepper = React.forwardRef<HTMLDivElement, StepperProps>(
  (props, ref) => {
    const {
      ariaLabel,
      breakpoint,
      breakpointLayout,
      children,
      currentStep,
      layout = StepperLayout.showLabels,
      stepLabel,
      isInverse: isInverseProp,
      testId,
      ...rest
    } = props;
    const theme = React.useContext(ThemeContext);
    const i18n = React.useContext(I18nContext);
    const isInverse = useIsInverse(isInverseProp);

    // Controls the varying layouts with a set breakpoint number between a breakpointLayout type and / or a layout type.

    const [showLabelsLayout, setShowLabelsLayout] = React.useState(false);
    const [hideLabelsLayout, setHideLabelsLayout] = React.useState(false);
    const [summaryViewLayout, setSummaryViewLayout] = React.useState(false);

    React.useEffect(() => {
      setHideLabelsLayout(layout === StepperLayout.hideLabels);
      setShowLabelsLayout(layout === StepperLayout.showLabels);
      setSummaryViewLayout(layout === StepperLayout.summaryView);
    }, [layout]);

    React.useEffect(() => {
      setHideLabelsLayout(breakpointLayout === StepperLayout.hideLabels);
      setShowLabelsLayout(breakpointLayout === StepperLayout.showLabels);
      setSummaryViewLayout(breakpointLayout === StepperLayout.summaryView);
    }, [breakpointLayout]);

    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
      function handleResize() {
        setWindowWidth(window.innerWidth);
        if (window.innerWidth < breakpoint && breakpoint) {
          setShowLabelsLayout(breakpointLayout === StepperLayout.showLabels);
          setHideLabelsLayout(breakpointLayout === StepperLayout.hideLabels);
          setSummaryViewLayout(breakpointLayout === StepperLayout.summaryView);
        }

        if (window.innerWidth > breakpoint || !breakpoint) {
          setShowLabelsLayout(layout === StepperLayout.showLabels);
          setHideLabelsLayout(layout === StepperLayout.hideLabels);
          setSummaryViewLayout(layout === StepperLayout.summaryView);
        }
        if (showLabelsLayout) {
          setHideLabelsLayout(false);
          setSummaryViewLayout(false);
        } else if (hideLabelsLayout) {
          setShowLabelsLayout(false);
          setSummaryViewLayout(false);
        } else if (summaryViewLayout) {
          setShowLabelsLayout(false);
          setHideLabelsLayout(false);
        }
      }

      window.addEventListener('resize', handleResize);
      handleResize();

      return () => window.removeEventListener('resize', handleResize);
    }, [windowWidth]);

    const stepperChildren = React.Children.toArray(children);
    const numberOfSteps = stepperChildren.length;

    let allStepsHaveLabels = false;
    let allStepsHaveSecondaryLabels = false;

    for (const stepChild of stepperChildren) {
      if (React.isValidElement(stepChild)) {
        if (Object.keys(stepChild.props).includes('label')) {
          allStepsHaveLabels = true;
        }
        if (Object.keys(stepChild.props).includes('secondaryLabel')) {
          allStepsHaveSecondaryLabels = true;
        }
      }
    }

    const stepContent = React.Children.map(
      children,
      (
        child: React.ReactElement<React.PropsWithChildren<StepProps>>,
        index
      ) => {
        if (child.type === Step) {
          const stepStatusStyles =
            currentStep >= index + 1
              ? StepStatus.complete
              : currentStep >= index
              ? StepStatus.active
              : StepStatus.incomplete;

          const item = React.cloneElement(child, {
            'aria-current': !showLabelsLayout ? currentStep === index : null,
            key: index,
            isInverse: isInverse,
            areLabelsHidden: hideLabelsLayout || summaryViewLayout,
            stepStatus: stepStatusStyles,
          });

          const stepAndSeparator = () => {
            return [
              item,
              index !== numberOfSteps - 1 && (
                <StyledSeparator
                  key={`separator-${index}`}
                  isInverse={isInverse}
                  bothLabels={allStepsHaveLabels && allStepsHaveSecondaryLabels}
                  label={allStepsHaveLabels}
                  secondaryLabel={allStepsHaveSecondaryLabels}
                  showLabelsLayout={showLabelsLayout}
                  stepStatus={stepStatusStyles}
                  theme={theme}
                />
              ),
            ];
          };

          if (
            showLabelsLayout &&
            (allStepsHaveLabels || allStepsHaveSecondaryLabels)
          ) {
            return (
              <StyledWrapper aria-current={currentStep === index} theme={theme}>
                {stepAndSeparator()}
              </StyledWrapper>
            );
          } else {
            return <>{stepAndSeparator()}</>;
          }
        }
      }
    );

    // When summaryView is set to true, this shows one step label and description at a time based on the active step below the Stepper component.

    const getSummaryStepLabels = () =>
      React.Children.map(children, (child, index) => {
        const item = child as React.ReactElement<
          React.PropsWithChildren<StepProps>
        >;

        if (item.type === Step && currentStep === index) {
          return item;
        }
      });

    // Final step description
    const completionLabel =
      props.completionLabel || i18n.stepper.completionLabel;

    return (
      <StyledStepper
        {...rest}
        aria-label={ariaLabel}
        data-testid={testId}
        ref={ref}
      >
        <StyledStepContent showLabelsLayout={showLabelsLayout} theme={theme}>
          {stepContent}
        </StyledStepContent>
        {summaryViewLayout && (
          <StyledStepContent>
            <StyledSummary
              data-testid={testId && `${testId}-stepper-summary`}
              isInverse={isInverse}
              theme={theme}
            >
              {currentStep < numberOfSteps
                ? stepLabel
                  ? `${stepLabel} ${currentStep + 1} ${
                      i18n.stepper.stepOfLabel
                    } ${numberOfSteps}`
                  : `${i18n.stepper.stepLabel} 
          ${currentStep + 1} ${i18n.stepper.stepOfLabel} ${numberOfSteps}`
                : completionLabel}
              {getSummaryStepLabels()}
            </StyledSummary>
          </StyledStepContent>
        )}
      </StyledStepper>
    );
  }
);