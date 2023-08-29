import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
	const clickHandler = () => {
		props.selectTopic(props.id);
	};

	return (
		<div className="topic-list__item" onClick={clickHandler}>
			<span>{props.title}</span>
		</div>
	);
};

export default TopicListItem;
