import * as React from 'react';
import styled from '../../theme/styled';
import { ThemeContext } from '../../theme/ThemeContext';

export interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  density?: TableDensity;
  hasVerticalBorders?: boolean;
  hasZebraStripes?: boolean;
  isInverse?: boolean;
  ref?: any;
  testId?: string;
}

export enum TableDensity {
  compact = 'compact',
  loose = 'loose',
  normal = 'normal' // default
}

export enum TableCellAlign {
  center = 'center',
  inherit = 'inherit',
  justify = 'justify',
  left = 'left', // default
  right = 'right'
}

export enum TableSortDirection {
  ascending = 'ascending',
  descending = 'descending',
  none = 'none' // default
}

interface TableContextInterface {
  paddingDensity?: TableDensity;
  hasVertBorders?: boolean;
  hasStripes?: boolean;
  isInverseContainer?: boolean;
}

export const TableContext = React.createContext<TableContextInterface>({
  paddingDensity: TableDensity.normal,
  hasVertBorders: false,
  hasStripes: false,
  isInverseContainer: false
});

const StyledTable = styled.table<{ isInverse?: boolean }>`
  border-collapse: collapse;
  border-spacing: 0;
  color: ${props =>
    props.isInverse
      ? props.theme.colors.neutral08
      : props.theme.colors.neutral01};
  display: table;
  width: 100%;
`;

export const Table: React.FunctionComponent<TableProps> = React.forwardRef(
  (
    {
      children,
      density,
      hasVerticalBorders,
      hasZebraStripes,
      isInverse,
      testId,
      ...other
    }: TableProps,
    ref: any
  ) => {
    const [hasVertBorders, setHasVertBorders] = React.useState(
      Boolean(hasVerticalBorders)
    );

    React.useEffect(() => {
      setHasVertBorders(Boolean(hasVerticalBorders));
    }, [hasVerticalBorders]);

    const [hasStripes, setHasStripes] = React.useState(
      Boolean(hasZebraStripes)
    );

    React.useEffect(() => {
      setHasStripes(Boolean(hasZebraStripes));
    }, [hasZebraStripes]);

    const [paddingDensity, setPaddingDensity] = React.useState(density);

    React.useEffect(() => {
      setPaddingDensity(density);
    }, [density]);

    React.useEffect(() => {
      setHasStripes(Boolean(hasZebraStripes));
    }, [hasZebraStripes]);

    const [isInverseContainer, setIsInverseContainer] = React.useState(
      isInverse
    );

    const theme = React.useContext(ThemeContext);

    React.useEffect(() => {
      setIsInverseContainer(isInverse);
    }, [isInverse]);

    return (
      <TableContext.Provider
        value={{
          hasStripes,
          hasVertBorders,
          isInverseContainer,
          paddingDensity
        }}
      >
        <StyledTable
          {...other}
          data-testid={testId}
          isInverse={isInverse}
          ref={ref}
          theme={theme}
        >
          {children}
        </StyledTable>
      </TableContext.Provider>
    );
  }
);
