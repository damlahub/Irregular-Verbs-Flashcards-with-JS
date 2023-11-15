let yesWords = [];
let maybeWords = [];
let noWords = [];

const displayUpdate = () => {
  yesWords = JSON.parse(localStorage.getItem("allYesWords")) || [];
  maybeWords = JSON.parse(localStorage.getItem("allMaybeWords")) || [];
  noWords = JSON.parse(localStorage.getItem("allNoWords")) || [];

  console.log(yesWords, maybeWords, noWords);
};

displayUpdate();
