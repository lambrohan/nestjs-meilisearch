import { createConnectionFactory } from '../providers';
import MeiliSearch from 'meilisearch';

describe('when called', () => {
  it('it should provide meilisearch client', () => {
    const connectionProvider = createConnectionFactory({
      host: `http://${process.env.MEILI_HOST || 'localhost'}:7700`,
      apiKey: '12131211',
    });
    expect(connectionProvider).toBeDefined();
    expect(connectionProvider).toBeInstanceOf(MeiliSearch);
    const version = connectionProvider.getVersion();
    expect(version).toBeDefined();
  });
});
