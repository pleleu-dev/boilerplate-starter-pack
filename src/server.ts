/* eslint-disable no-console */
import dotenv from 'dotenv';
import { ApolloServer, ApolloError } from 'apollo-server';
import SessionAPI from "./dataSources/sessions";
import UserAPI from "./dataSources/user";


import typeDefs from './schema';

import resolvers from './resolvers';

dotenv.config();
    
const dataSources = () =>({
    sessionAPI : new SessionAPI(),
    userAPI : new UserAPI(process.env.CLIENT_URL)
})

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources,
    debug : false,
    formatError : (err)=>{
        if(err.extensions.code === "INTERNAL_SERVER_ERROR"){
            return new ApolloError('We are some trouble', "ERROR", { token : "id3435" })
        }
        return err;
    }
});

server
.listen({
    port : process.env.PORT || 5000
})
.then(({ url })=>{
    console.log(`QraphQL runnning at : ${url}`)
})