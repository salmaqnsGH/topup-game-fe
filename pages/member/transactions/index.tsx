import Sidebar from "@/components/organizms/Sidebar";
import TransactionContent from "@/components/organizms/TransactionContent";
import { JWTPayloadTypes, UserTypes } from "@/services/data-types";
import React from "react";
import jwt_decode from "jwt-decode";

export default function Transactions() {
	return (
		<section className="transactions overflow-auto">
			<Sidebar activeMenu="transactions" />
			<TransactionContent />
		</section>
	);
}

interface GetServerSideProps {
	req: {
		cookies: {
			token: string;
		};
	};
}

export async function getServerSideProps({ req }: GetServerSideProps) {
	const { token } = req.cookies;

	if (!token) {
		return {
			redirect: {
				destination: "/sign-in",
				permanent: false,
			},
		};
	}

	const jwtToken = Buffer.from(token, "base64").toString("ascii");
	const payload: JWTPayloadTypes = jwt_decode(jwtToken);
	const user: UserTypes = payload.player;

	return {
		props: {
			user: user,
		},
	};
}
