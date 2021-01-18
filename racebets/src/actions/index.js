export const addRaceType = (raceType) => {
    return {
        type: "addRaceType",
        payload:{
            raceType
        }
    }
}

export const removeRaceType = (raceType) => {
    return {
        type: "removeRaceType",
        payload:{
            raceType
        }
    }
}