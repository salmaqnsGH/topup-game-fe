import Cookies from "js-cookie";
import router from "next/router";
import React from "react";
import Footer from "./Footer";
import MenuItem from "./MenuItem";
import Profile from "./Profile";

interface SidebarProps {
	activeMenu: "overview" | "transactions" | "settings";
}

const onLogout = () => {
	Cookies.remove("token");
	router.push("/sign-in");
};

export default function Sidebar(props: SidebarProps) {
	const { activeMenu } = props;

	return (
		<section className="sidebar">
			<div className="content pt-50 pb-30 ps-30">
				<Profile />
				<div className="menus">
					<MenuItem title="Overview" href="/member" icon="ic-menu-overview" active={activeMenu === "overview"} />
					<MenuItem
						title="Transactions"
						href="/member/transactions"
						icon="ic-menu-transactions"
						active={activeMenu === "transactions"}
					/>
					<MenuItem title="Messages" href="/member" icon="ic-menu-messages" />
					<MenuItem title="Card" href="/member" icon="ic-menu-card" />
					<MenuItem title="Rewards" href="/member" icon="ic-menu-rewards" />
					<MenuItem
						title="Settings"
						href="/member/edit-profile"
						icon="ic-menu-settings"
						active={activeMenu === "settings"}
					/>
					<MenuItem onClick={onLogout} title="Log Out" icon="ic-menu-logout" />
				</div>
				<Footer />
			</div>
		</section>
	);
}
