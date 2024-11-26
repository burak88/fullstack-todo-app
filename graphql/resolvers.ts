import { Context } from "@/app/api/graphql/route";
import { DateScalar, DateTimeScalar, TimeScalar } from "graphql-date-scalars";

export const resolvers = {
  Date: DateScalar,
  Time: TimeScalar,
  DateTime: DateTimeScalar,

  Query: {
    // get all workspaces
    workspaces: async (_parent: any, _arg: any, context: Context) => {
      return await context.prisma.workspace.findMany();
    },
    //get post by id
    // post: async (_parent: any, args: any, context: Context) => {
    // 	return await context.prisma.post.findUnique({
    // 		where: {
    // 			id: args.id,
    // 		},
    // 	});
    // },
    // get all novels
    // posts: async (_parent: any, _args: any, context: Context) => {
    // 	return await context.prisma.post.findMany()
    // },
  },
  // nested resolve function to get auhtors in novels
  // Novel: {
  // 	authors: async (parent: any, _args: any, context: Context) => {
  // 		return await context.prisma.author.findMany({
  // 			where: {
  // 				novelId: parent.id,
  // 			},
  // 		});
  // 	},
  // },
  Mutation: {
    // create workspace
    createWorkspace: async (_parent: any, args: any, context: Context) => {
      try {
        if (!args.name || !args.userId) {
          throw new Error("Name and UserId are required fields.");
        }
        const workspace = await context.prisma.workspace.create({
          data: {
            name: args.name,
            description: args.description || null,
            userId: args.userId,
          },
        });

        return workspace;
      } catch (error) {
        throw new Error("An error occurred while creating the workspace.");
      }
    },

    // add novel
    // addPost: async (_parent: any, args: any, context: Context) => {
    // 	return await context.prisma.post.create({
    // 		data: {
    // 			title: args.title,
    //             content : args.content,
    //             published : args.published
    // 		},
    // 	});
    // },
    // update novel
    // updateNovel: async (_parent: any, args: any, context: Context) => {
    // 	return await context.prisma.novel.update({
    // 		where: {
    // 			id: args.id,
    // 		},
    // 		data: {
    // 			title: args.title,
    // 			image: args.image,
    // 		},
    // 	});
    // },

    // // delete novel
    // deleteNovel: async (_parent: any, args: any, context: Context) => {
    // 	return await context.prisma.novel.delete({
    // 		where: {
    // 			id: args.id,
    // 		},
    // 	});
    // },

    // // Author Mutations

    // // add author
    // addAuthor: async (_parent: any, args: any, context: Context) => {
    // 	return await context.prisma.author.create({
    // 		data: {
    // 			novelId: args.novelId,
    // 			name: args.name,
    // 		},
    // 	});
    // },
    // // delete author
    // deleteAuthor: async (_parent: any, args: any, context: Context) => {
    // 	return await context.prisma.author.delete({
    // 		where: {
    // 			id: args.id,
    // 		},
    // 	});
    // },
  },
};
