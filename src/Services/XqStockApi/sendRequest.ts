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
  body: Record<string, unknown> = {}
) {
  const headers = new Headers();
  headers.append("x-access-token", REACT_APP_XQSTOCK_API_TOKEN ?? "");
  headers.append("content-type", "application/json");

  const init: Record<string, string | Headers> = {
    method,
    headers,
  };

  if (method === "POST") {
    init.body = JSON.stringify(body);
  }

  const response = await fetch(`${REACT_APP_XQSTOCK_API_URI}/${path}`, init);
  const { data } = await response.json();

  return { data, status: response.status };
}

export default sendRequest;
