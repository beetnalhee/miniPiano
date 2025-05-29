document.querySelectorAll(".key").forEach((key) => {
  key.addEventListener("click", () => {
    const note = key.getAttribute("data-note");
    const audio = new Audio(`sounds/${note}.mp3`);
    audio.currentTime = 0;
    audio.play();
  });
});
