WebFont.load({
    google: {
        families: ["Poppins:regular,500,600", "DM Sans:regular,800"],
    },
});

!(function (o, c) {
    var n = c.documentElement,
        t = " w-mod-";
    n.className += t + "js";
    ("ontouchstart" in o || (o.DocumentTouch && c instanceof DocumentTouch)) &&
        (n.className += t + "touch");
})(window, document);

window.dataLayer = window.dataLayer || [];
            function gtag() {
                dataLayer.push(arguments);
            }
            gtag("js", new Date());
            gtag("set", "developer_id.dZGVlNj", true);
            gtag("config", "G-CD17DC0LST");

// Fonction pour récupérer la position du curseur par rapport à l'élément
function getPosition(event) {
    var element = event.currentTarget;
    var rect = element.getBoundingClientRect();
    var xPos = Math.round(event.clientX - rect.left);
    var yPos = Math.round(event.clientY - rect.top);

    // Création de la règle CSS avec les valeurs de position
    element.style.setProperty("--mouse-x", xPos + "px");
    element.style.setProperty("--mouse-y", yPos + "px");
}

// Sélection de tous les éléments avec la classe .power
var powerElements = document.querySelectorAll(".magical-borders-content>*");

// Parcourir tous les éléments et ajouter un écouteur d'événement pour suivre les mouvements de la souris
powerElements.forEach(function (element) {
    element.addEventListener("mousemove", getPosition);
});

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

// Function to extract the main color from an image URL and apply it as a shadow color
function applyMainColorAsShadow(imageURL, parentDiv) {
    // Create an image element
    var img = new Image();

    // Set the image source to the provided URL
    img.src = imageURL;

    // Wait for the image to load
    img.onload = function () {
        // Create a canvas element
        var canvas = document.createElement("canvas");

        // Set the canvas dimensions to match the image
        canvas.width = img.width;
        canvas.height = img.height;

        // Draw the image onto the canvas
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);

        // Get the pixel data from the canvas
        var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        var pixels = imageData.data;

        // Count the occurrences of each color
        var colorCounts = {};
        for (var i = 0; i < pixels.length; i += 4) {
            var r = pixels[i];
            var g = pixels[i + 1];
            var b = pixels[i + 2];
            var color = rgbToHex(r, g, b);
            colorCounts[color] = (colorCounts[color] || 0) + 1;
        }

        // Find the color with the highest count
        var mainColor = Object.keys(colorCounts).reduce(function (a, b) {
            return colorCounts[a] > colorCounts[b] ? a : b;
        });

        // Apply the main color as a shadow to the parent div
        parentDiv.style.boxShadow = "4px 3px 0 2px " + mainColor;
    };
}

// Function to convert RGB values to hexadecimal color code
function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

// Function to handle page load event
function handlePageLoad() {
    // Retrieve all elements with class .hero-image:not(.empty)
    var heroImages = document.querySelectorAll(".hero-image:not(.empty)");

    // Loop through each hero image element
    heroImages.forEach(function (heroImage) {
        // Get the URL of the image from the first child
        var imageURL = heroImage.firstElementChild.src;

        // Apply the main color extraction function to the current hero image element
        applyMainColorAsShadow(imageURL, heroImage);
    });
}

// Add an event listener for the page load event
window.addEventListener("load", handlePageLoad);

// configure and initialize the widget
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
                        forcedColorMode: "dark", // options: 'light' or dark'
                    },
                },
                aiChatSettings: {
                    // optional settings
                    botAvatarSrcUrl: "https://app.scenario.com/icon.png", // use your own bot avatar
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

addInkeepWidget(); // initialize the widget

document.addEventListener('DOMContentLoaded', function () {
    const toggleWrapper = document.querySelector('.tabs-menu');

    if (toggleWrapper) {
        const tabLinks = toggleWrapper.querySelectorAll('.tab-link');
        const annuallyBtn = tabLinks[0]; // First tab = Annually

        if (annuallyBtn) {
            // Create wrapper for alignment
            const contentWrapper = document.createElement('span');
            contentWrapper.style.display = 'flex';
            contentWrapper.style.alignItems = 'center';
            contentWrapper.style.justifyContent = 'center';
            contentWrapper.style.gap = '8px';

            // Move existing text into span
            const labelText = document.createElement('span');
            labelText.textContent = annuallyBtn.textContent.trim();
            annuallyBtn.textContent = '';
            contentWrapper.appendChild(labelText);

            // Create the styled discount pill
            const discount = document.createElement('span');
            discount.innerText = '–20%';
            discount.style.backgroundColor = '#4992d1';
            discount.style.color = 'white';
            discount.style.fontWeight = '700';
            discount.style.fontSize = '15px';
            discount.style.padding = '4px 9px';
            discount.style.borderRadius = '30px';
            discount.style.lineHeight = '1';
            discount.style.display = 'inline-block';
            discount.style.fontFamily = 'Poppins, sans-serif';

            // Append everything
            contentWrapper.appendChild(discount);
            annuallyBtn.appendChild(contentWrapper);
        }
    }
});

// get the current page URL
let startNowURLParts = location.pathname.split('/');
let startNowSlug = startNowURLParts[startNowURLParts.length - 1];

// get the start-now-button element
let startNowButton = document.getElementById('start-now-button');

// edit start-now-button element property by appending the URL parameters
startNowButton.href += '?utm_source=' + startNowSlug;

// log final start-now-button link to console
console.log(startNowButton.href);
