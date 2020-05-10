import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:4000", //movieql실행 후 진행
  resolvers:{
    Movie:{
      isLiked:()=>false
    },
    Mutation:{
      likeMovie:(_,{ id}, {cache})=>{
        cache.writeData({id: `Movie:${id}`, data:{
          isLike: true
        }})
      }
    }
  }
});

export default client;