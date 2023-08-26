import React, { useState, useReducer } from "react";
const initialState = { isFavorite: [], modal: false, photoDetail: {} };
import TopicData from "../mocks/topics";
import PhotoData from "../mocks/photos";

export const ACTIONS = {
	FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
	FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
	// SET_PHOTO_DATA: "SET_PHOTO_DATA",
	// SET_TOPIC_DATA: "SET_TOPIC_DATA",
	SELECT_PHOTO: "SELECT_PHOTO",
	// DISPLAY_PHOTO_DETAILS: "DISPLAY_PHOTO_DETAILS",
};

function reducer(state, action) {
	console.log("action", action);
	switch (action.type) {
		case ACTIONS.FAV_PHOTO_ADDED:
			return {
				...state,
				isFavorite: [...state.isFavorite, action.photoId],
			};
		case ACTIONS.FAV_PHOTO_REMOVED:
			return {
				...state,
				isFavorite: state.isFavorite.filter((id) => id !== action.photoId),
			};
		case ACTIONS.SELECT_PHOTO:
			return {
				...state,
				modal: !state.modal,
				photoDetail: PhotoData[action.photoId - 1],
			};
		default:
			throw new Error(
				`Tried to reduce with unsupported action type: ${action.type}`
			);
	}
}

export default function useApplicationData() {
	const [state, dispatch] = useReducer(reducer, initialState);
	//const [state, setState] = useState(initialState); //global state
	/** const [isFavorite, setIsFavorite] = useState([]);
	const [modal, setModal] = useState(false);
	const [photoDetail, setPhotoDetail] = useState({});
*/
	// /* insert app levels actions below */

	const toggleFavorite = (photoId) => {
		console.log("photoId", photoId);
		if (state.isFavorite.includes(photoId)) {
			//setIsFavorite(isFavorite.filter((id) => id !== photoId));
			dispatch({ type: "FAV_PHOTO_REMOVED", photoId: photoId });
			// setState((prev) => {
			// 	return {
			// 		...prev,
			// 		isFavorite: state.isFavorite.filter((id) => id !== photoId),
			// 	};
			// });
		} else {
			dispatch({ type: "FAV_PHOTO_ADDED", photoId: photoId });
			//setIsFavorite([...isFavorite, photoId]);
			// setState((prev) => {
			// 	return { ...prev, isFavorite: [...state.isFavorite, photoId] };
			// });
		}
	};

	const toggleModal = (photoId) => {
		dispatch({ type: "SELECT_PHOTO", photoId: photoId });
		//setModal((prev) => !prev);
		// setState((prev) => {
		// 	return {
		// 		...prev,
		// 		modal: !prev.modal,
		// 		photoDetail: PhotoData[photoId - 1],
		// 	};
		// });
	};

	return {
		state,
		toggleFavorite,
		toggleModal,
		PhotoData,
		TopicData,
	};
}
