const storage = {
  set(identifier, token) {
    localStorage.setItem(identifier, JSON.stringify(token));
  },

  get(identifier) {
    const value = JSON.parse(localStorage.getItem(identifier));
    return value ? value : null;
  },

  remove(identifier) {
    localStorage.removeItem(identifier);
  },

  clear() {
    localStorage.clear();
  },
};

export default storage;
