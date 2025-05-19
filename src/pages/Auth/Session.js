export function setUserLoggedIn(data) {
    const now = new Date();
    const expiryTime = now.getTime() + 30 * 60 * 1000; // expiryInMinutes converted to milliseconds

    const sessionData = {
        data,
        expiryTime,
    };

    localStorage.setItem("user", JSON.stringify(sessionData));
}

export function getUser() {
    const sessionData = JSON.parse(localStorage.getItem("user"));

    if (!sessionData) {
        return null;
    }

    const now = new Date();

    if (now.getTime() > sessionData.expiryTime) {
        // Session expired
        localStorage.removeItem("user");
        return null;
    }

    return sessionData.data;
}

export function expireUser() {
    localStorage.removeItem("user");
}
