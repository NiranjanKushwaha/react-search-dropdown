// get request api call method
export const getData = (url) => {
    if (url) {
        return fetch(url);
    }
    else {
        alert("Please pass a url");
    }
}