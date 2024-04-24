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


### Quickly cycles through every page of the bundle without clicking anything
This is expected behavior if you've already claimed all of the items in the bundle. We expect the script to skip any games that have been claimed. Unclaimed games have a "Claim" button. Claimed games have a "Download" button.
