# Responsive Layout & GitHub Pages Deployment

## Overview
This repository contains a sample responsive layout project, polished for various screen sizes and deployed using GitHub Pages. The project demonstrates modern HTML and CSS techniques, including media queries for breakpoints and interactive states for improved user experience.

## Features
- **Responsive Design:** Layout adapts to desktop, tablet, and mobile screens using CSS media queries.
- **Polished Styling:** Includes hover, focus, and active states for buttons and links to enhance user feedback.
- **Live Demo:** Deployed on GitHub Pages for easy access and sharing.

## How to View the Site
- Visit the live site: [https://navyanarayan22.github.io/responsive_layout/](https://navyanarayan22.github.io/responsive_layout/)

## How to Deploy on GitHub Pages
1. **Create a GitHub Repository:** Start by creating a new repository on GitHub.
2. **Push Your Code:** Use `git add .`, `git commit -m "Initial commit"`, and `git push` to upload your files.
3. **Configure GitHub Pages:**
   - Go to your repository's **Settings**.
   - Scroll down to **Pages** in the left sidebar.
   - Under **Build and deployment**, select your source (usually `main` branch).
   - Choose **GitHub Actions** for automated deployment, or use the classic Pages experience.
   - After setup, GitHub will provide a link to your live site.
4. **Check Actions:** If using GitHub Actions, monitor the Actions tab for build and deploy status. If you see a 404 error, double-check your source settings and try again.

## Reflections & Questions
### 1. Steps Followed for Deployment
- Created a GitHub repository.
- Committed and pushed project files.
- Configured GitHub Pages in repository settings.
- Selected the correct source and deployment method.
- Used the provided link to access the live site.

### 2. Difficulties Faced
- Initial confusion about deployment steps and source selection.
- Encountered 404 errors when the wrong source was chosen.
- Resolved issues by reviewing resources and ensuring the correct branch/media was selected for deployment.

### 3. How Responsive Breakpoints Work (CSS Media Queries)
- Responsive breakpoints use CSS media queries to adjust layout based on device width.
- Example: On mobile, layout stacks vertically; on desktop, it may use multiple columns.
- The browser checks screen width and applies the appropriate CSS rules for optimal display.

### 4. Importance of Hover/Focus/Active States for UX
- These states provide visual feedback, letting users know when elements are interactive or being activated.
- "Active" status indicates an operation is in progress (e.g., button press).
- Improves usability and accessibility by making interactions clear.

## Technologies Used
- **HTML5**
- **CSS3** (Flexbox, Grid, Media Queries)
- **GitHub Pages** for deployment

