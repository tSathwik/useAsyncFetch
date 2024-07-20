# use-async-fetch

A custom React hook for fetching data asynchronously.

## Installation

You can install the package using npm:

```
npm install use-async-fetch
```

Or using yarn:

```
yarn add use-async-fetch
```

## Usage

```
import React from 'react';
import useAsyncFetch from 'use-async-fetch';

const DataFetchingComponent = () => {
  const { data, isFetching, error } = useAsyncFetch('https://api.example.com/data');

  if (isFetching) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default DataFetchingComponent;

```

## API

### useAsyncFetch(url)

Parameters
url (string): The URL to fetch data from.
Returns
An object with the following properties:

data: The data fetched from the URL. Initially null.
isFetching (boolean): true if the data is currently being fetched, false otherwise.
error: Any error encountered during the fetch. Initially null.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any bugs or feature requests.
