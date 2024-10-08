# CiBiC Journal website
This repo contains the code for [app.cibic.bike](https://spp.cibic.bike) site which is part of the CiBiC Project.

## Installation
Clone into this repo on your local machine and run `yarn install` to download and install the required packages.

### Dependencies
All project dependencies can be found in [package.json](./package.json)
 
 - [nodejs ^16.16.0](https://nodejs.org/en)
 - [yarn ^1.22.18](https://yarnpkg.com/) 
 - [react ^17.0.2](https://react.dev/)

### Building and running the project
Use `yarn start` to build and run a local development version of the site. 

Use `yarn build` to create a production ready version of the site in `./build` directory of the project.

## Deploying to Production Site
This repo utilizes GitActions to deploy the site to [https://app.cibic.bike](https://app.cibic.bike). This automation can be found in [.github/workflows](./.github/workflows/push-to-prod.yml).

_Automatic deployment will run on **ANY** push to main_

Its highly advised to use another branch to develop on and then use a PR to merge changes into main.

The production site is hosted in an S3 bucket that is distributed with CloudFront.
### Repository Secrets Required for Automatic Deploy:
|Secret Name		| Secret Value |
|--         		|--            |
| AWS_S3_BUCKET 	| The name of the S3 bucket for deployment |
| AWS_ACCESS_KEY_ID 	| An Access Key for the IAM User |
| AWS_SECRET_ACCESS_KEY | The Access Key Secret for the IAM User |
| DISTRIBUTION 		| The CloudFront Distribution ID for a cache invalidation |
## Contributors
- [@IanShelanskey](https://github.com/IanShelanskey)
- [@radialbalance](https://github.com/radialbalance)
- [@raganmd](https://github.com/raganmd)

## RideWithGPS Login Lambda Function
In the lambda directory is a lambda function that is to be manually deployed. This function is a proxy login for the RideWithGPS API. 

An environment variable must be configured for the RideWithGPS API Key. 

`RWGPS_KEY` should be set to be the RideWithGPS API Key

---
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).