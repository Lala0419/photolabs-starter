import React from "react";
import useApplicationData from "hooks/useApplicationData";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
// import PhotoData from "./mocks/photos";
// import TopicData from "./mocks/topics";

// Note: Rendering a single component to build components in isolation
const App = (props) => {
	const { state, toggleFavorite, toggleModal } = useApplicationData();

	return (
		<div className="App">
			<HomeRoute
				state={state}
				// photoData={photoData}
				// topicData={topicData}
				toggleFavorite={toggleFavorite}
				toggleModal={toggleModal}
			/>
		</div>
	);
};

export default App;
