"use strict";

var folderBackgroundColor = 0;
var chromeBackgroundColor = 0;
$(".iconDBLClick").on("dblclick", function (e) {
  e.currentTarget.id == "introduceSelfMD" && $("#introduceSelfModal").css("display") == "none" && $("#introduceSelfModal").css("display", "block") && folderBackgroundColor++;
  e.currentTarget.id == "toolFolderIcon" && $("#whatCanYouDo").css("display", "block") && $("#introduceSelfModal").css("display", "none");
  e.currentTarget.id == "portfolioFolder" && $("#portfolioModal").css("display") == "none" && $("#portfolioModal").css("display", "block") && folderBackgroundColor++;
});
$(".closeModal").on("click", function (e) {
  e.currentTarget.id == "introduceSelfModalClose" && $("#introduceSelfModal").css("display", "none").css("z-index", "100").removeClass("fullScreenDisplay") && folderBackgroundColor--;
  e.currentTarget.id == "introduceSelfModalClose2" && $("#introduceSelfModal").css("display", "none").css("z-index", "100").removeClass("fullScreenDisplay") && folderBackgroundColor--;
  e.currentTarget.id == "portfolioModalClose" && $("#portfolioModal").css("display", "none").css("z-index", "100").removeClass("fullScreenDisplay") && folderBackgroundColor--;
  e.currentTarget.id == "portfolioModalClose2" && $("#portfolioModal").css("display", "none").css("z-index", "100").removeClass("fullScreenDisplay") && folderBackgroundColor--;
  e.currentTarget.id == "whatCanYouDoClose" && $("#whatCanYouDo").css("display", "none").css("z-index", "100").removeClass("fullScreenDisplay") && folderBackgroundColor--;
  e.currentTarget.id == "whatCanYouDoClose2" && $("#whatCanYouDo").css("display", "none").css("z-index", "100").removeClass("fullScreenDisplay") && folderBackgroundColor--;
  e.currentTarget.id == "arrayProjectClose" && $("#chromeObject").css("display", "none").css("z-index", "100").removeClass("fullScreenDisplay") && chromeBackgroundColor--;
  e.currentTarget.id == "arrayProjectClose2" && $("#chromeObject").css("display", "none").css("z-index", "100").removeClass("fullScreenDisplay") && chromeBackgroundColor--;
});
$(".clickObject").on("dblclick", function (e) {
  if ($("#".concat(e.currentTarget.id)).css("z-index") < 110) {
    $("#".concat(e.currentTarget.id)).css("z-index", "".concat(Number($("#".concat(e.currentTarget.id)).css("z-index")) + 10));
  }

  e.currentTarget.id != "introduceSelfModal" && $("#introduceSelfModal").css("z-index", "100");
  e.currentTarget.id != "portfolioModal" && $("#portfolioModal").css("z-index", "100");
  e.currentTarget.id != "whatCanYouDo" && $("#whatCanYouDo").css("z-index", "100");
  e.currentTarget.id != "chromeObject" && $("#chromeObject").css("z-index", "110");
});
$("#introduceSelfModal").draggable({
  containment: "parent",
  handle: ".modalHandle"
});
$("#whatCanYouDo").draggable({
  containment: "parent",
  handle: ".modalHandle"
});
$("#portfolioModal").draggable({
  containment: "parent",
  handle: ".modalHandle"
});
$("#chromeObject").draggable({
  containment: "parent",
  handle: ".modalHandle"
});
$("#chromeObject").resizable();
$("#introduceSelfModal").resizable();
$("#whatCanYouDo").resizable();
$("#portfolioModal").resizable();
$(".chromeFrame").on("dblclick", function (e) {
  chromeBackgroundColor == 0 && chromeBackgroundColor++;
  e.currentTarget.id == "arrayChrome" && $("#chromeObject").css("display") == "none" && $("#chromeObject").css("display", "block") && $("#chromeObject input").attr("value", "http://kkms4001.iptime.org/~c17st11/project/array_project/ver_alpha0.002/main/html/") && $("#chromeObject iframe").attr("src", "".concat($("#chromeObject input").attr("value"))) && $("#chromeObject .titleIntroduceSelf").html("행렬계산기");
  e.currentTarget.id == "arrayPDF" && $("#chromeObject").css("display", "block") && $("#chromeObject input").attr("value", "http://kkms4001.iptime.org/~c17st11/project/array_project/doc/2023_01_30_array_project.pdf") && $("#chromeObject iframe").attr("src", "".concat($("#chromeObject input").attr("value"))) && $("#chromeObject .titleIntroduceSelf").html("행렬계산기 PDF");
  e.currentTarget.id == "jinsuChrome" && $("#chromeObject").css("display", "block") && $("#chromeObject input").attr("value", "http://kkms4001.iptime.org/~c17st11/project/Jinsu/main/html/") && $("#chromeObject iframe").attr("src", "".concat($("#chromeObject input").attr("value"))) && $("#chromeObject .titleIntroduceSelf").html("진수계산기");
  e.currentTarget.id == "jinsuPDF" && $("#chromeObject").css("display", "block") && $("#chromeObject input").attr("value", "http://kkms4001.iptime.org/~c17st11/portfolio/Jinsu/") && $("#chromeObject iframe").attr("src", "".concat($("#chromeObject input").attr("value"))) && $("#chromeObject .titleIntroduceSelf").html("진수계산기 PDF");
  e.currentTarget.id == "whoAmIMarkdown" && $("#chromeObject").css("display", "block") && $("#chromeObject input").attr("value", "http://kkms4001.iptime.org/~c17st11/project/velog_project/src/markdown/whoAmI.html") && $("#chromeObject iframe").attr("src", "".concat($("#chromeObject input").attr("value"))) && $("#chromeObject .titleIntroduceSelf").html("자기소개");
});
$(".fullScreenModal").on("click", function (e) {
  $("#".concat(e.currentTarget.parentElement.parentElement.id)).toggleClass("fullScreenDisplay").css("top", "").css("left", "");
  $("#".concat(e.currentTarget.parentElement.parentElement.id)).hasClass("fullScreenDisplay") == true && $("#".concat(e.currentTarget.parentElement.parentElement.id)).draggable("disable");
  $("#".concat(e.currentTarget.parentElement.parentElement.id)).hasClass("fullScreenDisplay") == false && $("#".concat(e.currentTarget.parentElement.parentElement.id)).draggable("enable");
});
$(".modalHandle").on("dblclick", function (e) {
  $("#".concat(e.currentTarget.parentElement.id)).toggleClass("fullScreenDisplay").css("top", "").css("left", "");
  $("#".concat(e.currentTarget.parentElement.id)).hasClass("fullScreenDisplay") == true && $("#".concat(e.currentTarget.parentElement.id)).draggable("disable");
  $("#".concat(e.currentTarget.parentElement.id)).hasClass("fullScreenDisplay") == false && $("#".concat(e.currentTarget.parentElement.id)).draggable("enable");
});
$("#alertWindow").on("click", function () {
  $("#alertWindow").css("display", "none");
});
$("#chromeObject input").on("input", function () {
  $("#chromeObject iframe").attr("src", "".concat($("#chromeObject input").val()));
});
$("#windowIcon").on("click", function () {
  document.exitFullscreen(); //$("*").css("filter", "invert(100%)");
});