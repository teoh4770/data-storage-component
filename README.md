# Frontend Mentor - Fylo data storage component solution

This is a solution to the [Fylo data storage component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/fylo-data-storage-component-1dZPRbV5n). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### Screenshot

Desktop view
![image](https://user-images.githubusercontent.com/98545971/235217741-0d286839-1cec-4d0d-a5f0-cfb968240a38.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- BEM naming convention
- Custom UI Background

### What I learned

To see how you can add code snippets, see below:

```html
<div class="popup">
  <div class="popup-container">
	<div class="popup--content"><strong class="bold font-lg color-gradient">185 </strong>GB Left</div>
	<div class="popup--arrow"></div>
  </div>
</div>
```
```css
@media (hover: hover) {
  .gelatine {
    animation-name: gelatine;
    animation-duration: 500ms;
    animation-timing-function: cubic-bezier(0.6, 4, 0.3, 0.8);
    animation-fill-mode: forwards;
    filter: invert(1);
  }

  .container__btn:hover {
    outline: 2px solid var(--btn-color);
    outline-offset: 2px;
    filter: invert(1);
  }

  .container__btn:focus {
    outline: 2px solid var(--btn-color);
    outline-offset: 2px;
  }
}
```
```js
const buttons = document.querySelectorAll(".container__btn");

// gelatin effect on the button
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.add("gelatine");

    setTimeout(() => {
      button.classList.remove("gelatine");
    }, 500);
  });
});
```

### Useful resources

- [Gelatine animation effect](https://codepen.io/joellesenne/pen/yLgaBr)
- Create Pop up
<img width="787" alt="Screenshot 2023-04-28 at 1 55 24 PM" src="https://user-images.githubusercontent.com/98545971/235219447-3a727703-c24d-4208-b5f3-2dc6585e30e9.png">

- [CSS animation keyword](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
- [CSS filter keyword](https://developer.mozilla.org/en-US/docs/Web/CSS/filter)
- [Design a wave background](https://designcode.io/figma-handbook-wave-background)

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)


## Acknowledgments
Shout out to @correlucas and @ApplePieGiraffe from Frontend Mentor for inspiration and guidance
