# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshots (desktop and mobile)

![](./images/screenshot-desktop.jpg)


![](./images/screenshot-mobile.jpg)



### Links


- Solution URL:  [Github repository](https://github.com/memominguez/dropdown-navigation
)
- Live Site URL:  [Github pages](https://memominguez.github.io/dropdown-navigation/
)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Vanilla Javascript


### What I learned

Another experience with responsive menu bars. This time adding a dark semi-transparent overlay while displaying the mobile navigation menu.

The functions below are called for opening or closing the mobile navigation menu, along with overlay activation.

```js      
      function showSidebar() {
        const sideBar = document.querySelector(".sidebar");
        const overlay = document.getElementById('overlay')
        sideBar.style.display = "flex";       
        overlay.style.display = "initial"
      }

      function hideSidebar() {
        const sidebar = document.querySelector(".sidebar");
        const overlay = document.getElementById('overlay')
        sidebar.style.display = "none";      
        overlay.style.display = "none"
      }   
```

For the mobile menu, instead of hover actions, 'click' events are configured for dropdowns toggle.


For the only button button on the page body, 'hover' action is replaced by 'mouseenter' and  'mouseleave' events.


```js        
// Desktop hover effect
hoverButton.addEventListener("mouseenter", function () {
  this.classList.add("hover");
});

hoverButton.addEventListener("mouseleave", function () {
  this.classList.remove("hover");
});
```


For the same button, on mobile screens, the equivalent to 'hover' is configured by 'touchstart' and 'touchend' events.

```js        
// Mobile touch effect
hoverButton.addEventListener("touchstart", function () {
    this.classList.add("hover");
  }, { passive: true }
);

hoverButton.addEventListener("touchend", function () {
    this.classList.remove("hover");
  }, { passive: true }
);
```




### Continued development

Understand better about how the "hover" action works in touch-screens, without cursor.

### Useful resources

Some ideas taken from video tutorials, specially this below

- [Responsive dropdown navigation menu](https://www.youtube.com/watch?v=bk3Y4heVdFs) - Use of nested ul li ul li elements as basis for creating dropdown menus.

Also, some suggested code snippets were provided by ChatGPT: for the overlay and mouse events.

## Author


- Website - [Guillermo Dominguez](https://gdominguez-portfolio.netlify.app)
- Frontend Mentor - [@memominguez](https://www.frontendmentor.io/profile/memominguez)


## Acknowledgments


Thanks to all those who share their knowledge, free of charge, through video tutorials in the youtube platform.

Thanks to the creators and sponsors of ChatGPT and similar tools.
 
