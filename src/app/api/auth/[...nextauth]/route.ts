import type { AuthOptions } from "next-auth";
import NextAuth from "next-auth";
import Github from "next-auth/providers/github";

export const authOptions: AuthOptions = {
	providers: [Github({ clientId: "", clientSecret: "" })],
	callbacks: {
		session: ({ session }) => session,
	},
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
