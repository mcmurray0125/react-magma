import * as React from 'react';
import { CalendarContext } from './CalendarContext';
import { CalendarMonth } from './CalendarMonth';
import { Announce } from '../Announce';
import { Input } from '../Input';
import { InputType } from '../BaseInput';
import { format, isAfter, isBefore, isValid } from 'date-fns';
import { ThemeContext } from '../../theme/ThemeContext';
import styled from '../../theme/styled';
import { CalendarIcon } from '../Icon/types/CalendarIcon';
import { VisuallyHidden } from '../VisuallyHidden';
import {
  handleKeyPress,
  getCalendarMonthWeeks,
  getPrevMonthFromDate,
  getNextMonthFromDate
} from './utils';
import { useGenerateId, Omit } from '../../utils';

interface DatePickerProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value'> {
  defaultDate?: Date;
  errorMessage?: React.ReactNode;
  helperMessage?: React.ReactNode;
  id?: string;
  inputRef?: React.RefObject<{}>;
  isInverse?: boolean;
  labelText: React.ReactNode;
  maxDate?: Date;
  messageStyle?: React.CSSProperties;
  minDate?: Date;
  placeholder?: string;
  required?: boolean;
  testId?: string;
  value?: Date;
  onDateChange?: (day: Date, event: React.SyntheticEvent) => void;
  onInputBlur?: (event: React.FocusEvent) => void;
  onInputChange?: (event: React.ChangeEvent) => void;
}

const DatePickerContainer = styled.div`
  position: relative;
`;

const DatePickerCalendar = styled.div<{ opened: boolean }>`
  border: 1px solid ${props => props.theme.colors.neutral06};
  border-radius: 3px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.15);
  display: ${props => (props.opened ? 'block' : 'none')};
  opacity: ${props => (props.opened ? '1' : '0')};
  position: absolute;
  overflow: hidden;
  top: 70px;
  transition: opacity 0.2s ease-in-out 0s;
  width: 320px;
  z-index: ${props => (props.opened ? '998' : '-1')};
`;

export const DatePicker: React.FunctionComponent<DatePickerProps> = (
  props: DatePickerProps
) => {
  const inputRef = React.useRef<HTMLInputElement>();
  const id: string = useGenerateId(props.id);
  const [showHelperInformation, setShowHelperInformation] = React.useState<
    boolean
  >(false);
  const [calendarOpened, setCalendarOpened] = React.useState<boolean>(false);
  const [dateFocused, setDateFocused] = React.useState<boolean>(false);

  const [focusedDate, setFocusedDate] = React.useState<Date>(
    setDateFromConsumer(props.value || props.defaultDate) ||
      setDefaultFocusedDate()
  );
  const [chosenDate, setChosenDate] = React.useState<Date | null>(
    setDateFromConsumer(props.value || props.defaultDate)
  );

  React.useEffect(() => {
    if (!calendarOpened) {
      setDateFocused(false);
    }
  }, [calendarOpened]);

  React.useEffect(() => {
    if (props.value) {
      setChosenDate(setDateFromConsumer(props.value));
      setFocusedDate(
        setDateFromConsumer(props.value) || setDefaultFocusedDate()
      );
    }
  }, [props.value]);

  function setDateFromConsumer(date: Date): Date {
    return inDateRange(date, props.minDate, props.maxDate) ? date : null;
  }

  function setDefaultFocusedDate(): Date {
    const newDate = new Date();
    if (inDateRange(newDate, props.minDate, props.maxDate)) {
      return newDate;
    } else if (props.maxDate || props.minDate) {
      return isBefore(props.minDate, newDate) ? props.minDate : props.maxDate;
    }
  }

  function inDateRange(
    date: Date,
    minDateValue?: Date,
    maxDateValue?: Date
  ): boolean {
    return (
      (maxDateValue ? isBefore(date, maxDateValue) : true) &&
      (minDateValue ? isAfter(date, minDateValue) : true)
    );
  }

  function buildCalendarMonth(date: Date, enableOutsideDates: boolean) {
    return getCalendarMonthWeeks(date, enableOutsideDates);
  }

  function onPrevMonthClick() {
    setFocusedDate(getPrevMonthFromDate);
  }

  function onNextMonthClick() {
    setFocusedDate(getNextMonthFromDate);
  }

  function onDateChange(day: Date) {
    setChosenDate(day);
    setCalendarOpened(false);
  }

  function reset() {
    setFocusedDate(new Date());
    setChosenDate(null);
    setDateFocused(false);
  }

  function handleInputChange(event) {
    setCalendarOpened(false);

    props.onInputChange &&
      typeof props.onInputChange === 'function' &&
      props.onInputChange(event);
  }

  function handleInputBlur(event: React.FocusEvent) {
    const { value } = inputRef.current;
    const day = new Date(value);
    const isValidDateFormat = /^\d{1,2}\/\d{1,2}\/\d{4}$/.test(value);
    const isValidDate = isValid(day);

    if (isValidDateFormat && isValidDate) {
      handleDateChange(day, event);
    } else {
      reset && typeof reset === 'function' && reset();
    }

    props.onInputBlur &&
      typeof props.onInputBlur === 'function' &&
      props.onInputBlur(event);
  }

  function handleInputKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Escape') {
      event.preventDefault();
      setCalendarOpened(false);
      inputRef.current.focus();
    }

    if (event.key === '?') {
      event.preventDefault();
      setShowHelperInformation(true);
    }
  }

  function handleKeyDown(event: React.KeyboardEvent) {
    if (dateFocused && document.activeElement.closest('table')) {
      const newChosenDate = handleKeyPress(
        event,
        focusedDate,
        setCalendarOpened,
        setShowHelperInformation,
        onDateChange,
        inputRef
      );
      if (newChosenDate) {
        setFocusedDate(newChosenDate);
      }
    } else {
      if (event.key === 'Escape') {
        setCalendarOpened(false);
        inputRef.current.focus();
      }

      if (event.key === '?') {
        setShowHelperInformation(true);
      }
    }
  }

  function handleDateChange(
    day: Date,
    event: React.SyntheticEvent | React.ChangeEvent
  ) {
    props.onDateChange &&
      typeof props.onDateChange === 'function' &&
      props.onDateChange(day, event);

    onDateChange(day);
    setFocusedDate(day);
  }

  function handleDaySelection(day: Date, event: React.SyntheticEvent) {
    handleDateChange(day, event);

    inputRef.current.focus();
  }

  function handleCalendarBlur(event: React.SyntheticEvent) {
    const { currentTarget } = event;

    // timeout needed for active element to update. Browser behavior.
    // https://bugzilla.mozilla.org/show_bug.cgi?id=452307
    setTimeout(() => {
      const isInCalendar = currentTarget.contains(document.activeElement);

      if (!isInCalendar && !showHelperInformation) {
        setCalendarOpened(false);
      }
    }, 0);
  }

  function handleCloseButtonClick(event: React.SyntheticEvent) {
    inputRef.current.focus();
    setCalendarOpened(false);
  }

  function toggleCalendarOpened() {
    setCalendarOpened(opened => !opened);
  }

  const { maxDate, minDate, placeholder, testId, ...other } = props;

  const dateFormat = 'MM/DD/YYYY';
  const inputValue = chosenDate ? format(chosenDate, dateFormat) : '';

  const theme = React.useContext(ThemeContext);

  return (
    <CalendarContext.Provider
      value={{
        chosenDate,
        focusedDate,
        dateFocused,
        maxDate,
        minDate,
        showHelperInformation,
        buildCalendarMonth,
        setShowHelperInformation,
        onKeyDown: handleKeyDown,
        onPrevMonthClick,
        onNextMonthClick,
        onDateChange: handleDaySelection,
        setDateFocused
      }}
    >
      <DatePickerContainer data-testid={testId} onBlur={handleCalendarBlur}>
        <Announce>
          {calendarOpened && (
            <VisuallyHidden>
              Calendar widget is now open. Press the question mark key to get
              the keyboard shortcuts for changing dates.
            </VisuallyHidden>
          )}
        </Announce>
        <Input
          {...other}
          icon={<CalendarIcon />}
          iconAriaLabel="Calendar"
          onIconClick={toggleCalendarOpened}
          onIconKeyDown={handleInputKeyDown}
          id={id}
          ref={inputRef}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onKeyDown={handleInputKeyDown}
          placeholder={placeholder ? placeholder : dateFormat}
          type={InputType.text}
          value={inputValue}
        />

        <DatePickerCalendar
          data-testid="calendarContainer"
          opened={calendarOpened}
          theme={theme}
        >
          <CalendarMonth
            focusOnOpen={
              calendarOpened && Boolean(focusedDate) && Boolean(chosenDate)
            }
            handleCloseButtonClick={handleCloseButtonClick}
            calendarOpened={calendarOpened}
            setDateFocused={setDateFocused}
          />
        </DatePickerCalendar>
      </DatePickerContainer>
    </CalendarContext.Provider>
  );
};
