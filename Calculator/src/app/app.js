import AppServices from "../services/app.js";

class AppComponent {
  isRunning = false;

  constructor() {
    throw new Error("cant make a new instance of AppComponent");
  }

  static run() {
    if (this.isRunning) {
      console.log("App is running");
    } else {
      this.isRunning = true;
      AppServices.build();
    }
  }
}

AppComponent.run();
