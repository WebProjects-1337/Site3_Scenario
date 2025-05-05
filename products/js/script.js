// WebFont configuration
WebFont.load({
  google: {
    families: ["Poppins:regular,500,600", "DM Sans:regular,800"],
  },
});

// Add class for touch devices
!(function (o, c) {
  var n = c.documentElement,
    t = " w-mod-";
  n.className += t + "js";
  ("ontouchstart" in o || (o.DocumentTouch && c instanceof DocumentTouch)) &&
    (n.className += t + "touch");
})(window, document);

// Google Analytics configuration
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("set", "developer_id.dZGVlNj", true);
gtag("config", "G-CD17DC0LST");

// Mouse position tracking for magical borders
function getPosition(event) {
  var element = event.currentTarget;
  var rect = element.getBoundingClientRect();
  var xPos = Math.round(event.clientX - rect.left);
  var yPos = Math.round(event.clientY - rect.top);
  element.style.setProperty("--mouse-x", xPos + "px");
  element.style.setProperty("--mouse-y", yPos + "px");
}
var powerElements = document.querySelectorAll(".magical-borders-content>*");
powerElements.forEach(function (element) {
  element.addEventListener("mousemove", getPosition);
});

// Close all tabs functionality
let items = Array.from(document.querySelectorAll(".example-header"));
function closeAllTabs(event) {
  let item = event.currentTarget;
  let parent = item.closest(".examples-container");
  let examples = Array.from(parent.children);
  examples.forEach((el) => {
    if (el.classList.contains("active")) {
      el.classList.remove("active");
    }
    window.setTimeout(() => {
      item.parentElement.classList.add("active");
    }, 300);
  });
}
items.forEach((el) => el.addEventListener("click", closeAllTabs));

// Extract main color from image and apply as shadow
function applyMainColorAsShadow(imageURL, parentDiv) {
  var img = new Image();
  img.src = imageURL;
  img.onload = function () {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var pixels = imageData.data;
    var colorCounts = {};
    for (var i = 0; i < pixels.length; i += 4) {
      var r = pixels[i];
      var g = pixels[i + 1];
      var b = pixels[i + 2];
      var color = rgbToHex(r, g, b);
      colorCounts[color] = (colorCounts[color] || 0) + 1;
    }
    var mainColor = Object.keys(colorCounts).reduce(function (a, b) {
      return colorCounts[a] > colorCounts[b] ? a : b;
    });
    parentDiv.style.boxShadow = "4px 3px 0 2px " + mainColor;
  };
}
function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
function handlePageLoad() {
  var heroImages = document.querySelectorAll(".hero-image:not(.empty)");
  heroImages.forEach(function (heroImage) {
    var imageURL = heroImage.firstElementChild.src;
    applyMainColorAsShadow(imageURL, heroImage);
  });
}
window.addEventListener("load", handlePageLoad);

// Initialize Inkeep widget
const addInkeepWidget = function () {
  const inkeepScript = document.getElementById("inkeep-script");
  inkeepScript.addEventListener("load", () => {
    const inkeepWidget = Inkeep().embed({
      componentType: "ChatButton",
      properties: {
        chatButtonType: "PILL",
        baseSettings: {
          apiKey: "5fed8b184f9f336544b390f8130cbdce06995379050b0cfb",
          integrationId: "cm2vmg4kp00nfxtuam5bzf9ft",
          organizationId: "org_AaWCkNYvBFBnxBnS",
          primaryBrandColor: "#0088CC",
          organizationDisplayName: "Scenario",
          colorMode: {
            forcedColorMode: "dark",
          },
        },
        aiChatSettings: {
          botAvatarSrcUrl: "https://app.scenario.com/icon.png",
          quickQuestions: [
            "What use cases can I achieve with Scenario?",
            "What are Scenario's main features?",
            "How can I create an account?",
            "Is there an API available?",
          ],
        },
      },
    });
  });
};
addInkeepWidget();

// Add discount pill to annually button
window.addEventListener("DOMContentLoaded", function () {
  const toggleWrapper = document.querySelector(".tabs-menu");
  if (toggleWrapper) {
    const tabLinks = toggleWrapper.querySelectorAll(".tab-link");
    const annuallyBtn = tabLinks[0];
    if (annuallyBtn) {
      const contentWrapper = document.createElement("span");
      contentWrapper.style.display = "flex";
      contentWrapper.style.alignItems = "center";
      contentWrapper.style.justifyContent = "center";
      contentWrapper.style.gap = "8px";
      const labelText = document.createElement("span");
      labelText.textContent = annuallyBtn.textContent.trim();
      annuallyBtn.textContent = "";
      contentWrapper.appendChild(labelText);
      const discount = document.createElement("span");
      discount.innerText = "–20%";
      discount.style.backgroundColor = "#4992d1";
      discount.style.color = "white";
      discount.style.fontWeight = "700";
      discount.style.fontSize = "15px";
      discount.style.padding = "4px 9px";
      discount.style.borderRadius = "30px";
      discount.style.lineHeight = "1";
      discount.style.display = "inline-block";
      discount.style.fontFamily = "Poppins, sans-serif";
      contentWrapper.appendChild(discount);
      annuallyBtn.appendChild(contentWrapper);
    }
  }
});
