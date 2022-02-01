function handler(event) {
  var response = event.response;
  var headers = response.headers;

  // Set HTTP security headers
  // Since JavaScript doesn't allow for hyphens in variable names, we use the dict["key"] notation
  headers['cache-control'] = { value: 'public, max-age=604800, immutable' }

  // Return the response to viewers
  return response;
}
