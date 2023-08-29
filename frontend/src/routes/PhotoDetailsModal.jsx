import React from "react";
import "../styles/PhotoFavButton.scss";
import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import FavIcon from "components/FavIcon";
import PhotoList from "components/PhotoList";

const PhotoDetailsModal = (props) => {
	const similarPhotos = { ...props.photoDetail.similar_photos };
	const similarPhotosArray = Object.values(similarPhotos);

	const clickRegularHandler = () => {
		props.toggleFavorite(props.photoDetail.id);
	};

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
				src={props.photoDetail.urls.full}
			/>
			<div className="photo-details-modal__header">Similar Photos</div>
			{
				<PhotoList
					photoData={similarPhotosArray}
					isFavorite={props.isFavorite}
					toggleFavorite={props.toggleFavorite}
					toggleModal={() => {}}
				/>
			}
		</div>
	);
};

export default PhotoDetailsModal;
