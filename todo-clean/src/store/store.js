class Store {
  subscribers = [];

  state = {};

  init = (initialState) => {
    this.state = initialState;
  };

  subscribe(callback) {
    this.subscribers.push(callback);
  }

  getState() {
    return this.state;
  }

  setState(newState) {
    this.state = {
      ...this.state,
      ...newState,
    };

    for (const callback of this.subscribers) {
      callback(this.state);
    }
  }
}

export default new Store();
