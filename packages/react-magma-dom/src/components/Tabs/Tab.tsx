import React from 'react';
import { defineTheme } from './themes';
import { ThemeContext } from '../../theme/ThemeContext';
import { useTabsContext } from './TabsContainer';
import {
  StyledCustomTab,
  StyledTab,
  StyledIcon,
  IconOrientation
} from './StylesTab';

export interface ITabProps {
  disabled?: boolean;
  component?: React.ReactElement<any> | React.ReactElement<any>[];
  icon?: React.ReactElement<any> | React.ReactElement<any>[];
  iconOrientation?: IconOrientation;
  ariaLabel?: string;
  testId?: string;
  changeHandler?: (index: number) => void;
  index?: number;
  isActive?: boolean;
  styles?: { [key: string]: any };
  path?: string;
}

export const Tab: React.FunctionComponent<ITabProps> = React.forwardRef(
  (props, ref: React.Ref<any>) => {
    const {
      children,
      component,
      disabled,
      icon,
      iconOrientation,
      ariaLabel,
      testId,
      changeHandler,
      index,
      isActive,
      styles,
      path
    } = props;

    const tabsThemeContext = React.useContext(ThemeContext);
    const { theme } = useTabsContext();

    React.useEffect(() => {
      path && path === window.location.pathname && changeHandler(index);
    }, [path]);

    if (component) {
      return (
        <StyledCustomTab
          ref={ref}
          component={component}
          disabled={disabled}
          data-testid={testId}
          aria-label={ariaLabel}
          aria-selected={isActive}
        >
          {children}
        </StyledCustomTab>
      );
    } else {
      if (icon) {
        return (
          <StyledTab
            ref={ref}
            theme={defineTheme(tabsThemeContext, theme)}
            disabled={disabled}
            iconOrientation={iconOrientation}
            data-testid={testId}
            aria-label={ariaLabel}
            isActive={isActive}
            styles={styles}
            aria-selected={isActive}
          >
            <StyledIcon iconOrientation={iconOrientation}>{icon}</StyledIcon>
            {children}
          </StyledTab>
        );
      } else {
        return (
          <StyledTab
            ref={ref}
            theme={defineTheme(tabsThemeContext, theme)}
            aria-label={ariaLabel}
            iconOrientation={iconOrientation}
            disabled={disabled}
            data-testid={testId}
            isActive={isActive}
            styles={styles}
            aria-selected={isActive}
          >
            {children}
          </StyledTab>
        );
      }
    }
  }
);

Tab.displayName = 'Tab';
