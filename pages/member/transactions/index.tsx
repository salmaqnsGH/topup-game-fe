import Sidebar from "@/components/organizms/Sidebar";
import TransactionContent from "@/components/organizms/TransactionContent";
import React from "react";

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

	return {
		props: {},
	};
}
