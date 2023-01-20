import ReachedItem from "@/components/molecules/ReachedItems";
import Devider from "@/components/molecules/ReachedItems/Devider";
import React from "react";

export default function Reached() {
	return (
		<section className="reached pt-50 pb-50">
			<div className="container-fluid">
				<div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
					<ReachedItem statistic="290M+" title="Players Top Up" />

					<Devider />
					<ReachedItem statistic="12.500" title="Games Available" />

					<Devider />
					<ReachedItem statistic="99,9%" title="Happy Players" />

					<Devider />
					<ReachedItem statistic="4.7" title="Rating Worldwide" />
				</div>
			</div>
		</section>
	);
}
