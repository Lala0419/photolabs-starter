import React, { useState } from "react";
const initialState = { isFavorite: [], modal: false, photoDetail: {} };
import TopicData from "../mocks/topics";
import PhotoData from "../mocks/photos";

export default function useApplicationData() {
	const [state, setState] = useState(initialState); //global state
	// const [isFavorite, setIsFavorite] = useState([]);
	// const [modal, setModal] = useState(false);
	// const [photoDetail, setPhotoDetail] = useState({});

	const toggleFavorite = (photoId) => {
		console.log("photoId", photoId);
		if (state.isFavorite.includes(photoId)) {
			//setIsFavorite(isFavorite.filter((id) => id !== photoId));
			setState((prev) => {
				return {
					...prev,
					isFavorite: state.isFavorite.filter((id) => id !== photoId),
				};
			});
		} else {
			//setIsFavorite([...isFavorite, photoId]);
			setState((prev) => {
				return { ...prev, isFavorite: [...state.isFavorite, photoId] };
			});
		}
	};

	const toggleModal = (photoId) => {
		//setModal((prev) => !prev);
		setState((prev) => {
			return {
				...prev,
				modal: !prev.modal,
				photoDetail: PhotoData[photoId - 1],
			};
		});
	};

	return {
		state,
		toggleFavorite,
		toggleModal,
		PhotoData,
		TopicData,
	};
}
