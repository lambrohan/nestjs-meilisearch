import { meiliToken } from '../constants';
import { MeiliSearch, Config } from 'meilisearch';
export function createMeiliProvider(options: Config) {
  if (!options?.host) {
    options = {
      host: 'http://127.0.0.1:7700',
      apiKey: '',
    };
  }
  return {
    provide: meiliToken,
    useValue: new MeiliSearch(options),
  };
}
