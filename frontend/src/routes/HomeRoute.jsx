import React, { useState } from "react";
import "../styles/HomeRoute.scss";
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";
import Modal from "../routes/PhotoDetailsModal";

const HomeRoute = (props) => {
	console.log("propsH", props);
	// const [isFavorite, setIsFavorite] = useState([]);
	// const [modal, setModal] = useState(false);
	// const [photoDetail, setPhotoDetail] = useState({});

	// const toggleFavorite = (photoId) => {
	// 	console.log("photoId", photoId);
	// 	if (isFavorite.includes(photoId)) {
	// 		setIsFavorite(isFavorite.filter((id) => id !== photoId));
	// 	} else {
	// 		setIsFavorite([...isFavorite, photoId]);
	// 	}
	// 	console.log("isFavorite", isFavorite);
	// };

	// const toggleModal = (photoId) => {
	// 	setModal((prev) => !prev);
	// 	setPhotoDetail(props.photoData[photoId - 1]);
	// 	console.log("photoDetail", props.photoData[photoId - 1]);
	// };

	return (
		<div className="home-route">
			<TopNavigation
				topicData={props.state.topicData}
				isFavorite={props.state.isFavorite}
			/>
			<PhotoList
				photoData={props.state.photoData}
				isFavorite={props.state.isFavorite}
				toggleFavorite={props.toggleFavorite}
				toggleModal={props.toggleModal}
			/>
			{props.state.modal && (
				<Modal
					toggleModal={props.toggleModal}
					photoDetail={props.state.photoDetail}
					toggleFavorite={props.toggleFavorite}
					isFavorite={props.state.isFavorite}
				/>
			)}
		</div>
	);
};

export default HomeRoute;
