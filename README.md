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

- Solution URL: Pending
- Live Site URL: Pending

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Vanilla Javascript


### What I learned

Another experience with responsive menu bars. This time adding a dark semi-transparent overlay while displaying the mobile navigation menu.

The functions below are called for opening or closing the mobile navigation menu.

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

Testing the dropdowns, they work ok in desktop, on hover. Neither transform or animations worked in a touch screen.

### Continued development

Understand better about how the "hover" action works in touch-screens, without cursor.

### Useful resources

Some ideas taken from video tutorials, specially this below

- [Responsive dropdown navigation menu](https://www.youtube.com/watch?v=bk3Y4heVdFs) - Use of nested ul li ul li elements as basis for creating dropdown menus.

Also, some tips provided by ChatGPT for creating the overlay.

## Author


- Website - [Guillermo Dominguez](https://gdominguez-portfolio.netlify.app)
- Frontend Mentor - [@memominguez](https://www.frontendmentor.io/profile/memominguez)


## Acknowledgments


Thanks to all those who share their knowledge, free of charge, through video tutorials in the youtube platform.
 
