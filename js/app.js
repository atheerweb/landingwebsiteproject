//Selectors
const plusContainer = document.querySelector(".plusicon__container");
const navContainer = document.querySelector(".nav__content");
const secContainer = document.querySelector(".section__container");
let sectionNo = 0;

//Functions
let addSection = () => {
  sectionNo += 1;
  //Navbar children
  const addingSection = document.createElement("a");
  addingSection.classList.add("nav__text");
  addingSection.href = `#section ${sectionNo}`;
  addingSection.innerHTML = `section ${sectionNo}`;
  //adding Navbar children to parent
  navContainer.appendChild(addingSection);
  //adding  MoveTo elments
  const moveTo = document.createElement("div");
  moveTo.classList.add("move__to");
  moveTo.id = `section ${sectionNo}`;
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
  //appending rest of the childs
  secContainer.appendChild(moveTo);
  sectionParent.appendChild(secTitle);
  sectionParent.appendChild(secP);
  secContainer.appendChild(sectionParent);
  return;
};

//Event listeners
plusContainer.addEventListener("click", addSection);
navContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("nav__text")) {
    const navTexts = document.querySelectorAll(".nav__text");
    navTexts.forEach((nav) => {
      nav.classList.remove("highlighter");
    });
    e.target.classList.add("highlighter");
  }
});



//Adding 4 Sections dynamically as requested
addSection();
addSection();
addSection();
addSection();
