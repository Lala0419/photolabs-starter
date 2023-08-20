import React from "react";

import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";

const TopNavigation = (props) => {
	return (
		<div className="top-nav-bar">
			<span className="top-nav-bar__logo">PhotoLabs</span>
			<TopicList topicData={props.topicData} />
			<FavBadge
				className="fav-badge fav-badge__count"
				isFavPhotoExist={props.display}
			/>
		</div>
	);
};

export default TopNavigation;
