import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:4000" //movieql실행 후 진행
});

export default client;