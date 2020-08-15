// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  clientId: '912a79b35603492291b382ebd0733970',
  clientSecret: '0338d98a37d9471ea017fd10c0275e8f',
  redirectUri: 'http://localhost:4200/search',
  oAuthUrl: "https://accounts.spotify.com/authorize?client_id=912a79b35603492291b382ebd0733970&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Fsearch%2F&scope=user-read-private%20user-read-email&response_type=token&state=123"
}
