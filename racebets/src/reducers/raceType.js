export default function raceTypeReducer(state = [], action) {
    switch (action.type) {
      case 'addRaceType': {
        return [
          ...state,
          action.payload
        ]
      }
      case 'removeRaceType': {
        const index = state.indexOf(action.payload);
        if (index > -1) {
            state.splice(index, 1);
        }
        return [
            ...state
          ]
      }
      default:
        return state
    }
  }