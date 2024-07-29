
// Text Animation 
document.querySelectorAll(".reveal")
    .forEach(function (elem) {

        // Creating Spans inside the heading 
        let parent = document.createElement('span');
        let child = document.createElement('span');

        // Giving the spans classes, heading>span is going to be parent and heading>span.parent>span is going to be called child
        parent.classList.add("parent");
        child.classList.add("child");

        // Setting the CONTENT of the elem/element = Content of the child
        child.innerHTML = elem.innerHTML;

        // Adding the child as a child to parent which makes span.parent>span.child
        parent.appendChild(child);


        // elem replaces its values with spans
        elem.innerHTML = "";
        elem.appendChild(parent);
    })



gsap.set("#nav a", { opacity: 0, y: -20 })
gsap.set("#hero-section .heading3", { opacity: 0, y: -20 })
gsap.set("#hero-section #heading1", { opacity: 0, y: -20 })
gsap.set("#hero-section a", { opacity: 0 })
gsap.set("#hero-section .heading4", { opacity: 0, y: -20 })
gsap.set("#hero-section #span1", { opacity: 0, y: -20 })
gsap.set("#hero-section #span2", { opacity: 0, y: -20 })
gsap.set("#arrow", { opacity: 0, y: -20 })

var tl = gsap.timeline();

tl
    .from('.child span', {
        x: 100,
        stagger: 0.5,
        delay: 0.4,
        duration: 0.7,
        ease: "circ.easeInOut",
    })
    .to('.parent .child', {
        y: -100,
        duration: 1.6,
        delay: 1,
        ease: "circ.easeInOut",
    })
    .to('#loader', {
        height: 0,
        duration: 1.5,
        ease: "power2.out"
    })
    .to("#nav a", {
        opacity: 1,
        duration: 1,
        delay: 0.2,
        y: 0
    })
    .to("#hero-section #heading1", {
        opacity: 1,
        delay: 0.2,
        y: 0
    })
    .to("#hero-section .heading4", {
        opacity: 1,
        delay: 0.2,
        y: 0
    })
    .to("#hero-section #span1", {
        opacity: 1,
        delay: 0.2,
        y: 0
    })
    .to("#hero-section #span2", {
        opacity: 1,
        delay: 0.2,
        y: 0
    })
    .to("#hero-section .heading3", {
        opacity: 1,
        delay: 0.2,
        duration: 2,
        y: 0
    })
    .to("#arrow", {
        opacity: 1,
        duration: 1,
        delay: -2,
        y: 0
    })
    .to('#section2', {
        duration: 2,
        opacity: 1,
    })
    .to('#work h2', {
        scrollTrigger: {
            trigger: '#work',
            start: '20% 20%',
            end: '30% 30%',
            markers: true,
            scrub: 2,
            pin: true
        }
    })
    .to('#html',{
        delay: 1,
        filter: 'blur(0)',
        stagger: 0.3,
        duration: 0.5,
    })
    .to('#canva',{
        delay: 0.2,
        filter: 'blur(0)',
        stagger: 0.3,
        duration: 0.5,
    })
    .to('#figma',{
        delay: 0.2,
        filter: 'blur(0)',
        stagger: 0.3,
        duration: 0.5,
    })
    .to('#wordpress',{
        delay: 0.2,
        filter: 'blur(0)',
        stagger: 0.3,
        duration: 0.5,
    })
    .to('#javascript',{
        delay: 0.2,
        filter: 'blur(0)',
        stagger: 0.3,
        duration: 0.5,
    })
    .to('#css',{
        delay: 0.2,
        filter: 'blur(0)',
        stagger: 0.3,
        duration: 0.5,
    })
    .to('#saas-css',{
        delay: 0.2,
        filter: 'blur(0)',
        stagger: 0.3,
        duration: 0.5,
    })
    .to('#shopify',{
        delay: 0.2,
        filter: 'blur(0)',
        stagger: 0.3,
        duration: 0.5,
    })
    .to('#seo',{
        delay: 0.2,
        filter: 'blur(0)',
        stagger: 0.3,
        duration: 0.5,
    })
    .to('#gsap',{
        delay: 0.2,
        filter: 'blur(0)',
        stagger: 0.3,
        duration: 0.5,
    })
    .to('#vanilla-js',{
        delay: 0.2,
        filter: 'blur(0)',
        stagger: 0.3,
        duration: 0.5,
    })
    .to('#social-media-manager',{
        delay: 0.2,
        filter: 'blur(0)',
        stagger: 0.3,
        duration: 0.5,
    })
    .to('#digital-marketing',{
        delay: 0.2,
        filter: 'blur(0)',
        stagger: 0.3,
        duration: 0.5,
    })
    .to('#microsoft-office',{
        delay: 0.2,
        filter: 'blur(0)',
        stagger: 0.3,
        duration: 0.5,
    })
    .to('#webflow',{
        delay: 0.2,
        filter: 'blur(0)',
        stagger: 0.3,
        duration: 0.5,
    })
    .to('#tailwind-css',{
        delay: 0.2,
        filter: 'blur(0)',
        stagger: 0.3,
        duration: 0.5,
    })
    .to('#portfolio', {
        opacity: 1,
        stagger: 1,
        duration: 2
    })
    .to('#contact', {
        opacity: 1,
        stagger: 1,
        duration: 2
    });
// Onclick Mouse Animation

document.onclick = function () {

    let span = document.createElement("span");
    span.classList.add("click_effect");
}

document.onclick = function (e) {
    let x = e.pageX;
    let y = e.pageY;

    let span = document.createElement("span");
    span.classList.add("click_effect");
    span.style.top = y + "px";
    span.style.left = x + "px";
}
document.onclick = function (e) {
    let x = e.pageX;
    let y = e.pageY;

    let span = document.createElement("span");
    span.classList.add("click_effect");
    span.style.top = y + "px";
    span.style.left = x + "px";
    document.body.appendChild(span);

}

document.onclick = function (e) {
    let x = e.pageX;
    let y = e.pageY;

    let span = document.createElement("span");
    span.classList.add("click_effect");
    span.style.top = y + "px";
    span.style.left = x + "px";
    document.body.appendChild(span);

    setTimeout(() => {
        span.remove();
    }, 600);
}

// Arrow Follows Mouse Cursor Animation

// ARROW ONE

document.addEventListener('mousemove', (event) => {
    const arrow = document.getElementById('arrow');
    const arrowRect = arrow.getBoundingClientRect();
    const arrowX = arrowRect.left + arrowRect.width / 2;
    const arrowY = arrowRect.top + arrowRect.height / 2;
    const angle = Math.atan2(event.clientY - arrowY, event.clientX - arrowX) * 180 / Math.PI;

    arrow.style.transform = `rotate(${angle}deg)`;
});


// ARROW TWO

document.addEventListener('mousemove', (event) => {
    const arrow = document.getElementById('arrow2');
    const arrowRect = arrow.getBoundingClientRect();
    const arrowX = arrowRect.left + arrowRect.width / 2;
    const arrowY = arrowRect.top + arrowRect.height / 2;
    const angle = Math.atan2(event.clientY - arrowY, event.clientX - arrowX) * 180 / Math.PI;

    arrow.style.transform = `rotate(${angle}deg)`;
});


// LOCOMOTIVE JS INITILIZATION

const scroll = new LocomotiveScroll({
    el: document.querySelector('#container'),
    smooth: true
});




// ARROW three

document.addEventListener('mousemove', (event) => {
    const arrow = document.getElementById('arrow3');
    const arrowRect = arrow.getBoundingClientRect();
    const arrowX = arrowRect.left + arrowRect.width / 2;
    const arrowY = arrowRect.top + arrowRect.height / 2;
    const angle = Math.atan2(event.clientY - arrowY, event.clientX - arrowX) * 180 / Math.PI;

    arrow.style.transform = `rotate(${angle}deg)`;
});






// real animation

document.addEventListener('mousemove', function(dets) {
    document.querySelectorAll('.real').forEach((elem) => {
        const position = parseFloat(elem.getAttribute('value'));
        var x = (window.innerWidth - dets.clientX * position) / 80;
        var y = (window.innerHeight - dets.clientY * position) / 80;

        elem.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
});