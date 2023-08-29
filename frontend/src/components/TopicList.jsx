import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
	const topics = props.topicData.map((item) => (
		<TopicListItem key={item.id} {...item} selectTopic={props.selectTopic} />
	));
	return <div className="top-nav-bar__topic-list">{topics}</div>;
};

export default TopicList;
