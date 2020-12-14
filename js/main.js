//framework
class Link {
        constructor(name, url) {
                this.name = name;
                this.url = url;
        }
};
let gridMovePlaceholderCounter = 0;
function gridMove(id, column, row, speedInSeconds, resetSize) {
        resetSize = resetSize || false;
        speedInSeconds = speedInSeconds || 0.5;
        let newSpeed = speedInSeconds * 1000;
        let element = document.getElementById(id);
        let placeholderElement = document.createElement('div');
        placeholderElement.id = "placeholderDiv-gridMove-element" + gridMovePlaceholderCounter;
        placeholderElement.style.gridColumn = column;
        placeholderElement.style.gridRow = row;
        element.parentElement.appendChild(placeholderElement);
        let placeholder = document.getElementById("placeholderDiv-gridMove-element" + gridMovePlaceholderCounter);
        var placeholderPosition = placeholder.getBoundingClientRect();
        var elementOriginalPosition = element.getBoundingClientRect();
        element.style.position = "absolute";
        element.style.width = elementOriginalPosition.width + "px";
        element.style.height = elementOriginalPosition.height + "px";
        element.style.top = elementOriginalPosition.top + "px";
        element.style.left = elementOriginalPosition.left + "px";
        element.style.transition = "top, left, " + `${speedInSeconds}` + "s";
        element.style.transitionTimingFunction = "ease";
        setTimeout(
                function() {
                        element.style.top = placeholderPosition.top + "px";
                        element.style.left = placeholderPosition.left + "px";
                        setTimeout(
                                function() {
                                        placeholder.remove();
                                        element.style.position = "unset";
                                        element.style.gridColumn = column;
                                        element.style.gridRow = row;
                                        if(resetSize == true) {
                                                element.style.width = "";
                                                element.style.height = "";
                                        };
                                        gridMovePlaceholderCounter++;
                                },newSpeed
                        );
                },100
        );
};





//default globals
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
var activeTab = "home";




//onLoad functions
function backend_lowerLoadingScreen() {
        setTimeout(
                function() {
                        document.getElementById("loading-page").style.opacity = 0;
                        setTimeout(
                                function() {
                                        document.getElementById("loading-page").remove();
                                },750
                        );
                },1500
        );
};

function startHeaderClock() {
        setInterval(
                function() {
                        let date = new Date();
                        let time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
                        document.getElementById("header-time").innerHTML = time;
                },1000
        );
};





window.addEventListener("load", function() {
        document.getElementById("home-display-shell").style.top = windowHeight + 100 + "px";
        document.getElementById("shortcuts-display-shell").style.top = windowHeight + 100 + "px";
        document.getElementById("notes-display-shell").style.top = windowHeight + 100 + "px";
        document.getElementById("utilities-display-shell").style.top = windowHeight + 100 + "px";

        changeActiveTab("home", true);

        startHeaderClock();

        backend_lowerLoadingScreen();
});











//functions



function initializeCustomLinks() {
        save("customLink1", document.getElementById("customLink1").href);
        save("customLink2", document.getElementById("customLink2").href);
        save("customLink3", document.getElementById("customLink3").href);
        save("customLink4", document.getElementById("customLink4").href);
        save("customLink5", document.getElementById("customLink5").href);
        save("customLink6", document.getElementById("customLink6").href);

        load("customLink1");
        load("customLink2");
        load("customLink3");
        load("customLink4");
        load("customLink5");
        load("customLink6");

        document.getElementById("customLink1").href = storage.customLink1;
        document.getElementById("customLink2").href = storage.customLink2;
        document.getElementById("customLink3").href = storage.customLink3;
        document.getElementById("customLink4").href = storage.customLink4;
        document.getElementById("customLink5").href = storage.customLink5;
        document.getElementById("customLink6").href = storage.customLink6;
};








function changeActiveTab(tab, bypass) {
        let indicator = "active-tab-indicator";
        bypass = bypass || false;
        if(tab == activeTab && bypass == false) {return;} else {
                switch(tab) {
                        case "home":
                                if(activeTab == "home") {
                                        document.getElementById(activeTab + "-display-shell").style.top = windowHeight + 100 + "px";
                                } else if(activeTab == "shortcuts") {
                                        document.getElementById(activeTab + "-display-shell").style.top = windowHeight + 100 + "px";
                                } else if(activeTab == "notes") {
                                        document.getElementById(activeTab + "-display-shell").style.top = windowHeight + 100 + "px";
                                }  else if(activeTab == "utilities") {
                                        document.getElementById(activeTab + "-display-shell").style.top = windowHeight + 100 + "px";
                                };
                                activeTab = "home";
                                document.getElementById(activeTab + "-display-shell").style.top = "5px";
                                gridMove(indicator, 1, 1);
                                break;
                        case "shortcuts":
                                if(activeTab == "home") {
                                        document.getElementById(activeTab + "-display-shell").style.top = windowHeight + 100 + "px";
                                } else if(activeTab == "shortcuts") {
                                        document.getElementById(activeTab + "-display-shell").style.top = windowHeight + 100 + "px";
                                } else if(activeTab == "notes") {
                                        document.getElementById(activeTab + "-display-shell").style.top = windowHeight + 100 + "px";
                                }  else if(activeTab == "utilities") {
                                        document.getElementById(activeTab + "-display-shell").style.top = windowHeight + 100 + "px";
                                };
                                activeTab = "shortcuts";
                                document.getElementById(activeTab + "-display-shell").style.top = "5px";
                                gridMove(indicator, 2, 1);
                                break;
                        case "notes":
                                if(activeTab == "home") {
                                        document.getElementById(activeTab + "-display-shell").style.top = windowHeight + 100 + "px";
                                } else if(activeTab == "shortcuts") {
                                        document.getElementById(activeTab + "-display-shell").style.top = windowHeight + 100 + "px";
                                } else if(activeTab == "notes") {
                                        document.getElementById(activeTab + "-display-shell").style.top = windowHeight + 100 + "px";
                                }  else if(activeTab == "utilities") {
                                        document.getElementById(activeTab + "-display-shell").style.top = windowHeight + 100 + "px";
                                };
                                activeTab = "notes";
                                document.getElementById(activeTab + "-display-shell").style.top = "5px";
                                gridMove(indicator, 3, 1);
                                break;
                        case "utilities":
                                if(activeTab == "home") {
                                        document.getElementById(activeTab + "-display-shell").style.top = windowHeight + 100 + "px";
                                } else if(activeTab == "shortcuts") {
                                        document.getElementById(activeTab + "-display-shell").style.top = windowHeight + 100 + "px";
                                } else if(activeTab == "notes") {
                                        document.getElementById(activeTab + "-display-shell").style.top = windowHeight + 100 + "px";
                                }  else if(activeTab == "utilities") {
                                        document.getElementById(activeTab + "-display-shell").style.top = windowHeight + 100 + "px";
                                };
                                activeTab = "utilities";
                                document.getElementById(activeTab + "-display-shell").style.top = "5px";
                                gridMove(indicator, 4, 1);
                                break;
                };
        };
};