import { createConnectionFactory } from '../providers';
import MeiliSearch from 'meilisearch';

describe('when called', () => {
  it('it should provide meilisearch client', () => {
    const connectionProvider = createConnectionFactory({
      host: 'http://127.0.0.1:7700',
      apiKey: '123456',
    });
    expect(connectionProvider).toBeDefined();
    expect(connectionProvider).toBeInstanceOf(MeiliSearch);
    const version = connectionProvider.getVersion();
    expect(version).toBeDefined();
  });
});
