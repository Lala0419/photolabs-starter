import React from "react";
import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";

const TopNavigation = (props) => {
	return (
		<div className="top-nav-bar">
			<span className="top-nav-bar__logo">PhotoLabs</span>
			<TopicList topicData={props.topicData} selectTopic={props.selectTopic} />
			<FavBadge
				className="fav-badge fav-badge__count"
				isFavPhotoExist={props.isFavorite.length > 0}
				isFavorite={props.isFavorite}
			/>
		</div>
	);
};

export default TopNavigation;
