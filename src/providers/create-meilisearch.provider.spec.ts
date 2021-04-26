import { meiliToken } from '../constants'
import { createMeiliProvider } from './create-meilisearch.provider'

describe('when called', () => {
	it('it shoud use the correct token', () => {
		const provider = createMeiliProvider({
			host: 'http://127.0.0.1:7700',
			apiKey: '12131211',
		})
		expect(provider).toHaveProperty('provide', meiliToken)
	})

	it('should provide a meilisearch client', async () => {
		const provider = createMeiliProvider({
			host: 'http://127.0.0.1:7700',
			apiKey: '12131211',
		})
		const version = await provider.useValue.version()
		expect(provider).toHaveProperty('useValue')
		expect(version).toBeDefined()
	})
})
