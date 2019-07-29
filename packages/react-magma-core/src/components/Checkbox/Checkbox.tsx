import * as React from 'react';
import { generateId } from '../utils';

export interface CheckboxCoreProps {
  children: (props) => React.ReactNode;
  id?: string;
  // onBlur?: () => void;
  // onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChange?: (checked: boolean) => void;
  // onFocus?: () => void;
  checked?: boolean;
}

export interface CheckboxCoreState {
  id?: string;
  checked?: boolean;
}

export class CheckboxCore extends React.Component<
  CheckboxCoreProps,
  CheckboxCoreState
> {
  constructor(props) {
    super(props);

    this.state = {
      id: generateId(this.props.id),
      checked: this.props.checked
    };

    // this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);
    // this.onFocus = this.onFocus.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      this.setState({ id: generateId(this.props.id) });
    }

    if (prevProps.checked !== this.props.checked) {
      this.setState({ checked: this.props.checked });
    }
  }

  // onBlur() {
  //   this.props.onBlur &&
  //     typeof this.props.onBlur === 'function' &&
  //     this.props.onBlur();
  // }

  // onFocus() {
  //   this.props.onFocus &&
  //     typeof this.props.onFocus === 'function' &&
  //     this.props.onFocus();
  // }

  // TODO: this is relying on an HTML Event so is a problem for Native
  // onChange(event) {
  //   const { checked } = event.target;
  //   this.props.onChange &&
  //     typeof this.props.onChange === 'function' &&
  //     this.props.onChange(event);

  //   this.setState({ checked });
  // }

  // * Core should only care about things that are not specific to an environment, this includes the shape and type of events
  onChange(checked: boolean) {
    this.setState({ checked });
  }

  render() {
    return this.props.children({
      ...this.state,
      ...this.props,
      id: this.state.id,
      // onBlur: this.onBlur,
      onChange: this.onChange,
      // onFocus: this.onFocus,
      checked: this.state.checked
    });
  }
}
