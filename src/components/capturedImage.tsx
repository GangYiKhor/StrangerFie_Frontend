import { uploadFileDto } from "../dto/uploadFileDto";
import { usePost } from "../hooks/usePost";
import { uploadFileResponses } from "../responses/uploadFileResponses";
import React, { useCallback, useState } from "react";
import BackgroundCompleteDialog from "./backgroundComplete";

type PropType = {
	imageData: string;
	setIsLoading: (value: boolean) => void;
	setImageData: (value: string) => void;
	setIsProcessed: (value: boolean) => void;
	setProcessedImage: (value: uploadFileResponses) => void;
	isSetup: boolean;
};

export default function CapturedImage({
	imageData,
	setIsLoading,
	setImageData,
	setIsProcessed,
	setProcessedImage,
	isSetup,
}: Readonly<PropType>) {
	const [showDialog, setShowDialog] = useState(false);
	const [uploadedBackground, setUploadedBackground] = useState(false);
	const postUpload = usePost<uploadFileDto, uploadFileResponses>(
		"/api/upload-file"
	);
	const postBackground = usePost<uploadFileDto, void>("/api/upload-background");

	const confirmImage = useCallback(
		async (imageData: string) => {
			setIsLoading(true);
			const { data } = await postUpload({ image: imageData });
			setIsLoading(false);
			setIsProcessed(true);
			setProcessedImage(data);
		},
		[postUpload, setIsLoading, setIsProcessed, setProcessedImage]
	);

	const uploadBackground = useCallback(
		async (imageData: string) => {
			setIsLoading(true);
			await postBackground({ image: imageData });
			setIsLoading(false);
			setShowDialog(true);
			setUploadedBackground(true);
		},
		[postBackground, setIsLoading]
	);

	return (
		<>
			{showDialog ? (
				<BackgroundCompleteDialog setShowDialog={setShowDialog} />
			) : null}

			<div id="image_container">
				<img className="images" src={imageData} alt="" />

				{!uploadedBackground ? (
					<div className="button_group">
						<button
							className="button grey_button"
							onClick={() => setImageData("")}
						>
							Retake
						</button>
						<button
							className="button blue_button"
							onClick={() => uploadBackground(imageData)}
						>
							Save as Background
						</button>

						{isSetup ? (
							<button
								className="button green_button"
								onClick={() => confirmImage(imageData)}
							>
								Confirm
							</button>
						) : null}
					</div>
				) : null}
			</div>
		</>
	);
}
