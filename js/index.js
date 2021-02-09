const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM<br/>Is<br/>Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street<br/>Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
//header
let nav = document.querySelector("nav");
let logo = document.getElementById("logo-img");
let extraLink2 = (document.createElement("a").textContent = "Extra Link #2");
for (let i = 0; i < nav.children.length; i++) {
  nav.children[i].textContent = siteContent["nav"][`nav-item-${i}`];
}
nav.appendChild(document.createElement("a")).textContent = "Extra Link #1";
nav.prepend(extraLink2);

//cta
let ctaImg = document.getElementById("cta-img");
let ctaText = document.querySelector(".cta-text");
logo.setAttribute("src", siteContent["nav"]["img-src"]);
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);
ctaText.querySelector("h1").innerHTML = siteContent["cta"]["h1"];
ctaText.querySelector("button").innerHTML = siteContent["cta"]["button"];
console.log(document);

//main content
const topics = ["features", "about", "services", "product", "vision"];
let mainContent = document.querySelector(".main-content");
let midImg = document.getElementById("middle-img");
let topContent = mainContent.querySelector(".top-content");
let bottomContent = mainContent.querySelector(".bottom-content");
let allContent = [...topContent.children, ...bottomContent.children];
allContent.forEach((element, i) => {
  element.querySelector("h4").textContent =
    siteContent["main-content"][`${topics[i]}-h4`];
  element.querySelector("p").textContent =
    siteContent["main-content"][`${topics[i]}-content`];
});
midImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

//contact
let contact = document.querySelector(".contact");
contact.querySelector("h4").textContent = siteContent["contact"]["contact-h4"];
contact.querySelectorAll("p")[0].innerHTML = siteContent["contact"]["address"];
contact.querySelectorAll("p")[1].textContent = siteContent["contact"]["phone"];
contact.querySelectorAll("p")[2].textContent = siteContent["contact"]["email"];

//footer
let footer = document.querySelector("footer");
footer.textContent = siteContent["footer"]["copyright"];
