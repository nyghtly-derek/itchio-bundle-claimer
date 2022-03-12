# itchio-bundle-claimer
Auto-claim all games from an itch.io bundle, adding them to your library. For example, "Bundle for Ukraine."

# Prerequisites
https://nodejs.org/en/download/

# How to Use
1. Add a `secrets.json` file to the root directory of this repository:
```
{
  "username": "my_username",
  "password": "totally secret"
}
```
2. Configure bundle name in `cypress.json`:
```
{
  ...
  "env": {
    "bundleName": "Bundle for Ukraine"
  },
  ...
}
```
3. `npm install`
4. `npx cypress open`
    - Alternatively, `npx cypress run` for headless.
    - If you encounter an error during the run, then you can simply retry. 
      - The robot will only claim games that haven't been claimed yet. 
