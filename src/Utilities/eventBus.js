const events = {};

export const on = (eventName, listener) => {
    if (!events[eventName]) events[eventName] = [];
    events[eventName].push(listener);
};

export const off = (eventName, listener) => {
    if (!events[eventName]) return;
    events[eventName] = events[eventName].filter((l) => l !== listener);
};

export const emit = (eventName, payload = null) => {
    if (!events[eventName]) return;
    events[eventName].forEach((listener) => listener(payload));
};
