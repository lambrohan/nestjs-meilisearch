import { ModuleMetadata, Provider, Type } from '@nestjs/common';
import { Config } from 'meilisearch';

export interface MeiliModuleOptions extends Config {}

export interface MeiliModuleOptionsFactory {
  createMeiliOptions(): Promise<MeiliModuleOptions> | MeiliModuleOptions;
}

export interface MeiliModuleAsyncOptions
  extends Pick<ModuleMetadata, 'imports'> {
  useExisting?: Type<MeiliModuleOptionsFactory>;
  useClass?: Type<MeiliModuleOptionsFactory>;
  useFactory?: (
    ...args: any[]
  ) => Promise<MeiliModuleOptions> | MeiliModuleOptions;
  inject?: any[];
  extraProviders?: Provider[];
}
