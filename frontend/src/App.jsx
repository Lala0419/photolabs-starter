import React, { useState } from "react";

import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import PhotoData from "./mocks/photos";
import TopicData from "./mocks/topics";

// Note: Rendering a single component to build components in isolation
const App = () => {
	return (
		<div className="App">
			<HomeRoute
				photoData={PhotoData}
				topicData={TopicData}
				// setModal={toggleModal}
				//modal={Modal}
			/>
		</div>
	);
};

export default App;
