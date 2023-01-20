import OverviewContent from "@/components/organizms/OverviewContent";
import Sidebar from "@/components/organizms/Sidebar";
import React from "react";

export default function Member() {
	return (
		<section className="overview overflow-auto">
			<Sidebar activeMenu="overview" />
			<OverviewContent />
		</section>
	);
}
