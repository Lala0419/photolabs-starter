import React from "react";
import useApplicationData from "hooks/useApplicationData";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";

const App = (props) => {
	const { state, toggleFavorite, toggleModal, selectTopic } =
		useApplicationData();

	return (
		<div className="App">
			<HomeRoute
				state={state}
				toggleFavorite={toggleFavorite}
				toggleModal={toggleModal}
				selectTopic={selectTopic}
			/>
		</div>
	);
};

export default App;
