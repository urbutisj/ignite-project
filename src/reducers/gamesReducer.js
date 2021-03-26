const initState = {
  popular: [],
  newGames: [],
  upcomingGames: [],
};

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return { ...state };
    default:
      return { ...state };
  }
};

//ACTION CREATOR
const fetchGames = () => {
  return {
    type: "FETCH_GAMES",
  };
};

export default gamesReducer;
