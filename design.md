#Resources/Endpoint relationship

Endpoints method are defined and organized under `/resource` based on their resource (eg. "Movie"). All classes of resource extends from the Endpoint class to leverage common endpoint-related methods such as request and pagination.

This relationship provides flexbility for us to reuse common endpoint methods for current/new resource classes and adding in new functionality in the endpoint class (eg. Sorting, Filtering) would become available to all resource classes as well.

This relationship also makes unit testing easier as it allows us to focus testing the common endpoint methods in the Endpoint Class while in Resource classes the main focus would be testing if intended params were passed through.

#Testing

Unit tests were done in Mocha and Chai with mocking support from nook.

Nook intercepts requests for a specifc URL path and allows our test to easily check whether we were hitting the correct URL path with expected parameters

#Developer Experience

The JS chaining support from client -> resource -> endpoint (eg. `client.move.getMovies()`) was done to mirror the hierachy on how endpoints were organized in the official documentation.

The verbose naming of endpoint method (eg. getMovieById ) were done intentionally so the developer can easily understand the functionality of the endpoint method.
