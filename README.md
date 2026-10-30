# Nandhakumar N - Java Developer Portfolio

React + Vite + plain CSS. Frontend only, no backend.

## Run in VS Code (Windows)
1. Install Node.js LTS from https://nodejs.org (restart VS Code afterwards).
2. In VS Code: File > Open Folder > select `Nandhakumar_Java_Developer_Portfolio`.
3. Open the terminal (Ctrl + `) and run:
   ```
   npm install
   npm run dev
   ```
4. Open the printed address (usually http://localhost:5173) in Chrome.

## Add your resume
Copy your PDF into the `public` folder and name it exactly `Nandhakumar_N_Resume.pdf`.
The Resume button downloads `/Nandhakumar_N_Resume.pdf`.

## Test in Chrome
- Click every nav link; the active pill should follow your scroll.
- Narrow the window below 880px: hamburger menu appears and closes after a tap.
- Click GitHub, LinkedIn, Email, View Repository and Resume.
- Refresh (F5) at any scroll position; the page should reload normally.

## Fix a blank page
1. Press F12 > Console and read the first red error.
2. "Failed to resolve import ..." means a file name/path is wrong (names are case-sensitive).
3. "Cannot find module" means run `npm install` again.
4. Stop the server (Ctrl+C), delete `node_modules`, run `npm install` then `npm run dev`.
5. Make sure you opened `localhost`, not `index.html` directly by double-click.

## Build
```
npm run build      # outputs /dist
npm run preview    # test the production build locally
```

## Deploy free
**Vercel:** push the folder to GitHub > vercel.com > Add New Project > import the repo > Deploy (Vite is auto-detected).
**Netlify:** push to GitHub > app.netlify.com > Add new site > Import from Git > build command `npm run build`, publish directory `dist`.
(Or drag the `dist` folder onto https://app.netlify.com/drop after building.)
