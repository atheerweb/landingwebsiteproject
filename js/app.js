//Selectors
const plusContainer = document.querySelector(".plusicon__container");
const navContainer = document.querySelector(".nav__content");
const secContainer = document.querySelector(".section__container");
const navItem = document.querySelector(".nav__text");

let sectionNo = 0;

//Functions
//Adding Sections and navbar items function
let addSection = () => {
  sectionNo += 1;
  //Navbar children
  const addingSection = document.createElement("a");
  addingSection.classList.add("nav__text");
  addingSection.id = "nav" + sectionNo;
  addingSection.innerHTML = `section ${sectionNo}`;
  //adding Navbar children to parent
  navContainer.appendChild(addingSection);
  //adding sections
  const secTitle = document.createElement("h3");
  secTitle.classList.add("section__title");
  secTitle.innerHTML = `section ${sectionNo}`;
  const secP = document.createElement("p");
  secP.classList.add("section__text");
  secP.innerHTML = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa ut nobis praesentium tempora dolorem. Quis ab nobis animi eaque laboriosam quidem id repellendus. Repellendus, aut. Odio, illum cumque. Distinctio, animi?`;
  //parent (content wrapper)
  const sectionParent = document.createElement("div");
  sectionParent.classList.add("section__content");
  sectionParent.id = `section ${sectionNo}`;
  //appending rest of the childs;
  sectionParent.appendChild(secTitle);
  sectionParent.appendChild(secP);
  secContainer.appendChild(sectionParent);
  return;
};
//Event listeners
plusContainer.addEventListener("click", addSection);
navContainer.addEventListener("click", function (e) {
  if ((e.target.class = "nav__text")) {
    const navTexts = document.querySelectorAll(".nav__text");
    const secContent = document.querySelectorAll(".section__content");
    let navId = e.target.id.slice(-1);
    let sId = `section ${navId}`;
    let section = document.getElementById(sId);
    section.scrollIntoView({
      block:"center"
    });
    navTexts.forEach((nav) => {
      nav.classList.remove("highlighter");
    });
    secContent.forEach((sec) => {
      sec.classList.remove("active");
    });
    e.target.classList.add("highlighter");
    section.classList.add("active")
  }
});

//Adding 4 Sections dynamically as requested
addSection();
addSection();
addSection();
addSection();
