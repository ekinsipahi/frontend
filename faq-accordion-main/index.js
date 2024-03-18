var _a, _b, _c, _d;
var q1Text = document.getElementById("q1-text");
var q2Text = document.getElementById("q2-text");
var q3Text = document.getElementById("q3-text");
var q4Text = document.getElementById("q4-text");
(_a = document.getElementById("q1")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    (q1Text === null || q1Text === void 0 ? void 0 : q1Text.classList.contains("hidden"))
        ? q1Text.classList.remove("hidden")
        : q1Text === null || q1Text === void 0 ? void 0 : q1Text.classList.add("hidden");
});
(_b = document.getElementById("q2")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    (q2Text === null || q2Text === void 0 ? void 0 : q2Text.classList.contains("hidden"))
        ? q2Text.classList.remove("hidden")
        : q2Text === null || q2Text === void 0 ? void 0 : q2Text.classList.add("hidden");
});
(_c = document.getElementById("q3")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () {
    (q3Text === null || q3Text === void 0 ? void 0 : q3Text.classList.contains("hidden"))
        ? q3Text.classList.remove("hidden")
        : q3Text === null || q3Text === void 0 ? void 0 : q3Text.classList.add("hidden");
});
(_d = document.getElementById("q4")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", function () {
    (q4Text === null || q4Text === void 0 ? void 0 : q4Text.classList.contains("hidden"))
        ? q4Text.classList.remove("hidden")
        : q4Text === null || q4Text === void 0 ? void 0 : q4Text.classList.add("hidden");
});
