import React from "react";

export default function CheckoutItem() {
	return (
		<>
			{" "}
			<div className="game-checkout d-flex flex-row align-items-center pt-md-50 pb-md-50 pt-30 pb-30">
				<div className="pe-4">
					<div className="cropped">
						<img src="/img/Thumbnail-3.png" className="img-fluid" alt="" />
					</div>
				</div>
				<div>
					<p className="fw-bold text-xl color-palette-1 mb-10">
						Mobile Legends:
						<br /> The New Battle 2021
					</p>
					<p className="color-palette-2 m-0">Category: Mobile</p>
				</div>
			</div>
			<div className="payment pt-md-50 pb-md-50 pt-10 pb-10">
				<h2 className="fw-bold text-xl color-palette-1 mb-20">Payment Informations</h2>
				<p className="text-lg color-palette-1 mb-20">
					Your Account Name <span className="purchase-details">Masayoshi Angga Zero</span>
				</p>
				<p className="text-lg color-palette-1 mb-20">
					Type <span className="payment-details">Worldwide Transfer</span>
				</p>
				<p className="text-lg color-palette-1 mb-20">
					Bank Name <span className="payment-details">Mandiri</span>
				</p>
				<p className="text-lg color-palette-1 mb-20">
					Bank Account Name <span className="payment-details">PT Store GG Indonesia</span>
				</p>
				<p className="text-lg color-palette-1 mb-20">
					Bank Number <span className="payment-details">1800 - 9090 - 2021</span>
				</p>
			</div>
		</>
	);
}
