import { Injectable } from '@nestjs/common';
import { Document, EnqueuedUpdate, MeiliSearch } from 'meilisearch';
import { InjectMeiliSearch } from '../decorators';

@Injectable()
export class MeiliSearchService {
  constructor(
    @InjectMeiliSearch() private readonly meiliSearchClient: MeiliSearch,
  ) {}

  async addDocuments(
    index: string,
    documents: Array<Document<any>>,
  ): Promise<EnqueuedUpdate> {
    return await this.meiliSearchClient.index(index).addDocuments(documents);
  }

  async getDocuments(index: string): Promise<any> {
    return await (await this.meiliSearchClient.getIndex(index)).getDocuments();
  }

  async updateDocuments(
    index: string,
    documents: Array<Document<any>>,
  ): Promise<EnqueuedUpdate> {
    return await this.meiliSearchClient.index(index).updateDocuments(documents);
  }

  async deleteDocument(index: string, docId: string): Promise<EnqueuedUpdate> {
    return await this.meiliSearchClient.index(index).deleteDocument(docId);
  }
}
