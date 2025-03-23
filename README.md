# Bloopstrap

A lightweight js framework for easy dropdowns, carousels, and more UI components coming soon

## Installation

#### CSS
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/gudiudi/bloopstrap@main/dist/bloopstrap.min.css">
```

#### JS
```html
<script src="https://cdn.jsdelivr.net/gh/gudiudi/bloopstrap@main/dist/bloopstrap.min.js"></script>
```

## Usage
#### Dropdown
```html
<div class="dropdown">
  <button class="btn" type="button" data-toggle="dropdown">Dropdown</button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
```

#### Carousel
```html
<div class="carousel">
  <div class="carousel-inner">
    <div class="carousel-item">
      <img src="..." width="300" height="200">
    </div>
    <div class="carousel-item active">
      <img src="..." width="300" height="200">
    </div>
    <div class="carousel-item">
      <img src="..." width="300" height="200">
    </div>
  </div>
  <a class="carousel-control-prev" role="button" data-slide="prev" data-toggle="carousel">
    Previous
  </a>
  <a class="carousel-control-next" role="button" data-slide="next" data-toggle="carousel">
    Next
  </a>
</div>
```

## Upcoming Features

1. [ ] More Components – modals, tooltips, tabs, and more
2. [ ] Better Accessibility
3. [ ] Publish as a npm package