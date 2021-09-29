## About

This package is a simple wrapper around [meilisearch-js](https://github.com/meilisearch/meilisearch-js).

## Installation

This package requires `meilisearch` dependency to work properly.

```bash
yarn add nestjs-meilisearch meilisearch
```

## Getting Started

The simplest way to use `nestjs-meilisearch` is to use `MeiliSearchModule.forRoot` or `MeiliSearchModule.forRootAsync`

```typescript
import { Module } from '@nestjs-common';
import { MeiliSearchModule } from 'nestjs-meilisearch';

@Module({
  imports: [
    MeiliSearchModule.forRoot({
      host: 'http://127.0.0.1:7700',
      apiKey: 'masterKey',
    }),
  ],

  // or async
  MeiliSearchModule.forRootAsync({
    useFactory: () => ({
      host: 'http://127.0.0.1:7700',
      apiKey: 'masterKey',
    }),
  }),
})
export class AppModule {}
```

use `@InjectMeiliSearch()` decorator in any injectables to get a `MeiliSearch` client inside class

```typescript
import { Injectable } from '@nestjs/common';
import { InjectMeiliSearch } from 'nestjs-meilisearch';
import { MeiliSearch } from 'meilisearch';
@Injectable()
export class TestService {
  public constructor(
    @InjectMeiliSearch() private readonly meiliSearch: MeiliSearch,
  ) {}
}
```

You can also use `MeiliSearchService` to `add`,`update` and `delete` documents. I'm planning to add further operations to this service.

## License

Distributed under the MIT License. See `LICENSE` for more information.
