const h2 = document.createElement("h2");
h2.textContent = "The story of why I changed my career";

document.querySelector("body").appendChild(h2);

let slider = tns({
    container : ".my-slider",
    "slideBy" : "1",
    "speed" :400,
    "nav" : false,
    autoplay : true,
    controls: false,
    autoplayButtonOutput : false,
    response: {
        1600: {
            items : 7,
            gutter : 20
        },
        1024: {
            items: 3,
            gutter : 20
        },
        768: {
            items : 2,
            gutter 20
        },
        480: {
            items: 1,
        }
    }
})