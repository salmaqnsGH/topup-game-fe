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
