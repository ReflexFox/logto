import type { CreateApplication } from '../db-entries/index.js';
import { ApplicationType } from '../db-entries/index.js';
import { defaultTenantId } from './tenant.js';

/**
 * The fixed application ID for Admin Console.
 *
 * This built-in application does not belong to any tenant in the OSS version.
 */
export const adminConsoleApplicationId = 'admin-console';

export const demoAppApplicationId = 'demo-app';

export const createDemoAppApplication = (secret: string): Readonly<CreateApplication> => ({
  tenantId: defaultTenantId,
  id: demoAppApplicationId,
  secret,
  name: 'Demo App',
  description: 'Logto demo app.',
  type: ApplicationType.SPA,
  oidcClientMetadata: { redirectUris: [], postLogoutRedirectUris: [] },
});
