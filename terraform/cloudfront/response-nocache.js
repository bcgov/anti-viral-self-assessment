function handler(event) {
  var response = event.response;
  var headers = response.headers;

  // Set HTTP security headers
  // Since JavaScript doesn't allow for hyphens in variable names, we use the dict["key"] notation
  headers['strict-transport-security'] = { value: 'max-age=63072000; includeSubdomains; preload' };
  headers['content-security-policy'] = {
    value:
      "default-src 'self' s3.ca-central-1.amazonaws.com www2.gov.bc.ca spm.apps.gov.bc.ca spt.apps.gov.bc.ca; frame-ancestors 'self'; form-action 'self';",
  };
  headers['x-content-type-options'] = { value: 'nosniff' };
  headers['x-frame-options'] = { value: 'DENY' };
  headers['x-xss-protection'] = { value: '1; mode=block' };
  headers['cache-control'] = { value: 'no-cache, no-store, must-revalidate' };

  // Return the response to viewers
  return response;
}
