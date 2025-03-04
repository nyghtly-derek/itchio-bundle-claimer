# itchio-bundle-claimer
Auto-claim all games from an itch.io bundle, adding them to your library. For example, "Bundle for Ukraine."

## How to Use

### Prerequisites
[Download Node.js](https://nodejs.org/en/download/)

### Step-by-Step
On Command Line:

1. `git clone https://github.com/nyghtly-derek/itchio-bundle-claimer.git`

2. `cd itchio-bundle-claimer`

3. `npm install`

4. Create secrets file:
    - Mac / Linux: `touch secret.json`
    - Windows: `copy nul "secret.json"`

5. Add your credentials to `secret.json`:
```
{
  "username": "my_username",
  "password": "totally secret"
}
```

6. Configure bundle name in `cypress.config.ts`:
```
{
  ...
  "env": {
    "bundleName": "Bundle for Ukraine"
  },
  ...
}
```

7. `npx cypress open --e2e --browser chrome`
    - Alternatively, `npx cypress run` for headless.
    - Make sure the authentication works before you walk away.
    - The robot will automatically retry if it encounters any errors.

## Troubleshooting

### Two Factor Authentication (2FA)
You will need to [disable this temporarily](https://itch.io/user/settings/two-factor-auth) for the script to work. Make sure you turn it back on when you're done. I'm hoping to add support for this in the future.

### Claims a single game and then errors out with message about subdomain
For example, Cypress would print the error message "command was expected to run against origin https://itch.io, but the application is at origin https://foo.itch.io." This error will happen if you are using a Cypress version greater than 13. To solve this, all we need to do is install the same version of Cypress that is pinned in package.json. Here's one way of doing that:

```bash
npm run force-clean-install
npx cypress open --e2e --browser chrome
```

See [issue 25](https://github.com/nyghtly-derek/itchio-bundle-claimer/issues/25) for more detail.

### Quickly cycles through every page of the bundle without clicking anything
This is expected behavior if you've already claimed all of the items in the bundle. We expect the script to skip any games that have been claimed. Both unclaimed and claimed games have a "Download" button, although the html underneath is different between the two.

### Gets stuck on a page and requires manual intervention
I've heard some reports of this behavior, but I'm not sure what's happening. Please take a full-page screenshot and report as an issue.
