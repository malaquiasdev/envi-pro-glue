# EnviPro Glue Service

This is an unofficial api. We are made by fan for fan.

To know more about us please go to our [Wiki page](https://github.com/malaquiasdev/studio-ghibli-database-graphql/wiki/01.Introduction
).

]
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

**I strongly recommend you to use docker as an option to run this project.**

## Installing
1. Clone this repository. `$ git clone https://github.com/malaquiasdev/envi-pro-glue.git`
2. Go to the project folder. `$ cd envi-pro-glue`
3. Copy the **.env.example** file and create an **.env** file with your AWS Credentials.

## Execute
1. Install the dependencies. `$ yarn install`
2. Run offline but the DynamoDB must be in the configure in AWS. `$ sls invoke local --function {function-name} --data  '{"category":"biologo"}'`

## Deploy it in AWS

1. Run the comand `$ yarn deploy:{stage}`, we have 3 stages in this project: dev, test and prod.
2. Change the `FunctionName` in state-machine.json file after the deploy, before create a new state machine in step functions services.

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

## License

This project uses the following license: [MIT](https://github.com/malaquiasdev/studio-ghibli-database-graphql/blob/master/LICENSE).
