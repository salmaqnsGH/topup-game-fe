import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { JWTPayloadTypes, UserTypes } from "@/services/data-types";
import Cookies from "js-cookie";

const IMAGE_API = process.env.NEXT_PUBLIC_IMAGE;

export default function Profile() {
	const [user, setUser] = useState({
		avatar: "",
		email: "",
		name: "",
	});

	useEffect(() => {
		const token = Cookies.get("token");

		if (token) {
			const jwtToken = atob(token!);
			const payload: JWTPayloadTypes = jwt_decode(jwtToken);
			const user: UserTypes = payload.player;

			setUser(user);
		}
	}, []);

	const profilePhoto = user.avatar ? `${IMAGE_API}/${user.avatar}` : "/img/avatar-1.png";

	return (
		<div className="user text-center pb-50 pe-30">
			<img src={profilePhoto} className="img-upload img-fluid mb-20" />
			<h2 className="fw-bold text-xl color-palette-1 m-0">{user.name}</h2>
			<p className="color-palette-2 m-0">{user.email}</p>
		</div>
	);
}
