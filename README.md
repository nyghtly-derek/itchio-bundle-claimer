# itchio-bundle-claimer
Auto-claim all games from an itch.io bundle, adding them to your library. For example, "Bundle for Ukraine."

# Prerequisites
https://nodejs.org/en/download/

# How to Use
On Command Line:

1. `git clone https://github.com/nyghtly-derek/itchio-bundle-claimer.git`

2. `cd itchio-bundle-claimer`

3. `npm install`

4. `touch secrets.json`

5. Add your credentials to `secrets.json`:
```
{
  "username": "my_username",
  "password": "totally secret"
}
```

6. Configure bundle name in `cypress.json`:
```
{
  ...
  "env": {
    "bundleName": "Bundle for Ukraine"
  },
  ...
}
```

7. `npx cypress open`
    - Alternatively, `npx cypress run` for headless.
    - Make sure the authentication works before you walk away.
    - The robot will automatically retry if it encounters any errors.
