import { useEffect, useReducer } from "react";
const initialState = {
	isFavorite: [],
	modal: false,
	photoDetail: {},
	photoData: [],
	topicData: [],
};

export const ACTIONS = {
	FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
	FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
	SET_PHOTO_DATA: "SET_PHOTO_DATA",
	SET_TOPIC_DATA: "SET_TOPIC_DATA",
	SELECT_PHOTO: "SELECT_PHOTO",
	GET_PHOTOS_BY_TOPICS: "GET_PHOTOS_BY_TOPICS",
};

function reducer(state, action) {
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
				photoDetail: action.photo,
			};
		case ACTIONS.SET_PHOTO_DATA:
			return {
				...state,
				photoData: action.photoData,
			};
		case ACTIONS.SET_TOPIC_DATA:
			return {
				...state,
				topicData: action.topicData,
			};
		case ACTIONS.GET_PHOTOS_BY_TOPICS:
			return {
				...state,
				photoData: action.selectedPhotoData,
			};
		default:
			throw new Error(
				`Tried to reduce with unsupported action type: ${action.type}`
			);
	}
}

export default function useApplicationData() {
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		fetch(`/api/photos`)
			.then((res) => res.json())
			.then((data) => {
				dispatch({ type: "SET_PHOTO_DATA", photoData: data });
			});
	}, []);

	useEffect(() => {
		fetch(`/api/topics`)
			.then((res) => res.json())
			.then((data) => {
				dispatch({ type: "SET_TOPIC_DATA", topicData: data });
			});
	}, []);

	const selectTopic = (topicId) => {
		fetch(`/api/topics/photos/${topicId}`)
			.then((res) => res.json())
			.then((data) => {
				dispatch({ type: "GET_PHOTOS_BY_TOPICS", selectedPhotoData: data });
			});
	};

	const toggleFavorite = (photoId) => {
		if (state.isFavorite.includes(photoId)) {
			dispatch({ type: "FAV_PHOTO_REMOVED", photoId: photoId });
		} else {
			dispatch({ type: "FAV_PHOTO_ADDED", photoId: photoId });
		}
	};

	const toggleModal = (photo) => {
		dispatch({ type: "SELECT_PHOTO", photo: photo });
	};

	return {
		state,
		toggleFavorite,
		toggleModal,
		selectTopic,
	};
}
