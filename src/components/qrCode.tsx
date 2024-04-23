import React from "react";

type PropType = {
	setShowQR: (value: boolean) => void;
	setShowConsentForm: (value: boolean) => void;
};

export default function QRCode({
	setShowQR,
	setShowConsentForm,
}: Readonly<PropType>) {
	return (
		<div id="qr_code">
			<img
				src="/example_qr_code.png"
				alt="Download QR Code"
				width={400}
				height={400}
			/>
			<button
				className="button green_button"
				onClick={() => {
					setShowQR(false);
					setShowConsentForm(true);
				}}
			>
				Done
			</button>
		</div>
	);
}
