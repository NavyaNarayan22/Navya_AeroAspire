# Linux Basics + Multipass Setup

## Overview

This section describes how to create a virtualized Ubuntu environment with Multipass, practice essential Linux command-line (CLI) skills, and prepare a basic software development workspace (Python, Git, curl, net-tools). It is aimed at new users who want to quickly get hands-on experience with Linux for programming and environment management.

## Multipass Installation and VM Launch

- **Multipass** is a cross-platform tool for rapidly launching and managing Ubuntu VMs .
- Install Multipass:
  - On Windows: Download from [Multipass official site] or use `winget install --id Canonical.Multipass`.
  - On Ubuntu: `sudo snap install multipass`
- Launch a new Ubuntu VM (example with resource specification):
  - `multipass launch --name ubuntu-vm --memory 2G --disk 10G`
- See running VMs:
  - `multipass list`
- Enter the VM’s shell:
  - `multipass shell ubuntu-vm`
- VM instance starts with a fresh Ubuntu, ready for use[web:114][web:115][web:124].

## SSH into Your VM

- You can SSH into the VM for advanced use, or use `multipass shell` for direct command-line access.

## Practice Basic Linux CLI Commands

- **Navigating and manipulating files:**
  - `ls` — list files and directories
  - `cd` — change current directory
  - `pwd` — print working directory
  - `touch file.txt` — create an empty file
  - `nano file.txt` — simple text editor for editing files
  - `rm file.txt` — remove files
  - `chmod +x script.sh` — change file permissions to executable
  - `mkdir folder` — create new directories
  - `sudo` — run commands with administrative privileges[web:119][web:122][web:128].

## Install Basic Developer Tools

- Update package information: `sudo apt update`
- Install required packages:
  - `sudo apt install -y python3 python3-pip git curl net-tools`
- Check installations:
  - `python3 --version`
  - `git --version`
  - `curl --version`
  - `ifconfig` (from net-tools package)

## Organize Workspace and Run Python

- Make a working folder: `mkdir myproject && cd myproject`
- Add/edit files (e.g., with `nano hello.py`)
- Run Python scripts: `python3 hello.py`
- Example: Create a script that prints “Hello, world!” in Python and execute it to verify setup.

## Best Practices

- Use Multipass for fast, isolated, disposable VMs ideal for development and experimentation.
- Practice CLI commands regularly to improve confidence and speed for navigation and system management.
- Keep your VM up to date (`sudo apt upgrade`) and take snapshots if you want to save state for later reuse.


