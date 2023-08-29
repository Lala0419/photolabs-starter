import React from "react";
import "../styles/PhotoFavButton.scss";
import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import FavIcon from "components/FavIcon";

const PhotoDetailsModal = (props) => {
	const similarPhotos = { ...props.photoDetail.similar_photos };
	const similarPhotosArray = Object.values(similarPhotos);

	const clickRegularHandler = () => {
		props.toggleFavorite(props.photoDetail.id);
	};

	const renderSimilarPhotos = similarPhotosArray.map((photo) => (
		<div key={photo.id} className="similar-photo-list__item">
			<div
				className="photo-list__fav-icon"
				onClick={() => {
					props.toggleFavorite(photo.id);
				}}
			>
				<FavIcon selected={props.isFavorite.includes(photo.id)} />
			</div>
			<img src={photo.urls.regular} className="similar-photo-list__image" />
			<div className="photo-list__user-details">
				<img className="photo-list__user-profile" src={photo.user.profile} />
				<div className="photo-list__user-info">
					<h2>{photo.user.name}</h2>
					<h2 className="photo-list__user-location">
						{photo.location.city} {photo.location.country}
					</h2>
				</div>
			</div>
		</div>
	));

	return (
		<div className="photo-details-modal photo-details-modal__images">
			<button
				className="photo-details-modal__close-button"
				onClick={props.toggleModal}
			>
				<img src={closeSymbol} alt="close symbol" />
			</button>
			<div className="photo-list__fav-icon" onClick={clickRegularHandler}>
				<FavIcon selected={props.isFavorite.includes(props.photoDetail.id)} />
			</div>
			<img
				className="photo-details-modal__image"
				src={props.photoDetail.urls.regular}
			/>
			<div className="photo-details-modal__header">Similar Photos</div>
			<div className="photo-list">{renderSimilarPhotos}</div>
		</div>
	);
};

export default PhotoDetailsModal;
