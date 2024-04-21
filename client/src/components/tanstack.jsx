import { useQuery, useMutation } from "@tanstack/react-query";

// QueryClient -> manages the cache and state of the queries
// QueryClientProvider -> provides the client to the app
// useQuery -> fetch data : takes a key, fetcher function (promise), and options
// useMutation -> update data : takes a key, mutation function (promise), and options
// Once the data has been succesfully mutated, just invalidate the query key
// invalidating query key will refetch the data