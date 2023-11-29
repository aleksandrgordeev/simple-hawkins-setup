# Basic Hawkins setup with VPN

To set up the Hawkins component for local development with Netflix-hosted Hawkins components, you must be connected to the Netflix VPN.

1.  Add the following lines to the .npmrc file:

```
registry = <https://artifacts.netflix.net/api/npm/npm-netflix/>
@netflix:registry=https://artifacts.netflix.net/api/npm/npm-netflix/
@netflix-internal:registry=https://artifacts.netflix.net/api/npm/npm-netflix/
email = artifactoryadmins@netflix.com

```

2.  Run `npm install @hawkins/components @hawkins/icons @hawkins/styles @hawkins/variables --save`
3.  Follow the [official documentation](https://hawkins-professional.prod.netflix.net/how-to-quick-start) to use Hawkins components.

This setup will work fine for your local development environment but may not work in CI/CD since the package repository is behind the VPN.