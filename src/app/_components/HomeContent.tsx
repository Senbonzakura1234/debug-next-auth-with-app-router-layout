"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import React from "react";

const signInUrl = "/api/auth/signin";

export default function HomeContent() {
	const { data: session } = useSession();

	const pathname = usePathname();

	if (session)
		return (
			<>
				<p>Welcome back {session.user?.name}</p>
				<button onClick={() => signOut()}>Sign Out</button>
			</>
		);

	if (pathname === signInUrl) return null;

	return <button onClick={() => signIn()}>Sign In</button>;
}
