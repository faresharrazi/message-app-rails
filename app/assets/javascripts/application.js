//= require jquery
//= require rails-ujs
//= require semantic-ui
//= require_tree .

// document.addEventListener("DOMContentLoaded", function () {
//   console.log("DOM fully loaded");
//   console.log("jQuery check:", typeof $);
//   console.log("Dropdown elements found:", $(".ui.dropdown").length);
// });

// document.addEventListener("turbo:load", function () {
//   console.log("Turbo load event triggered");
//   console.log("jQuery check:", typeof $);
//   console.log("Dropdown elements found:", $(".ui.dropdown").length);
//   $(".ui.dropdown").dropdown();
// });

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded");
  console.log("jQuery check:", typeof $);
  console.log("Dropdown elements found:", $(".ui.dropdown").length);
  $(".ui.dropdown").dropdown();
});
