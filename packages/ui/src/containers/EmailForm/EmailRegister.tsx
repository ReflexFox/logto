import { SignInIdentifier } from '@logto/schemas';

import useSendVerificationCode from '@/hooks/use-send-verification-code';
import { UserFlow } from '@/types';

import EmailForm from './EmailForm';

type Props = {
  className?: string;
  // eslint-disable-next-line react/boolean-prop-naming
  autoFocus?: boolean;
};

const EmailRegister = (props: Props) => {
  const { onSubmit, errorMessage, clearErrorMessage } = useSendVerificationCode(
    UserFlow.register,
    SignInIdentifier.Email
  );

  return (
    <EmailForm
      onSubmit={onSubmit}
      {...props}
      submitButtonText="action.create_account"
      errorMessage={errorMessage}
      clearErrorMessage={clearErrorMessage}
    />
  );
};

export default EmailRegister;
