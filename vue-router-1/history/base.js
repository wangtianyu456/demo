export class History {
  constructor(router) {
    this.router = router;
    this.current = {};
    this.listeners = [];
  }

  setupListeners() {}

  transitionTo(location) {}
}
