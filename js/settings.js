window.portfolioSettings = {
  storageKey: "portfolioSettings",

  save(settings) {
    const safeSettings = {
      theme: settings.theme === "dark" ? "dark" : "light",
      visitorName:
        typeof settings.visitorName === "string"
          ? settings.visitorName
          : "",
      lastVisit:
        typeof settings.lastVisit === "string"
          ? settings.lastVisit
          : null
    };

    try {
      localStorage.setItem(
        this.storageKey,
        JSON.stringify(safeSettings)
      );
    } catch (error) {
      console.warn("Settings could not be saved.", error);
    }
  }
};