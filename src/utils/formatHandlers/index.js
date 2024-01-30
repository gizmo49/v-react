
export const dataQueryStatus = Object.freeze({
    IDLE: "IDLE",
    SUCCESS: "SUCCESS",
    LOADING: "LOADING",
    ERROR: "ERROR",
    DATAMODE: "DATAMODE",
    NULLMODE: "NULLMODE",
});

export const validateSize = (doc, maxSize = 2) => {
    const size = doc?.size / 1018576;
    return size > maxSize ? false : true;
};
