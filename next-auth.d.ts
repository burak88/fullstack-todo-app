import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string; // id alanını ekliyoruz
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }

  interface User {
    id: string; // Eğer user nesnesine de id eklemek istiyorsanız
  }
}
