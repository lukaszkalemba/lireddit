import { AppProps } from 'next/app';
import { createClient, dedupExchange, fetchExchange, Provider } from 'urql';
import { cacheExchange, QueryInput, Cache } from '@urql/exchange-graphcache';
import { ChakraProvider } from '@chakra-ui/react';
import {
  LoginMutation,
  MeDocument,
  MeQuery,
  RegisterMutation,
} from 'generated/graphql';
import theme from 'theme';

function updateQuery<Result, Query>(
  cache: Cache,
  qi: QueryInput,
  result: any,
  fn: (r: Result, q: Query) => Query
) {
  return cache.updateQuery(qi, (data) => fn(result, data as any) as any);
}

const client = createClient({
  url: 'http://localhost:5000/graphql',
  fetchOptions: {
    credentials: 'include',
  },
  exchanges: [
    dedupExchange,
    cacheExchange({
      updates: {
        Mutation: {
          loginUser: (_result, args, cache, info) => {
            updateQuery<LoginMutation, MeQuery>(
              cache,
              { query: MeDocument },
              _result,
              (result, query) => {
                if (result.loginUser.user) {
                  return query;
                } else {
                  return {
                    me: result.loginUser.user,
                  };
                }
              }
            );
          },
          registerUser: (_result, args, cache, info) => {
            updateQuery<RegisterMutation, MeQuery>(
              cache,
              { query: MeDocument },
              _result,
              (result, query) => {
                if (result.registerUser.user) {
                  return query;
                } else {
                  return {
                    me: result.registerUser.user,
                  };
                }
              }
            );
          },
        },
      },
    }),
    fetchExchange,
  ],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider value={client}>
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
