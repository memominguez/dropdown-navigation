const features = document.querySelector("nav .sidebar .menus .features");
const company = document.querySelector("nav .sidebar .menus .company");
const featuresItems = document.getElementById("features-items");
const companyItems = document.getElementById("company-items");
const arrowUpFeatures = document.getElementById("arrow-up-features");
const arrowDownFeatures = document.getElementById("arrow-down-features");
const arrowUpCompany = document.getElementById("arrow-up-company");
const arrowDownCompany = document.getElementById("arrow-down-company");

features.addEventListener("click", () => {
  featuresItems.classList.toggle("hidden");
  featuresItems.classList.toggle("visible");
  arrowUpFeatures.classList.toggle("hidden");
  arrowUpFeatures.classList.toggle("arrow-visible");
  arrowDownFeatures.classList.toggle("hidden");
  arrowDownFeatures.classList.toggle("arrow-visible");
});

company.addEventListener("click", () => {
  companyItems.classList.toggle("hidden");
  companyItems.classList.toggle("visible");
  arrowUpCompany.classList.toggle("hidden");
  arrowUpCompany.classList.toggle("arrow-visible");
  arrowDownCompany.classList.toggle("hidden");
  arrowDownCompany.classList.toggle("arrow-visible");
});

function showSidebar() {
  const sideBar = document.querySelector(".sidebar");
  const overlay = document.getElementById("overlay");
  sideBar.style.display = "flex";
  overlay.style.display = "initial";
}

function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  const overlay = document.getElementById("overlay");
  sidebar.style.display = "none";
  overlay.style.display = "none";
}

const hoverButton = document.getElementById("hoverButton");

// Desktop hover effect
hoverButton.addEventListener("mouseenter", function () {
  this.classList.add("hover");
});

hoverButton.addEventListener("mouseleave", function () {
  this.classList.remove("hover");
});

// Mobile touch effect
hoverButton.addEventListener("touchstart", function () {
    this.classList.add("hover");
  }, { passive: true }
);

hoverButton.addEventListener("touchend", function () {
    this.classList.remove("hover");
  }, { passive: true }
);
