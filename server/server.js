const { ApolloServer } = require("apollo-server");

const typeDefs = `

    type Item {
        id: Int
        type: String
        description: String
    }

    type Query {
        items (type: String): [Item]
    }

`;

const items = [
    { id: 1, type: "sufix", description: "aaa" },
    { id: 2, type: "prefix", description: "bbb" }
]

const resolvers = {
    Query: {
        items(_, args) {
            return items.filter(item => item.type === args.type);
        },
    }
};


const server = new ApolloServer({ typeDefs, resolvers });
server.listen();