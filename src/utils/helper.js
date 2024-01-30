

export const getErrorMessage = (error) => {
    const response = error?.response;
    const defaultMssg = "Something went wrong. Please try again.";
    const has500xError = response?.status?.toString?.()?.includes?.("50");
    const errorMessage = has500xError
        ? defaultMssg
        : response?.data
        ? response?.data?.message
        : defaultMssg;

    return errorMessage;
};

export const pipeEnums = (enumValue) => {
    return enumValue ? enumValue.replace(/_/g, " ").toLowerCase() : "";
};

export const capitalizeFirstLetter = (string) => {
    return string ? string.charAt(0)?.toUpperCase() + string?.slice(1) : "";
};

export const truncateString = (str, len = 50) => {
    if (str?.length > len) {
        return str?.substring(0, len) + "...";
    } else {
        return str;
    }
};

export function shuffleArray(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}


export function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}