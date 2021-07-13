const planCard1 = document.querySelectorAll(".step1 > div");
const planCard2 = document.querySelectorAll(".step2 > div");
const planCard3 = document.querySelectorAll(".step3 > div");
const planCard4 = document.querySelectorAll(".step4 > div");
const planCard5 = document.querySelectorAll(".step5 > div");

let title1;
let title2;
let title3;
let title4;
let title5;

planCard1.forEach((item) =>
  item.addEventListener("click", () => {
    planCard1.forEach((item) =>
      item.classList.remove("steps-right-card-active")
    );
    item.classList.add("steps-right-card-active");
    title1 = item.firstElementChild.innerHTML;
    summaryCreator();
  })
);
planCard2.forEach((item) =>
  item.addEventListener("click", () => {
    planCard2.forEach((item) =>
      item.classList.remove("steps-right-card-active")
    );
    item.classList.add("steps-right-card-active");
    title2 = item.firstElementChild.innerHTML;
    summaryCreator();
  })
);
planCard3.forEach((item) =>
  item.addEventListener("click", () => {
    planCard3.forEach((item) =>
      item.classList.remove("steps-right-card-active")
    );
    item.classList.add("steps-right-card-active");
    title3 = item.firstElementChild.innerHTML;
    summaryCreator();
  })
);
planCard4.forEach((item) =>
  item.addEventListener("click", () => {
    planCard4.forEach((item) =>
      item.classList.remove("steps-right-card-active")
    );
    item.classList.add("steps-right-card-active");
    title4 = item.firstElementChild.innerHTML;
    summaryCreator();
  })
);
planCard5.forEach((item) =>
  item.addEventListener("click", () => {
    planCard5.forEach((item) =>
      item.classList.remove("steps-right-card-active")
    );
    item.classList.add("steps-right-card-active");
    title5 = item.firstElementChild.innerHTML;
    summaryCreator();
  })
);

const summaryCreator = () => {
  let span1 = document.createElement("span");
  title1 ? (span1.innerHTML = title1) : (span1.innerHTML = "");
  let span2 = document.createElement("span");
  title2 ? (span2.innerHTML = title2) : (span2.innerHTML = "");
  let span3 = document.createElement("span");
  title3 ? (span3.innerHTML = title3) : (span3.innerHTML = "");
  let span4 = document.createElement("span");
  title4 ? (span4.innerHTML = title4) : (span4.innerHTML = "");
  let span5 = document.createElement("span");
  title5 ? (span5.innerHTML = title5) : (span5.innerHTML = "");
  const summary = document.getElementById("summary");
  summary.innerHTML = `"I drink my coffee as ${span1.outerHTML}, with a ${span2.outerHTML} type of bean. ${span3.outerHTML} ground ala ${span4.outerHTML}, sent to me ${span5.outerHTML}."`;
};
