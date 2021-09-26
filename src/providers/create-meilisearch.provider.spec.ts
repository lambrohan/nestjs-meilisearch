import { createConnectionFactory } from '../providers';
import { MEILI_CLIENT } from '../constants';
import MeiliSearch from 'meilisearch';

describe('when called', () => {
  it('it should provide meilisearch client', () => {
    const connectionProvider = createConnectionFactory({
      host: 'http://127.0.0.1:7700',
      apiKey: '12131211',
    });
    expect(connectionProvider).toBeDefined();
    expect(connectionProvider).toBeInstanceOf(MeiliSearch);
    const version = connectionProvider.version();
    expect(version).toBeDefined();
  });
});
