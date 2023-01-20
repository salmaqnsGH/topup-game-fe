import React from "react";
import Footer from "./Footer";
import MenuItem from "./MenuItem";
import Profile from "./Profile";

export default function Sidebar() {
	return (
		<section className="sidebar">
			<div className="content pt-50 pb-30 ps-30">
				<Profile />
				<div className="menus">
					<MenuItem title="Overview" href="/overview" icon="ic-menu-overview" active />
					<MenuItem title="Transactions" href="/transactions" icon="ic-menu-transactions" />
					<MenuItem title="Messages" href="/messages" icon="ic-menu-messages" />
					<MenuItem title="Card" href="/card" icon="ic-menu-card" />
					<MenuItem title="Rewards" href="/reward" icon="ic-menu-rewards" />
					<MenuItem title="Settings" href="/setting" icon="ic-menu-settings" />
					<MenuItem title="Log Out" href="/login" icon="ic-menu-logout" />
				</div>
				<Footer />
			</div>
		</section>
	);
}
