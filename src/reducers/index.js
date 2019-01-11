export default (state, action) => {
	switch (action.type) {
		case "SET_TECHNOLOGY":
			return {
				...state,
				tech: action.payload.tech
			};
		default:	
			return state;

	}

}