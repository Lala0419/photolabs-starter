import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";

const PhotoDetailsModal = (props) => {
	const similarPhotos = { ...props.photoDetail.similar_photos };
	const similarPhotosArray = Object.values(similarPhotos);

	const renderSimilarPhotos = similarPhotosArray.map((photo) => (
		<img
			key={photo.id}
			src={photo.urls.regular}
			className="photo-details-modal__images"
		/>
	));

	return (
		<div className="photo-details-modal">
			<button
				className="photo-details-modal__close-button"
				onClick={props.toggleModal}
			>
				<img src={closeSymbol} alt="close symbol" />
			</button>
			<img
				className="photo-details-modal__image"
				src={props.photoDetail.urls.regular}
			/>
			<span className="photo-details-modal__header">Similar Photos</span>
			{renderSimilarPhotos}
		</div>
	);
};

export default PhotoDetailsModal;
