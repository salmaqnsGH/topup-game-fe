import React from "react";
import Image from "next/image";
import Menu from "./Menu";
import Auth from "./Auth";
import ToggleMenu from "./ToggleMenu";

export default function Navbar() {
	return (
		<>
			<section>
				<nav className="navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50">
					<div className="container-fluid">
						<a className="navbar-brand" href="/#">
							<Image src="/icon/logo.svg" width={60} height={60} alt={"logo"} />
						</a>
						<ToggleMenu />
						<div className="collapse navbar-collapse" id="navbarNav">
							<ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
								<Menu title={"Home"} active href={"/"} />
								<Menu title={"Games"} href={"/"} />
								<Menu title={"Rewards"} href={"/"} />
								<Menu title={"Discover"} href={"/"} />
								<Menu title={"Global Rank"} href={"/"} />
								<Auth isLogin />
							</ul>
						</div>
					</div>
				</nav>
			</section>
			<script
				src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
				integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
				crossOrigin="anonymous"></script>
		</>
	);
}
