import React from "react";

import "./App.scss";
import PhotoList from "components/PhotoList";
import TopicListItem from "components/TopicListItem";
import TopicList from "components/TopicList";
import TopNavigation from "components/TopNavigationBar";

// Note: Rendering a single component to build components in isolation
const App = () => {
	return (
		<div className="App">
			{/* <div className="App container">{photos}</div> */}
			{/* <PhotoList /> */}
			{/* <TopicListItem /> */}
			{/* <TopicList /> */}
			<TopNavigation />
		</div>
	);
};

export default App;
