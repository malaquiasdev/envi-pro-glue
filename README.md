# EnviPro Glue Service

This project is a crawler used to collect data from vacants webpages using AWS Step functions.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You must have an AWS Credentials
- Configure the [AWS CLI](https://aws.amazon.com/pt/cli/)
- You have access to [DynamoDB](https://aws.amazon.com/pt/dynamodb/)
- You have installed the [Node.js](https://nodejs.org/en/)
- You have installed the [Yarn](https://yarnpkg.com/getting-started/install)

## AWS services that we use

- AWS CloudFormation
- AWS CloudFront
- AWS Lambda
- AWS Step Functions
- AWS S3
- AWS DynamoDB
- AWS Cloud Watch

## Installing
1. Clone this repository. `$ git clone https://github.com/malaquiasdev/envi-pro-glue.git`
2. Go to the project folder. `$ cd envi-pro-glue`
3. Install the dependencies. `$ yarn install`

## Execute Local
1. Run offline but the DynamoDB must be in the configure in AWS.
2. Execute the command: `$ sls invoke local --function {function-name} --data  '{ x: { y: "z" } }'`

## Deploy it in AWS

1. Run the comand `$ sls deploy --stage {STAGE} `, we have 3 stages in this project: dev, test and prod.

## Contributing

1. Fork this repository.
2. Create a branch: `$ git checkout -b <branch_name>`.
3. Make your changes.
4. Run the test suite: `$ yarn test`
5. Run the linter suite: `$ yarn lint`
6. Fix the test and linter errors if exists.
7. Commit your changes: `$ git commit -m '<commit_message>'`
8. Push to the original branch: `$ git push origin envi-pro-glue/<branch_name>`
9. Create the pull request.

Alternatively see the GitHub documentation on [creating a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## Contributors

Thanks to the following people who have contributed to this project:

- [@malaquiasdev](https://github.com/malaquiasdev)

## Contact

If you want to contact me you can reach me at <mateusmalaquiasdev@outlook.com>.