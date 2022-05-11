const { REACT_APP_XQSTOCK_API_URI, REACT_APP_XQSTOCK_API_TOKEN } = process.env;

if (!REACT_APP_XQSTOCK_API_URI) {
  throw new Error(`Missing ${REACT_APP_XQSTOCK_API_URI} environment variable`);
}

if (!REACT_APP_XQSTOCK_API_TOKEN) {
  throw new Error(
    `Missing ${REACT_APP_XQSTOCK_API_TOKEN} environment variable`
  );
}

export async function sendRequest(
  path: string,
  method: string,
  _body: Record<string, unknown> = {}
) {
  const headers = new Headers();
  headers.append("x-access-token", REACT_APP_XQSTOCK_API_TOKEN ?? "");

  const response = await fetch(`${REACT_APP_XQSTOCK_API_URI}/${path}`, {
    method,
    headers,
  });

  const { data } = await response.json();

  return data;
}

export default sendRequest;
