import React from "react";
import "../styles/HomeRoute.scss";
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";
import PhotoDetailsModal from "../routes/PhotoDetailsModal";

const HomeRoute = (props) => {
	return (
		<div className="home-route">
			<TopNavigation
				topicData={props.state.topicData}
				isFavorite={props.state.isFavorite}
				selectTopic={props.selectTopic}
			/>
			<PhotoList
				photoData={props.state.photoData}
				isFavorite={props.state.isFavorite}
				toggleFavorite={props.toggleFavorite}
				toggleModal={props.toggleModal}
			/>
			{props.state.modal && (
				<PhotoDetailsModal
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
