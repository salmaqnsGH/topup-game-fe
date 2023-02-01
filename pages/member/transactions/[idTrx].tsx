import TransactionDetailContent from "@/components/organizms/TransactionDetailContent";
import { HistoryTransactionTypes, JWTPayloadTypes, UserTypes } from "@/services/data-types";
import React from "react";
import jwt_decode from "jwt-decode";
import { getTransactionDetail } from "@/services/member";

interface TransactionDetailProps {
	transactionDetail: HistoryTransactionTypes;
}

export default function TransactionDetail(props: TransactionDetailProps) {
	const { transactionDetail } = props;

	return (
		<section className="transactions-detail overflow-auto">
			<TransactionDetailContent data={transactionDetail} />
		</section>
	);
}

interface GetServerSideProps {
	req: {
		cookies: {
			token: string;
		};
	};
	params: {
		idTrx: string;
	};
}

export async function getServerSideProps({ req, params }: GetServerSideProps) {
	const { idTrx } = params;
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
	// const payload: JWTPayloadTypes = jwt_decode(jwtToken);
	// const user: UserTypes = payload.player;

	const response = await getTransactionDetail(idTrx, jwtToken);
	return {
		props: {
			transactionDetail: response.data,
		},
	};
}
