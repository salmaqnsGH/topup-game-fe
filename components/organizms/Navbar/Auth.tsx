import Cookies from "js-cookie";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { JWTPayloadTypes, UserTypes } from "@/services/data-types";
import { useRouter } from "next/router";

const IMAGE_API = process.env.NEXT_PUBLIC_IMAGE;

export default function Auth() {
	const [isLogin, setIsLogin] = useState(false);
	const [user, setUser] = useState({
		id: "",
		avatar: "",
		email: "",
		name: "",
		username: "",
	});
	const router = useRouter();

	useEffect(() => {
		const token = Cookies.get("token");

		if (token) {
			const jwtToken = atob(token!);
			const payload: JWTPayloadTypes = jwt_decode(jwtToken);
			const user: UserTypes = payload.player;

			setUser(user);
			setIsLogin(true);
		}
	}, []);

	const onLogout = () => {
		Cookies.remove("token");
		setIsLogin(false);
		router.push("/");
	};

	const profilePhoto = user.avatar ? `${IMAGE_API}/${user.avatar}` : "/img/avatar-1.png";

	if (!isLogin) {
		return (
			<li className="nav-item my-auto">
				<Link
					href={"/sign-in"}
					className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill"
					role="button">
					Sign In
				</Link>
			</li>
		);
	}
	return (
		<>
			<li className="nav-item my-auto dropdown d-flex">
				<div className="vertical-line d-lg-block d-none"></div>
				<div>
					<Link
						className="dropdown-toggle ms-lg-40"
						href="#"
						role="button"
						id="dropdownMenuLink"
						data-bs-toggle="dropdown"
						aria-expanded="false">
						{/* <img src={`${IMAGE_API}/${user.avatar}`} className="rounded-circle" width="40" height="40" alt="" /> */}
						<img src={profilePhoto} className="rounded-circle" width="40" height="40" alt="" />
					</Link>

					<ul className="dropdown-menu border-0" aria-labelledby="dropdownMenuLink">
						<li>
							<Link className="dropdown-item text-lg color-palette-2" href="/member">
								My Profile
							</Link>
						</li>
						<li>
							<Link className="dropdown-item text-lg color-palette-2" href="#">
								Wallet
							</Link>
						</li>
						<li>
							<Link className="dropdown-item text-lg color-palette-2" href="member/edit-profile">
								Account Settings
							</Link>
						</li>
						<li onClick={onLogout}>
							<a className="dropdown-item text-lg color-palette-2">Log Out</a>
						</li>
					</ul>
				</div>
			</li>
		</>
	);
}
