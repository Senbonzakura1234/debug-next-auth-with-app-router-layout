import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
	server: {
		NEXTAUTH_URL: z.string().catch(""),
		NEXTAUTH_SECRET: z.string().catch(""),
	},
	runtimeEnv: {
		NEXTAUTH_URL: process.env.NEXTAUTH_URL,
		NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
	},
	skipValidation: !!process.env.SKIP_ENV_VALIDATION,
});
