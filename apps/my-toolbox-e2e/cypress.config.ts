import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run my-toolbox:serve:development',
        production: 'nx run my-toolbox:serve:production',
      },
      ciWebServerCommand: 'nx run my-toolbox:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
