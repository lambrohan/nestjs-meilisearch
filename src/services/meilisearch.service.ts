import { Injectable } from '@nestjs/common';
import {
  DocumentOptions,
  DocumentsQuery,
  EnqueuedTask,
  MeiliSearch,
} from 'meilisearch';
import { InjectMeiliSearch } from '../decorators';

@Injectable()
export class MeiliSearchService {
  constructor(
    @InjectMeiliSearch() private readonly meiliSearchClient: MeiliSearch,
  ) {}

  async addDocuments(
    index: string,
    documents: Array<Record<string, any>>,
    options?: DocumentOptions,
  ): Promise<EnqueuedTask> {
    return await this.meiliSearchClient
      .index(index)
      .addDocuments(documents, options);
  }

  async getDocuments(
    index: string,
    parameters?: DocumentsQuery<Record<string, any>>,
  ): Promise<any> {
    return await (
      await this.meiliSearchClient.getIndex(index)
    ).getDocuments(parameters);
  }

  async updateDocuments(
    index: string,
    documents: Array<Partial<Record<string, any>>>,
  ): Promise<EnqueuedTask> {
    return await this.meiliSearchClient.index(index).updateDocuments(documents);
  }

  async deleteDocument(index: string, docId: string): Promise<EnqueuedTask> {
    return await this.meiliSearchClient.index(index).deleteDocument(docId);
  }
}
