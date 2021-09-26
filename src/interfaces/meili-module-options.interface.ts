import { ModuleMetadata, Provider, Type } from '@nestjs/common';
import { Config } from 'meilisearch';

export interface MeiliModuleOptions {
  host: string;
  apiKey?: string;
  headers?: object;
}
export interface MeiliModuleOptionsFactory {
  createMeiliOptions(): Promise<Config> | Config;
}

export interface MeiliModuleAsyncOptions
  extends Pick<ModuleMetadata, 'imports'> {
  useExisting?: Type<MeiliModuleOptionsFactory>;
  useClass?: Type<MeiliModuleOptionsFactory>;
  useFactory?: (...args: any[]) => Promise<Config> | Config;
  inject?: any[];
  extraProviders?: Provider[];
}
