# Medieval Life

A free, mobile-friendly, text-based medieval life simulator. Make choices with buttons, live year by year, and see how your decisions shape your reputation, career, relationships, wealth, and legacy.

**Repository:** https://github.com/gmaker505-a11y/medieval-life-simulator

## Play

Open `index.html` in a browser, or run the local server:

```bash
npm install
npm run serve
```

Then open `http://localhost:4173`.

The game saves the current life in that browser on that device. Use the Save button before switching devices; browser-local saves do not automatically sync between devices.

## What's in the current build

- Character creation with family backgrounds and personality traits.
- Year-by-year ageing and choice-driven random events.
- Health, happiness, intelligence, charm, reputation and money.
- Careers, relationships, children, wealth, and biography/history sections.
- Local save, new-life flow, and biography export.
- Responsive medieval parchment interface designed for mobile and desktop.

## Automatic screenshot and self-check system

GitHub Actions runs Playwright checks on pushes to `main`, pull requests, and manual workflow runs. Tests use both a mobile-sized viewport and a desktop viewport to:

- Start a life, advance a year, and make an event choice.
- Visit the main game sections.
- Check for horizontal layout overflow.
- Check that core screens render and that browser JavaScript errors do not occur.
- Capture screenshots of the opening life, yearly event, event result, save/reload, and navigation sections.

To review the latest results:

1. Open the repository's **Actions** tab.
2. Open the latest **Game tests and screenshots** run.
3. Download the `medieval-life-visual-checks` artifact.
4. Inspect the screenshots and Playwright report inside it.

The screenshot tests provide evidence for visual review; they do not guarantee every possible layout issue is detected. A passing workflow means the automated checks passed, not that every screenshot was manually inspected.

## Run the checks locally

```bash
npm install
npx playwright install chromium
npm test
```

Screenshots and traces are written to Playwright's test output folders. No paid services, subscriptions, or game assets are required.
