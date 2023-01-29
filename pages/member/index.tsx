import OverviewContent from "@/components/organizms/OverviewContent";
import Sidebar from "@/components/organizms/Sidebar";
import React from "react";
import jwt_decode from "jwt-decode";
import { JWTPayloadTypes, UserTypes } from "@/services/data-types";

export default function Member() {
	return (
		<section className="overview overflow-auto">
			<Sidebar activeMenu="overview" />
			<OverviewContent />
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
