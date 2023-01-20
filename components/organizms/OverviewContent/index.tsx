import React from "react";
import Category from "./Category";
import TableRow from "./TableRow";

export default function OverviewContent() {
	return (
		<main className="main-wrapper">
			<div className="ps-lg-0">
				<h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
				<div className="top-up-categories mb-30">
					<p className="text-lg fw-medium color-palette-1 mb-14">Top Up Categories</p>
					<div className="main-content">
						<div className="row">
							<Category icon="ic-desktop" nominal={18000500}>
								<p className="color-palette-1 mb-0 ms-12">
									Game
									<br /> Desktop
								</p>
							</Category>
							<Category icon="ic-mobile" nominal={18000500}>
								<p className="color-palette-1 mb-0 ms-12">
									Game
									<br /> Mobile
								</p>
							</Category>
						</div>
					</div>
				</div>
				<div className="latest-transaction">
					<p className="text-lg fw-medium color-palette-1 mb-14">Latest Transactions</p>
					<div className="main-content main-content-table overflow-auto">
						<table className="table table-borderless">
							<thead>
								<tr className="color-palette-1">
									<th className="text-start" scope="col">
										Game
									</th>
									<th scope="col">Item</th>
									<th scope="col">Price</th>
									<th scope="col">Status</th>
								</tr>
							</thead>
							<tbody>
								<TableRow
									img="overview-1"
									title="Mobile Legends: The New Battle 2021"
									category="Desktop"
									item="200 Gold"
									price={111}
									status="Pending"
								/>
								<TableRow
									img="overview-2"
									title="Mobile Legends: The New Battle 2021"
									category="Desktop"
									item="200 Gold"
									price={111}
									status="Pending"
								/>
								<TableRow
									img="overview-3"
									title="Mobile Legends: The New Battle 2021"
									category="Desktop"
									item="200 Gold"
									price={111}
									status="Failed"
								/>
								<TableRow
									img="overview-4"
									title="Mobile Legends: The New Battle 2021"
									category="Desktop"
									item="200 Gold"
									price={111}
									status="Success"
								/>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</main>
	);
}
