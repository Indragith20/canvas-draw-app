import { renderToString } from 'react-dom/server';
import { RemixServer } from 'remix';

export default function handleRequest(
  request,
  responseStatusCode,
  responseHeaders,
  remixContext
) {
  const markup = renderToString(
    <RemixServer context={remixContext} url={request.url} />
  );

  responseHeaders.set('Content-Type', 'text/html');

  return new Response('<!DOCTYPE html>' + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}

export const handleDataRequest = (
  response,
  // same args that get passed to the action or loader that was called
  { request, params, context }
) => {
  console.log('Initakl', params);
  return response;
};
