import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { typeDefs } from "@/graphql/schema";
import { PrismaClient } from "@prisma/client";
import { resolvers } from "@/graphql/resolvers";
import prisma from "@/app/lib/prisma";

export type Context = {
  prisma: PrismaClient;
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Start Apollo Server and create a handler
const handler = startServerAndCreateNextHandler(server, {
  context: async (req, res) => ({ req, res, prisma }),
});

export async function POST(req: Request) {
  return handler(req);
}

export async function GET(req: Request) {
  return handler(req);
}
