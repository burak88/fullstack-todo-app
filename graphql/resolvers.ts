import { Context } from "@/app/api/graphql/route";

export const resolvers = {
  Query: {
    posts: async (_parent: any, _args: any, context: Context) => {
      return await context.prisma.post.findMany();
    },
  },
  Mutation: {
    addPost: async (_parent: any, args: any, context: Context) => {
      return await context.prisma.post.create({
        data: {
          title: args.title,
          content: args.content,
          published: args.published,
        },
      });
    },
  },
};
