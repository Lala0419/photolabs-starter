import React from "react";

import "../styles/HomeRoute.scss";
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";

const HomeRoute = (props) => {
	return (
		<div className="home-route">
			<TopNavigation topicData={props.topicData} />
			<PhotoList photoData={props.photoData} />
		</div>
	);
};

export default HomeRoute;
