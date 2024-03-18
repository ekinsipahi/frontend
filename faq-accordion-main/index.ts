let q1Text: HTMLElement | null = document.getElementById("q1-text");
let q2Text: HTMLElement | null = document.getElementById("q2-text");
let q3Text: HTMLElement | null = document.getElementById("q3-text");
let q4Text: HTMLElement | null = document.getElementById("q4-text");

document.getElementById("q1")?.addEventListener("click", function () {
  q1Text?.classList.contains("hidden")
    ? q1Text.classList.remove("hidden")
    : q1Text?.classList.add("hidden");
});
document.getElementById("q2")?.addEventListener("click", function () {
  q2Text?.classList.contains("hidden")
    ? q2Text.classList.remove("hidden")
    : q2Text?.classList.add("hidden");
});
document.getElementById("q3")?.addEventListener("click", function () {
  q3Text?.classList.contains("hidden")
    ? q3Text.classList.remove("hidden")
    : q3Text?.classList.add("hidden");
});
document.getElementById("q4")?.addEventListener("click", function () {
  q4Text?.classList.contains("hidden")
    ? q4Text.classList.remove("hidden")
    : q4Text?.classList.add("hidden");
});
