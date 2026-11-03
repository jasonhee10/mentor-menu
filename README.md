# 300 Connect Mentor Menu

Mentor directory for 300 Connect: Live (VMN × Misneach). Plain HTML/CSS/JS, no build step.

## Files

- `index.html` – the page
- `styles.css` – styling
- `mentors.js` – **all mentor info lives here**
- `photos/` – mentor headshots

## Add or change a mentor photo (no coding)

1. On GitHub, open the `photos` folder → **Add file → Upload files** → drop in the headshot (e.g. `jane-doe.jpg`) → **Commit changes**.
2. Open `mentors.js` → click the pencil icon → set that mentor's `"photo": "photos/jane-doe.jpg"` → **Commit changes**.
3. Vercel redeploys automatically in about 30 seconds.

Tips: square-ish JPG/PNG, face centered, under ~300 KB. File names are case-sensitive: `Jane.JPG` ≠ `jane.jpg`.

## Edit mentor details

Edit `mentors.js` the same way. Each mentor looks like:

```js
{"name": "Jane Doe", "title": "Partner", "company": "Acme Ventures",
 "linkedin": "https://www.linkedin.com/in/janedoe", "photo": "photos/jane-doe.jpg",
 "topics": ["Angel Investors", "Pitch Deck Feedback"],
 "expertise": "One or two sentences.", "table": "4"},
```

Topics must match the names in `TOPICS` exactly. Set `window.SAMPLE = false;` to hide the "Preview" banner once real mentors are in.

## Preview locally

Double-click `index.html` to open it in a browser.
