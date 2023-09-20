pipeline {
    // define jenkins node/agent to be executed by
    agent { node { label env.NODE_AGENT_1 } }

    // stages to execute
    stages {
        // build using npm
        stage('Build') {
            steps {
                // install dependencies
                echo 'installing dependencies'
                script {
                    sh 'npm install'
                }

                // create build
                echo 'creating build'
                script {
                    sh 'npm run build'
                }
            }
        }

        // aws cli stage
        stage('AWS S3') {
            steps {
                script {
                    sh 'aws --version'

                    // parse branch name for environment
                    def envBranch = env.BRANCH_NAME.toUpperCase()
                    def s3Url = env["${envBranch}_S3_URL"]
                    def awsProfile = env["${envBranch}_AWS_PROFILE"]

                    sh "aws s3 cp ./hello.txt ${s3Url}  --profile ${awsProfile}"
                }
            }
        }
    }
}
