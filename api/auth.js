export default function handler(req, res) {
  const clientId = process.env.GITHUB_CLIENT_ID;
  const host = req.headers.host;
  const redirectUri = `https://${host}/callback`;
  const state = Math.random().toString(36).slice(2);

  const authorizeUrl =
    `https://github.com/login/oauth/authorize?client_id=${clientId}` +
    `&redirect_uri=${encodeURIComponent(redirectUri)}` +
    `&scope=repo,user&state=${state}`;

  res.writeHead(302, { Location: authorizeUrl });
  res.end();
}
