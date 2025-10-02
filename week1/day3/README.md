# Git Basics & Branches

## Overview
This project demonstrates essential Git workflows: initializing a repository, committing daily work, creating feature branches, and merging after review. It is designed to help you practice version control and collaborative development using Git and GitHub.

## Getting Started

### 1. Initialize the Repository
- Open your project folder in the terminal.
- Run:
  ```
  git init
  ```
- Add a remote if pushing to GitHub:
  ```
  git remote add origin <your-repo-url>
  ```

### 2. Commit Daily Work
- Make changes to your files (add, edit, or delete).
- Stage the changes:
  ```
  git add .
  ```
- Commit with a descriptive message:
  ```
  git commit -m "Describe your changes"
  ```
- Push to the main branch:
  ```
  git push origin main
  ```

### 3. Create a Feature Branch
- Create and switch to a new branch for a feature or fix:
  ```
  git checkout -b feature/your-feature-name
  ```
- Make and commit your changes as usual.
- Push the branch to GitHub:
  ```
  git push origin feature/your-feature-name
  ```

### 4. Merge After Review
- Open a Pull Request (PR) on GitHub from your feature branch to `main`.
- Request a review from collaborators.
- After approval, merge the PR into `main`.
- Pull the latest changes locally:
  ```
  git checkout main
  git pull origin main
  ```

## Key Concepts & Reflections

### Workflow: Changes → Staging → Commit → Push
1. **Make changes**: Add, edit, or delete files.
2. **Stage**: Select files to include in the next commit (`git add`).
3. **Commit**: Save a snapshot of staged changes locally with a message (`git commit`).
4. **Push**: Upload commits to the remote repository (`git push`).

### What is a Merge Conflict?
- **Cause**: Happens when changes in two branches overlap and Git cannot automatically decide which version to keep.
- **Resolution**: Manually edit the conflicted files to choose or combine changes, then stage and commit the resolved files.

### What Happens Under the Hood with `git commit`?
- Git saves a snapshot of your staged changes.
- It creates objects: **blobs** (file contents), **trees** (directory structure), and **commits** (history and metadata).
- Each commit links to the previous commit, forming a history chain.

## Example Branch Workflow
1. `git checkout -b feature/login-form`  
2. Make changes and commit:  
   `git add .`  
   `git commit -m "Add login form"`
3. Push branch:  
   `git push origin feature/login-form`
4. Open a Pull Request on GitHub and merge after review.

## Best Practices
- Commit often with clear messages.
- Use feature branches for new work.
- Review and test before merging.
- Pull latest changes before starting new work to avoid conflicts.

