# Carousel Playground

**A responsive, multi-card image carousel built from scratch with vanilla JavaScript and CSS transforms.**

**[Source](https://github.com/Shalabyelectronics/carousel-playground)**

## About

Carousel Playground is a front-end practice project developed to build a custom multi-card slider from scratch without third-party carousel libraries. It focuses on DOM manipulation, dynamic coordinate calculations, and smooth CSS transitions. The carousel automatically adjusts the number of displayed items and pagination controls based on container and element dimensions.

## Features

- **Custom Sliding Logic**: Moves slides smoothly along the X-axis using CSS `translateX` transforms managed by JavaScript.
- **Dynamic Geometry Calculations**: Uses `getBoundingClientRect()` to compute the visible card count based on container width.
- **Next & Previous Navigation**: Directional buttons with boundary wrapping to cycle continuously through items.
- **Dynamic Pagination Dots**: Generates indicator dots programmatically according to the computed number of visible pages.
- **Direct Slide Navigation**: Allows jumping directly to specific slide sets by clicking individual pagination dots.
- **Responsive Resize Handling**: Listens to window resize events to recalculate offsets and re-render pagination indicators.

## Built With

- HTML5
- CSS3 (Custom properties, Flexbox, Transitions)
- Vanilla JavaScript (ES6+)
- Bootstrap 5 (Layout and grid system)
- Font Awesome 6 (Navigation arrow icons)

## What I Learned

- Measuring dynamic element widths and container limits using `getBoundingClientRect()` instead of hardcoded breakpoints.
- Creating and attaching event listeners to dynamically generated DOM elements (pagination dots).
- Controlling horizontal slide positioning using CSS transforms modified through inline JavaScript styles.
- Handling window resize events to recalculate slide metrics and prevent layout overflow.

## Getting Started

This is a static front-end project and requires no package installations or build steps.

1. Clone the repository:
   ```bash
   git clone https://github.com/Shalabyelectronics/carousel-playground.git
   ```
2. Navigate into the project folder:
   ```bash
   cd carousel-playground
   ```
3. Open `index.html` in any modern web browser or run it with VS Code Live Server.

## Project Structure

```text
carousel-playground/
├── css/
│   ├── all.min.css
│   ├── bootstrap.min.css
│   └── style.css
├── js/
│   ├── bootstrap.bundle.min.js
│   └── index.js
└── index.html
```

## Roadmap

- [ ] Add touch swipe and mouse drag gesture support
- [ ] Add an autoplay feature with pause-on-hover functionality
- [ ] Implement ARIA accessibility roles and keyboard navigation (left/right arrow keys)
- [ ] Replace placeholder card content with dynamic image and text data

## Author

Mohamed Shalaby
- Website: [shalabycode.dev](https://shalabycode.dev)
- GitHub: [@Shalabyelectronics](https://github.com/Shalabyelectronics)
- LinkedIn: [mhdshalaby](https://www.linkedin.com/in/mhdshalaby/)
