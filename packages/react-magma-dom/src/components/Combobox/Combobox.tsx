import * as React from 'react';
import { instanceOfDefaultItemObject } from '../Select';
import { useCombobox } from 'downshift';
import { CrossIcon } from 'react-magma-icons';
import { defaultComponents } from '../Select/components';
import { SelectContainer } from '../Select/SelectContainer';
import { ItemsList } from '../Select/ItemsList';
import { ComboboxInput } from './ComboboxInput';
import { ButtonSize, ButtonVariant } from '../Button';
import { useComboboxItems, defaultOnInputValueChange } from './shared';
import { ComboboxInterface } from '.';
import { I18nContext } from '../../i18n';
import { useForkedRef } from '../../utils';

export function InternalCombobox<T>(props: ComboboxInterface<T>) {
  const {
    ariaDescribedBy,
    components: customComponents,
    defaultItems,
    defaultSelectedItem,
    disableCreateItem,
    hasError,
    initialSelectedItem,
    inputStyle,
    isClearable,
    disabled,
    innerRef,
    isLabelVisuallyHidden,
    isLoading,
    isInverse,
    items,
    itemToString,
    labelStyle,
    labelText,
    menuStyle,
    newItemTransform,
    onInputBlur,
    onInputChange,
    onInputFocus,
    onInputKeyDown,
    onInputKeyPress,
    onInputKeyUp,
    onInputValueChange,
    onIsOpenChange,
    onItemCreated,
    placeholder,
    selectedItem: passedInSelectedItem,
    toggleButtonRef,
  } = props;

  const i18n = React.useContext(I18nContext);

  function isCreatedItem(item) {
    return (
      !(typeof item === 'string') &&
      instanceOfDefaultItemObject(item) &&
      item.react_magma__created_item
    );
  }

  function defaultNewItemTransform(newItem) {
    return newItem.value;
  }

  function defaultOnSelectedItemChange(changes) {
    if (isCreatedItem(changes.selectedItem)) {
      const {
        react_magma__created_item,
        ...createdItem
      } = changes.selectedItem;

      const newItem =
        react_magma__created_item &&
        newItemTransform &&
        typeof newItemTransform === 'function'
          ? newItemTransform(createdItem)
          : defaultNewItemTransform(createdItem);

      items && onItemCreated && typeof onItemCreated === 'function'
        ? onItemCreated(newItem)
        : updateItemsRef(newItem);

      selectItem(newItem);
      setInputValue(itemToString(newItem));

      if (process.env.NODE_ENV === 'development') {
        if (!items && !disableCreateItem) {
          console.warn(
            'React Magma Warning: Switching from uncontrolled to controlled items. If allowing new items to be created you should handle the onItemCreated event and control the items list in your code.'
          );
        }
      }
    } else {
      props.onSelectedItemChange &&
        typeof props.onSelectedItemChange === 'function' &&
        props.onSelectedItemChange(changes);
    }
  }

  function stateReducer(state, actionAndChanges) {
    const { type, changes } = actionAndChanges;

    switch (type) {
      case useCombobox.stateChangeTypes.InputKeyDownEnter: {
        const inputValue = isCreatedItem(displayItems[0])
          ? ''
          : changes.inputValue;
        return {
          ...changes,
          ...(displayItems[0] && { selectedItem: displayItems[0] }),
          inputValue,
        };
      }
      case useCombobox.stateChangeTypes.ItemClick: {
        const inputValue = isCreatedItem(displayItems[0])
          ? ''
          : changes.inputValue;
        return {
          ...changes,
          inputValue,
        };
      }
      case useCombobox.stateChangeTypes.InputBlur:
        return {
          ...changes,
          inputValue:
            state.inputValue && !state.selectedItem
              ? ''
              : itemToString(state.selectedItem),
          selectedItem: state.selectedItem ? state.selectedItem : '',
        };
      case useCombobox.stateChangeTypes.FunctionReset:
        return {
          ...changes,
          inputValue: changes.selectedItem
            ? itemToString(changes.selectedItem)
            : '',
        };
      default:
        return changes;
    }
  }

  const [
    allItems,
    displayItems,
    setDisplayItems,
    updateItemsRef,
  ] = useComboboxItems(defaultItems, items);

  function getValidItem(itemToCheck: T, key: string): object {
    return allItems.current.findIndex(
      i => itemToString(i) === itemToString(itemToCheck)
    ) !== -1
      ? { [key]: itemToCheck }
      : { [key]: null };
  }

  function handleOnIsOpenChange(changes) {
    const {
      isOpen: changedIsOpen,
      selectedItem: changedSelectedItem,
    } = changes;

    if (!changedIsOpen) {
      setDisplayItems(allItems.current);
    }

    if (changedIsOpen && changedSelectedItem) {
      setHighlightedIndex(
        displayItems.findIndex(
          i => itemToString(i) === itemToString(changedSelectedItem)
        )
      );
    }

    onIsOpenChange &&
      typeof onIsOpenChange === 'function' &&
      onIsOpenChange(changes);
  }

  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
    reset,
    selectItem,
    selectedItem,
    setInputValue,
    setHighlightedIndex,
  } = useCombobox({
    ...props,
    itemToString,
    items: displayItems,
    onInputValueChange:
      onInputValueChange && typeof onInputValueChange === 'function'
        ? changes => onInputValueChange(changes, setDisplayItems)
        : changes =>
            defaultOnInputValueChange(
              changes,
              allItems,
              itemToString,
              disableCreateItem,
              setDisplayItems,
              setHighlightedIndex,
              onInputChange,
              i18n.combobox.createLabel
            ),
    onIsOpenChange: handleOnIsOpenChange,
    onSelectedItemChange: defaultOnSelectedItemChange,
    stateReducer,
    ...(defaultSelectedItem &&
      getValidItem(defaultSelectedItem, 'defaultSelectedItem')),
    ...(initialSelectedItem &&
      getValidItem(initialSelectedItem, 'initialSelectedItem')),
    ...(passedInSelectedItem &&
      getValidItem(passedInSelectedItem, 'selectedItem')),
  });

  const { ClearIndicator } = defaultComponents({
    ...customComponents,
  });

  const inputRef = React.useRef<HTMLInputElement>();
  const ref = useForkedRef(innerRef || null, inputRef);

  function defaultHandleClearIndicatorClick(event: React.SyntheticEvent) {
    event.stopPropagation();

    if (inputRef.current) {
      inputRef.current.focus();
    }

    reset();
  }

  const clearIndicatorAriaLabel = i18n.combobox.clearIndicatorAriaLabel
    .replace(/\{labelText\}/g, labelText)
    .replace(/\{selectedItem\}/g, itemToString(selectedItem));

  return (
    <SelectContainer
      getLabelProps={getLabelProps}
      hasError={hasError}
      isLabelVisuallyHidden={isLabelVisuallyHidden}
      isInverse={isInverse}
      labelStyle={labelStyle}
      labelText={labelText}
    >
      <ComboboxInput
        ariaDescribedBy={ariaDescribedBy}
        customComponents={customComponents}
        getComboboxProps={getComboboxProps}
        getInputProps={getInputProps}
        getToggleButtonProps={getToggleButtonProps}
        inputStyle={inputStyle}
        disabled={disabled}
        isInverse={isInverse}
        isLoading={isLoading}
        hasError={hasError}
        onInputBlur={onInputBlur}
        onInputFocus={onInputFocus}
        onInputKeyDown={onInputKeyDown}
        onInputKeyPress={onInputKeyPress}
        onInputKeyUp={onInputKeyUp}
        placeholder={placeholder}
        ref={ref}
        toggleButtonRef={toggleButtonRef}
      >
        {isClearable && selectedItem && (
          <ClearIndicator
            aria-label={clearIndicatorAriaLabel}
            icon={<CrossIcon size={10} />}
            onClick={defaultHandleClearIndicatorClick}
            size={ButtonSize.small}
            style={{ margin: '0 5px' }}
            variant={ButtonVariant.link}
          />
        )}
      </ComboboxInput>
      <ItemsList
        getItemProps={getItemProps}
        getMenuProps={getMenuProps}
        highlightedIndex={highlightedIndex}
        isOpen={isOpen}
        items={displayItems}
        itemToString={itemToString}
        menuStyle={menuStyle}
      />
    </SelectContainer>
  );
}