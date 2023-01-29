import { setCheckout } from "@/services/player";
import router from "next/router";
import React, { useState } from "react";
import { toast } from "react-toastify";

export default function CheckoutConfirmation() {
	const [checkbox, setCheckbox] = useState(false);

	const onSubmit = async () => {
		const dataItemLocal = localStorage.getItem("data-item");
		const dataTopupLocal = localStorage.getItem("data-topup");

		const dataItem = JSON.parse(dataItemLocal!);
		const dataTopup = JSON.parse(dataTopupLocal!);

		if (!checkbox) {
			toast.error("Pastikan anda sudah melakukan pembayaran");
		}

		const data = {
			voucher: dataItem._id,
			nominal: dataTopup.nominalItem._id,
			payment: dataTopup.paymentItem.payment._id,
			bank: dataTopup.paymentItem.bank._id,
			name: dataTopup.bankAccountName,
			accountUser: dataTopup.verifyID,
		};

		const result = await setCheckout(data);
		if (result.error) {
			toast.error(result.message);
		} else {
			toast.success("checkout berhasil");
			router.push("/complete-checkout");
		}
	};

	return (
		<>
			<label className="checkbox-label text-lg color-palette-1">
				I have transferred the money
				<input type="checkbox" checked={checkbox} onChange={() => setCheckbox(!checkbox)} />
				<span className="checkmark"></span>
			</label>
			<div className="d-md-block d-flex flex-column w-100 pt-50">
				<button
					className="btn btn-confirm-payment rounded-pill fw-medium text-white border-0 text-lg"
					type="button"
					onClick={onSubmit}>
					Confirm Payment
				</button>
			</div>
		</>
	);
}
