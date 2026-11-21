(() => {
  const storageKey = "portfolioSettings";

  const defaultSettings = {
    theme: "light",
    visitorName: "",
    lastVisit: null
  };

  let settings = { ...defaultSettings };

  try {
    const storedValue = localStorage.getItem(storageKey);

    if (storedValue) {
      const parsedValue = JSON.parse(storedValue);

      if (
        !parsedValue ||
        typeof parsedValue !== "object" ||
        Array.isArray(parsedValue)
      ) {
        throw new Error("Stored settings are invalid.");
      }

      settings = {
        theme: parsedValue.theme === "dark" ? "dark" : "light",
        visitorName:
          typeof parsedValue.visitorName === "string"
            ? parsedValue.visitorName
            : "",
        lastVisit:
          typeof parsedValue.lastVisit === "string"
            ? parsedValue.lastVisit
            : null
      };
    }
  } catch (error) {
    console.warn("Invalid settings found. Defaults were used.", error);
  }

  window.restoredSettings = settings;
  document.documentElement.dataset.theme = settings.theme;
})();