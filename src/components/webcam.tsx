import { useGet } from "../hooks/useGet";
import { publishImageResponses } from "../responses/publishImageResponses";
import React, { useRef, useCallback, useState } from "react";
import Webcam from "react-webcam";
import CountDown from "./countdown";

const videoConstraints = {
	width: 1920,
	height: 1080,
	facingMode: "user",
};

type PropType = {
	setImageData: (value: string) => void;
	isSetup: boolean;
	hasPublished: boolean;
	setCompletedImage: (value: string) => void;
	setIsPublished: (value: boolean) => void;
	setIsCompleted: (value: boolean) => void;
};

export default function WebCam({
	setImageData,
	isSetup,
	hasPublished,
	setCompletedImage,
	setIsPublished,
	setIsCompleted,
}: Readonly<PropType>) {
	const webcamRef = useRef<Webcam>(null);
	const [countdown, setCountdown] = useState(false);
	const getIsSetupStatus = useGet<publishImageResponses>(
		"/api/get-latest-published-image"
	);

	const getLatestPublishImage = useCallback(async () => {
		const { data } = await getIsSetupStatus();
		setCompletedImage(data.image);
		setIsPublished(true);
		setIsCompleted(true);
	}, [getIsSetupStatus, setCompletedImage, setIsCompleted, setIsPublished]);

	const capture = useCallback(async () => {
		setCountdown(false);
		setImageData(webcamRef?.current?.getScreenshot() ?? "");
	}, [webcamRef, setImageData]);

	return (
		<>
			{countdown ? (
				<CountDown startingCount={3} callbackFunction={capture} />
			) : null}
			<div id="image_container">
				<Webcam
					className="images"
					audio={false}
					width={1920}
					height={1080}
					ref={webcamRef}
					screenshotFormat="image/jpeg"
					videoConstraints={videoConstraints}
					mirrored={true}
				/>
				<div className="button_group">
					{hasPublished ? (
						<button
							className="button blue_button"
							onClick={getLatestPublishImage}
						>
							View Last Published Image
						</button>
					) : null}

					<button
						className="button green_button"
						onClick={() => setCountdown(true)}
					>
						{isSetup ? "Capture Photo" : "Capture Background"}
					</button>
				</div>
			</div>
		</>
	);
}
