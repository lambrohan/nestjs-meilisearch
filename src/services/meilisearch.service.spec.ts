import { Test, TestingModule } from '@nestjs/testing'
import { MeiliSearchModule } from 'src/meilisearch.module'
import { MeiliSearchService } from './index'

describe('MeiliSearchService', () => {
	let service: MeiliSearchService

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			imports: [
				MeiliSearchModule.forRoot({
					host: 'http://127.0.0.1:7700',
					apiKey: '12131211',
				}),
			],
			providers: [MeiliSearchService],
		}).compile()
		service = module.get<MeiliSearchService>(MeiliSearchService)
	})

	it('should be defined', () => {
		expect(service).toBeDefined()
	})

	it('should add the test document to jest index', async () => {
		try {
			const res = await service.addDocuments('jest', [
				{ id: '1', message: 'test' },
			])
			expect(res).toBeDefined()
		} catch (error) {
			expect(error).toThrowError(error)
		}
	})

	it('should update the test document from jest index', async () => {
		try {
			const res = await service.updateDocuments('jest', [
				{
					id: '1',
					message: 'test for update operation',
				},
			])
			expect(res).toBeDefined()
		} catch (error) {
			expect(error).toThrowError(error)
		}
	})

	it('should delete the test document from jest index', async () => {
		try {
			const res = await service.deleteDocument('jest', '1')
			expect(res).toBeDefined()
		} catch (error) {
			expect(error).toThrowError(error)
		}
	})
})
