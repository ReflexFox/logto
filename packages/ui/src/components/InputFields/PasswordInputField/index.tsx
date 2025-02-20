import type { Nullable } from '@silverhand/essentials';
import type { Ref } from 'react';
import { forwardRef, useRef, useImperativeHandle } from 'react';

import PasswordHideIcon from '@/assets/icons/password-hide-icon.svg';
import PasswordShowIcon from '@/assets/icons/password-show-icon.svg';
import IconButton from '@/components/Button/IconButton';
import useToggle from '@/hooks/use-toggle';
import useUpdateEffect from '@/hooks/use-update-effect';

import InputField from '../InputField';
import type { Props as InputFieldProps } from '../InputField';

type Props = Omit<InputFieldProps, 'type' | 'suffix' | 'isSuffixFocusVisible'>;

const PasswordInputField = (props: Props, forwardRef: Ref<Nullable<HTMLInputElement>>) => {
  const [showPassword, toggleShowPassword] = useToggle(false);
  const innerRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(forwardRef, () => innerRef.current);

  // Refocus and move cursor to the end of the input field after password visibility is toggled
  useUpdateEffect(() => {
    if (innerRef.current) {
      const { length } = innerRef.current.value;
      innerRef.current.focus();
      innerRef.current.setSelectionRange(length, length);
    }
  }, [showPassword]);

  return (
    <InputField
      isSuffixFocusVisible
      type={showPassword ? 'text' : 'password'}
      suffix={
        <IconButton onClick={toggleShowPassword}>
          {showPassword ? <PasswordShowIcon /> : <PasswordHideIcon />}
        </IconButton>
      }
      {...props}
      ref={innerRef}
    />
  );
};

export default forwardRef(PasswordInputField);
