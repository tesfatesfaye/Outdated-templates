# Vite React Skeleton
This repository provides a React skeleton to ease your project setup process, bundled with Vite and pre-includes the react-svg-favicon library. It's designed to be used in conjunction with a bash script to allow easy inclusion of React libraries right out of the box.

## Prerequisites

Before you start, make sure you have the following installed on your machine:

- Node.js
- npm
- Visual Studio Code (or your preferred IDE)

**Note:** If you're using an IDE other than Visual Studio Code, you'll need to adjust the script file accordingly.

## Usage

Follow these steps to use the React skeleton:

1. Fork this repository.
2. Save the following commands in a notepad file (or a bash script for Unix users). Be sure to replace `GITHUB_USERNAME` with your own GitHub username.

    ```bash
    git clone git@github.com:GITHUB_USERNAME/Vite-React-Skeleton.git Client
    cd Client
    rm -rf .git # remove this line if you want to associate the project with the forked repo
    npm install
    npm audit fix
    cd ..
    rm -rf script.sh
    code . # remove this line if you do not use Visual Studio Code
    cd Client
    npm run dev
    ```

Run these commands in your terminal or command prompt to set up and start your new React project.

**Important:** This script will delete itself after running, so ensure you have a saved copy of the script before executing it.

## Built With

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [react-svg-favicon](https://www.npmjs.com/package/react-svg-favicon)

## Contributing

Contributions are always welcome! See `CONTRIBUTING.md` for ways to get started.

## License

This project is licensed under the MIT License - see `LICENSE.md` file for details.
