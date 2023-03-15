let counter1 = 0;
const languageArray = [
  "XHTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "jQuery",
  "jQuery UI",
  "SCSS",
  "SASS",
  "PUG",
  "Nunjucks",
  "MySQL",
  "MariaDB",
  "Java",
  "JSON",
  "Node.js",
  "Python",
  "Ruby",
  "C",
  "C++",
  "R",
  "SVG",
  "HTML",
];
let loopArray = () => {
  setTimeout(() => {
    if (counter1 == languageArray.length) {
      counter1 = 0;
      loopArray();
    } else {
      let i = 0;
      let rememberLoopWord = "";
      let wordLoopFunction = () => {
        if (i < languageArray[counter1].length) {
          setTimeout(() => {
            rememberLoopWord =
              rememberLoopWord + languageArray[counter1].charAt(i);
            $("h1 > p > span").html(rememberLoopWord);
            i++;
            wordLoopFunction();
          }, 80);
        } else {
          counter1++;
          loopArray();
        }
      };
      wordLoopFunction();
    }
  }, 500);
};
loopArray();
//$("#downAngle").on("click", () => {
//  window.scrollTo(0, document.body.scrollHeight);
//});
//$("body, html").on("scroll touchmove mousewheel", (e) => {
//  e.preventDefault();
//  e.stopPropagation();
//  return false;
//});
//let counterPage = 0;
//$("body, html").on("mousewheel", (e) => {
//  e.preventDefault();
//  let mousewheelValue = e.originalEvent.wheelDelta;
//  if (mousewheelValue < 0 && counterPage == 0) {
//    //mousewheelValue < 0 &&
//    //counterPage == 0 &&
//    $("html, body")
//      .stop()
//      .animate({ scrollTop: parseInt($("#second").attr("data-index")) }, 400);
//    counterPage++;
//  }
//  console.log($("#second").offset().top);
//  //console.log(e.originalEvent.wheelDelta);
//  //console.log(window.innerHeight);
//});
