# itchio-bundle-claimer

Auto-claim all games from an itch.io bundle, adding them to your library. For example, "Bundle for Ukraine" or "Bundle for Racial Justice and Equality".

## How to Use

### Prerequisites

[Download Node.js](https://nodejs.org/en/download/)

### Step-by-Step

On Command Line:

1. `git clone https://github.com/nyghtly-derek/itchio-bundle-claimer.git`

2. `cd itchio-bundle-claimer`

3. `npm clean-install`

4. Create secrets file:

   - Mac / Linux: `touch secret.json`
   - Windows: `copy nul "secret.json"`

5. Add your credentials to `secret.json`:

```
{
  "username": "my_username",
  "password": "totally_secret",
  "totp": "base32 string"
}
```

6. Configure bundle name in `cypress.config.ts`:

```
{
  ...
  "env": {
    "bundleName": "Bundle for Racial Justice and Equality"
  },
  ...
}
```

7. `npx cypress open --e2e --browser electron`
   - Alternatively, `npx cypress run` for headless.
   - Make sure the authentication works before you walk away.
   - The robot will automatically retry if it encounters any errors.

## Troubleshooting

### Quickly cycles through every page of the bundle without clicking anything

This is expected behavior if you've already claimed all of the items in the bundle. We expect the script to skip any games that have been claimed. Both unclaimed and claimed games have a "Download" button, although the html underneath is different between the two.

### Gets stuck on a page and requires manual intervention

I've heard some reports of this behavior, but I'm not sure what's happening. Please take a full-page screenshot and report as an issue.
