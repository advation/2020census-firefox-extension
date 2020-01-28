var allowed_domain = "2020census.gov";
var redirect_url = "http://2020census.gov";

function redirect(requestDetails) {
	request_url = requestDetails.url;

	var regex = new RegExp("^(?:http(?:s)?:\/\/)?(?:[^\.]+\.)?"+allowed_domain+"(/.*)?$");

	// Check if within the same domain
	if(request_url.match(regex)) {
		// If within the domain
		console.log('Request passed')
	}
	else
	{
		// If prohibited domain
		console.log('Prohibited Domain: ' + request_url)
		return {
			redirectUrl:  browser.runtime.getURL(redirect_url)
		}
	}
}


// Intercept all requests
browser.webRequest.onBeforeSendHeaders.addListener (
  redirect,
  {urls:["<all_urls>"],types:["main_frame"]},
  ["blocking"]
);
