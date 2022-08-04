import { DynamicModule } from '@nestjs/common';
import { MEILI_MODULE_OPTIONS } from './constants';
import { MeiliSearchModule } from './meilisearch.module';

describe('MeilisearchModule', () => {
  it('should validate that module exists', async () => {
    expect(MeiliSearchModule).toBeDefined();
  });

  it('should register the module with options', async () => {
    const registeredModule: DynamicModule = MeiliSearchModule.forRoot({
      host: `http://${process.env.MEILI_HOST || 'localhost'}:7700`,
      apiKey: '12131211',
    });

    expect(registeredModule).toBeDefined();
    expect(typeof registeredModule.module).toBeDefined();
    expect(registeredModule.providers.length).toBeGreaterThan(0);
    const meiliOptionsProvider: any = registeredModule.providers[0];
    expect(meiliOptionsProvider.provide).toBe(MEILI_MODULE_OPTIONS);
    expect(meiliOptionsProvider.useValue).toBeDefined();
  });

  it('should register the module with async options', async () => {
    const registeredModule: DynamicModule = MeiliSearchModule.forRootAsync({
      useFactory: () => ({
        host: `http://${process.env.MEILI_HOST || 'localhost'}:7700`,
        apiKey: '12131211',
      }),
    });

    expect(registeredModule).toBeDefined();
    expect(typeof registeredModule.module).toBeDefined();
    expect(registeredModule.providers.length).toBeGreaterThan(0);
    const optionsProvider: any = registeredModule.providers[0];
    expect(optionsProvider.provide).toBe(MEILI_MODULE_OPTIONS);
    expect(optionsProvider.useFactory).toBeDefined();
    expect(optionsProvider.inject).toBeDefined();
  });
});
