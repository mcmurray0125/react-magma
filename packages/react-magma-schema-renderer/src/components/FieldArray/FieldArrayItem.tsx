import * as React from 'react';
import useFormApi from '@data-driven-forms/react-form-renderer/dist/cjs/use-form-api';
import { v4 as uuidv4 } from 'uuid';
import { IconButton, ButtonVariant, ThemeContext } from 'react-magma-dom';
import { DeleteIcon } from 'react-magma-icons';

// export interface FieldArrayItemProps {
//   fields?: any[];
//   fieldIndex: number;
//   name?: string;
//   onRemove: (index: number) => void;
//   length?: number;
//   minItems?: number;
//   removeLabel: string;
//   showError?: boolean;
//   isReadOnly: boolean;
// }

export const FieldArrayItem = ({
  fields,
  fieldIndex,
  name,
  remove,
  length,
  minItems,
  removeLabel,
}: any) => {
  const { renderForm } = useFormApi();
  const theme = React.useContext(ThemeContext);

  const editedFields = React.useMemo(() => {
    return fields.map((field: any) => {
      const computedName = field.name ? `${name}.${field.name}` : uuidv4();
      return {
        ...field,
        name: computedName,
        key: computedName,
        labelText: fieldIndex === 0 ? field.labelText : null,
        children: (
          <IconButton
            aria-label={removeLabel}
            icon={<DeleteIcon />}
            variant={ButtonVariant.link}
            onClick={() => remove(fieldIndex)}
            disabled={length <= minItems}
          />
        ),
      };
    });
  }, [fields, name, fieldIndex]);

  return (
    <div style={{ marginTop: theme.spaceScale.spacing04 }}>
      {editedFields.map((field: any) => renderForm([field]))}
    </div>
  );
};
