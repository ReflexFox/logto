import { ConnectorType, SignInIdentifier } from '@logto/schemas';

import { SignUpIdentifier } from './types';

export const signUpIdentifiers = Object.values(SignUpIdentifier);

export const signInIdentifiers = Object.values(SignInIdentifier);

export const signUpIdentifiersMapping: { [key in SignUpIdentifier]: SignInIdentifier[] } = {
  [SignUpIdentifier.Username]: [SignInIdentifier.Username],
  [SignUpIdentifier.Email]: [SignInIdentifier.Email],
  [SignUpIdentifier.Phone]: [SignInIdentifier.Phone],
  [SignUpIdentifier.EmailOrSms]: [SignInIdentifier.Email, SignInIdentifier.Phone],
  [SignUpIdentifier.None]: [],
};

export const identifierRequiredConnectorMapping: {
  [key in SignInIdentifier]?: ConnectorType;
} = {
  [SignInIdentifier.Email]: ConnectorType.Email,
  [SignInIdentifier.Phone]: ConnectorType.Sms,
};
