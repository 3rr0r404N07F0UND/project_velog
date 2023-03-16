const fullScreenRequestFunction = () => {
  document.documentElement.requestFullscreen();
  //$("#bootingWindow").css("display", "none");
  //$("#bigWindowIcon").css("display", "block");
  //$("#loadingCircle").css("display", "inline-block");
  //setTimeout(() => {
  //  $("#bigWindowIcon").css("display", "none");
  //  $("#loadingCircle").css("display", "none");
  //  $("h1").css("display", "block").addClass("flowUpAnimation");
  //  setTimeout(() => {
  //    $("h1").css("display", "none");
  //    $("h2").css("display", "block").addClass("flowUpAnimation");
  //    setTimeout(() => {
  //      $("h2").css("display", "none");
  //      $("h3").css("display", "block").addClass("flowUpAnimation");
  //      setTimeout(() => {
  //        $("h3").css("display", "none");
  //$("#loginPage").css("display", "block");
  //$("#loginInput").on("click", (e) => {
  //  if ($(`#${e.target.id}`).val() === "1234") {
  $(".bootingObject").css("visibility", "visible");
  //$("#loginPage").css("top", "-100%");
  $("#loginPage").addClass("moveUp");
  //}
  //});
  //      }, 6000);
  //    }, 6000);
  //  }, 6000);
  //}, 1000);
};
$("#loginInput").on("click", fullScreenRequestFunction);
setInterval(() => {
  if (folderBackgroundColor) {
    $("#folderIcon").addClass("folderIconBackGround");
  } else {
    $("#folderIcon").removeClass("folderIconBackGround");
  }
  if (chromeBackgroundColor) {
    $("#chromeIcon").addClass("folderIconBackGround");
  } else {
    $("#chromeIcon").removeClass("folderIconBackGround");
  }
  let dateTime = new Date();
  let dateTimeHour = String(dateTime.getHours());
  let dateTimeMin = String(dateTime.getMinutes());
  let dateTimeSec = String(dateTime.getSeconds());
  let dateTimeYear = String(dateTime.getFullYear());
  let dateTimeMonth = String(dateTime.getMonth() + 1);
  let dateTimeDate = String(dateTime.getDate());
  dateTimeHour.length == 1 && (dateTimeHour = "0" + dateTimeHour);
  dateTimeMin.length == 1 && (dateTimeMin = "0" + dateTimeMin);
  dateTimeSec.length == 1 && (dateTimeSec = "0" + dateTimeSec);
  dateTimeMonth.length == 1 && (dateTimeMonth = "0" + dateTimeMonth);
  dateTimeDate.length == 1 && (dateTimeDate = "0" + dateTimeDate);
  if (Number(dateTimeHour) - 12 <= 0) {
    $("#timeObject").html(
      `오전 ${dateTimeHour}:${dateTimeMin}:${dateTimeSec}<br />${dateTimeYear}-${dateTimeMonth}-${dateTimeDate}`
    );
  } else {
    dateTimeHour = String(Number(dateTimeHour) - 12);
    dateTimeHour.length == 1 && (dateTimeHour = "0" + dateTimeHour);
    $("#timeObject").html(
      `오후 ${dateTimeHour}:${dateTimeMin}:${dateTimeSec}<br />${dateTimeYear}-${dateTimeMonth}-${dateTimeDate}`
    );
  }
  parseInt($("#chromeObject").css("width")) >
    parseInt($(".mainWindow").css("width")) &&
    $("#chromeObject").css("width", "");
  parseInt($("#chromeObject").css("height")) >
    parseInt($(".mainWindow").css("height")) &&
    $("#chromeObject").css("height", "");
  parseInt($("#whatCanYouDo").css("width")) >
    parseInt($(".mainWindow").css("width")) &&
    $("#whatCanYouDo").css("width", "");
  parseInt($("#whatCanYouDo").css("height")) >
    parseInt($(".mainWindow").css("height")) &&
    $("#whatCanYouDo").css("height", "");
  parseInt($("#portfolioModal").css("width")) >
    parseInt($(".mainWindow").css("width")) &&
    $("#portfolioModal").css("width", "");
  parseInt($("#portfolioModal").css("height")) >
    parseInt($(".mainWindow").css("height")) &&
    $("#portfolioModal").css("height", "");
  parseInt($("#introduceSelfModal").css("width")) >
    parseInt($(".mainWindow").css("width")) &&
    $("#introduceSelfModal").css("width", "");
  parseInt($("#introduceSelfModal").css("height")) >
    parseInt($(".mainWindow").css("height")) &&
    $("#introduceSelfModal").css("height", "");
}, 100);
$("#windowIcon").on("click", () => {
  document.documentElement.requestFullscreen;
});
