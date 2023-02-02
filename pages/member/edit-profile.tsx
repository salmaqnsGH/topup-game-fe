import Sidebar from "@/components/organizms/Sidebar";
import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { JWTPayloadTypes, UserTypes } from "@/services/data-types";
import Cookies from "js-cookie";
import Input from "@/components/atoms/Input";
import { updateProfile } from "@/services/member";
import { toast } from "react-toastify";
import router from "next/router";

const IMAGE_API = process.env.NEXT_PUBLIC_IMAGE;

export default function EditProfile() {
	const [imagePreview, setImagePreview] = useState(null);

	const [user, setUser] = useState({
		id: "",
		avatar: "",
		email: "",
		name: "",
	});

	useEffect(() => {
		const token = Cookies.get("token");

		if (token) {
			const jwtToken = atob(token!);
			const payload: JWTPayloadTypes = jwt_decode(jwtToken);
			const userFromPayload: UserTypes = payload.player;

			setUser(userFromPayload);
		}
	}, []);

	const onSubmit = async () => {
		const data = new FormData();
		data.append("image", user.avatar);
		data.append("name", user.name);
		const response = await updateProfile(data);

		if (response.error) {
			toast.error(response.message);
		} else {
			Cookies.remove("token");
			router.push("/sign-in");
		}
	};

	return (
		<section className="edit-profile overflow-auto">
			<Sidebar activeMenu="settings" />
			<main className="main-wrapper">
				<div className="ps-lg-0">
					<h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
					<div className="bg-card pt-30 ps-30 pe-30 pb-30">
						<form action="">
							<div className="photo d-flex">
								<div className="image-upload">
									<label htmlFor="avatar">
										{imagePreview ? (
											<img src={imagePreview} className="img-upload" width={120} height={120} alt={"logo"} />
										) : (
											<img src="/icon/uploadProfile.svg" width={120} height={120} alt={"logo"} />
										)}
									</label>
									<input
										id="avatar"
										type="file"
										name="avatar"
										accept="image/png, image/jpeg"
										onChange={(event) => {
											const img = event.target.files[0];
											setImagePreview(URL.createObjectURL(img));
											return setUser({
												...user,
												avatar: img,
											});
										}}
									/>
								</div>
							</div>
							<div className="pt-30">
								<Input
									label={"Full Name"}
									value={user.name}
									onChange={(event) =>
										setUser({
											...user,
											name: event.target.value,
										})
									}
								/>
							</div>
							<div className="pt-30">
								<Input label={"Email Address"} disabled value={user.email} />
							</div>
							{/* <div className="pt-30">
								<Input label={"Phone"} />
							</div> */}
							<div className="button-group d-flex flex-column pt-50">
								<button
									type="button"
									className="btn btn-save fw-medium text-lg text-white rounded-pill"
									onClick={onSubmit}>
									Save My Profile
								</button>
							</div>
						</form>
					</div>
				</div>
			</main>
		</section>
	);
}
