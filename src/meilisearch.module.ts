import { DynamicModule, Global, Module, Provider } from '@nestjs/common';
import { createConnectionFactory, createAsyncProviders } from 'src/providers';
import { MEILI_CLIENT, MEILI_MODULE_OPTIONS } from 'src/constants';
import { MeiliModuleAsyncOptions, MeiliModuleOptions } from 'src/constants';
import { MeiliSearchService } from './services';

@Global()
@Module({})
export class MeiliSearchModule {
  public static forRoot(options: MeiliModuleOptions): DynamicModule {
    const meiliOptions: Provider = {
      provide: MEILI_MODULE_OPTIONS,
      useValue: options,
    };

    const connectionProvider: Provider = {
      provide: MEILI_CLIENT,
      useFactory: async () =>
        await createConnectionFactory({
          host: 'http://127.0.0.1:7700',
          apiKey: '12131211',
        }),
    };
    return {
      module: MeiliSearchModule,
      providers: [meiliOptions, connectionProvider, MeiliSearchService],
      exports: [connectionProvider, MeiliSearchService],
    };
  }

  public static forRootAsync(options: MeiliModuleAsyncOptions): DynamicModule {
    const connectionProvider: Provider = {
      provide: MEILI_CLIENT,
      useFactory: async (meiliOptions: MeiliModuleOptions) =>
        await createConnectionFactory(meiliOptions),
      inject: [MEILI_MODULE_OPTIONS],
    };

    const asyncProviders = createAsyncProviders(options);

    return {
      module: MeiliSearchModule,
      imports: options.imports || [],
      providers: [...asyncProviders, connectionProvider, MeiliSearchService],
      exports: [connectionProvider, MeiliSearchService],
    };
  }
}
