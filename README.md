# SpendWise Dashboard

## Project Description

SpendWise is a responsive expense-tracking dashboard built using HTML and CSS. The project focuses on creating a clean dashboard layout using CSS Grid, Flexbox, CSS custom properties, responsive design, and simple card micro-interactions.

## Features

* Responsive dashboard layout
* Sidebar navigation menu
* Dashboard header
* Summary section showing budget information
* Six spending category cards
* CSS Grid for the main page and category cards
* Flexbox for navigation, header, summary cards, and dashboard cards
* CSS custom properties for the color theme
* Hover and keyboard focus effects
* Responsive layout for screens below 768px
* Dark theme using `prefers-color-scheme`

## Spending Categories

The dashboard contains six categories:

1. Food
2. Transport
3. Rent
4. Entertainment
5. Savings
6. Utilities

## Technologies Used

* HTML5
* CSS3
* CSS Grid
* Flexbox
* CSS Custom Properties
* CSS Media Queries

## Layout

CSS Grid is used for the main dashboard structure and category card layout.

Flexbox is used inside the sidebar, header, summary section, and individual cards to arrange their contents.

## Responsive Design

The dashboard changes to a single-column layout on screens smaller than 768px. The layout can be tested using the browser's DevTools Device Toolbar.

## Micro-interactions

The category cards have hover and keyboard focus effects. The cards move slightly upward and display a subtle shadow. The transition duration is 200ms.

## Dark Theme

A dark theme is included using:

`@media (prefers-color-scheme: dark)`

The dark theme changes the CSS custom properties without changing the main layout styles.

## Project Files

* `index.html` — Contains the dashboard structure and static content.
* `style.css` — Contains the layout, responsive design, theme variables, and card interactions.
* `README.md` — Explains the project and its implementation.

## Author

Omari Farugu
