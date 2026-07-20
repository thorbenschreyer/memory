document.addEventListener("DOMContentLoaded", () => {
  const settings = JSON.parse(localStorage.getItem("settings") ?? "{}");
  document.body.dataset.theme = settings.theme;


});

