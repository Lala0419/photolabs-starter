import React, { useState } from "react";
import "../styles/HomeRoute.scss";
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";
import Modal from "../routes/PhotoDetailsModal";

const HomeRoute = (props) => {
	const [isFavorite, setIsFavorite] = useState([]);
	const [modal, setModal] = useState(false);
	const [photoDetail, setPhotoDetail] = useState({});

	const toggleFavorite = (photoId) => {
		if (isFavorite.includes(photoId)) {
			setIsFavorite(isFavorite.filter((id) => id !== photoId));
		} else {
			setIsFavorite([...isFavorite, photoId]);
		}
	};

	const toggleModal = (photoId) => {
		setModal((prev) => !prev);
		setPhotoDetail(props.photoData[photoId - 1]);
		console.log("photoDetail", props.photoData[photoId - 1]);
	};

	return (
		<div className="home-route">
			<TopNavigation topicData={props.topicData} isFavorite={isFavorite} />
			<PhotoList
				photoData={props.photoData}
				isFavorite={isFavorite}
				toggleFavorite={toggleFavorite}
				toggleModal={toggleModal}
			/>
			{modal && <Modal toggleModal={toggleModal} photoDetail={photoDetail} />}
		</div>
	);
};

export default HomeRoute;
