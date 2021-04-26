import { DynamicModule, Global, Module } from '@nestjs/common'
import { Config } from 'meilisearch'
import { createMeiliProvider } from './providers'
import { MeiliSearchService } from './services'

@Global()
@Module({})
export class MeiliSearchModule {
	public static forRoot(options: Config): DynamicModule {
		const provider = createMeiliProvider(options)
		return {
			module: MeiliSearchModule,
			providers: [provider, MeiliSearchService],
			exports: [provider, MeiliSearchService],
		}
	}
}
