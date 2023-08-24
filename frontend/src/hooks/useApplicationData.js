import React, { useState } from "react";
const initialState = { isFavorite: [], modal: false, photoDetail: {} };
import TopicData from "../mocks/topics";
import PhotoData from "../mocks/photos";

export default function useApplicationData() {
	const [state, setState] = useState(initialState); //global state
	/** const [isFavorite, setIsFavorite] = useState([]);
	const [modal, setModal] = useState(false);
	const [photoDetail, setPhotoDetail] = useState({});
*/
	// /* insert app levels actions below */
	// export const ACTIONS = {
	//   FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
	//   FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
	//   SET_PHOTO_DATA: 'SET_PHOTO_DATA',
	//   SET_TOPIC_DATA: 'SET_TOPIC_DATA',
	//   SELECT_PHOTO: 'SELECT_PHOTO',
	//   DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
	// }

	// function reducer(state, action) {
	//   switch (action.type) {
	//     case FAV_PHOTO_ADDED:
	//       return
	//     { /* insert all relevant actions as case statements*/ }
	//     }
	//     default:
	//       throw new Error(
	//         `Tried to reduce with unsupported action type: ${action.type}`
	//       );
	//   }
	// }
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
