import ApolloClient from 'apollo-boost';

const serverDomain = '';

function getGraphqlClient(): ApolloClient<{}> {
  return new ApolloClient({
    uri: `${serverDomain}/graphql`
  });
}

const config = {
  serverDomain,
  getGraphqlClient
};

export default config;
