pipeline {
    // define jenkins node/agent to be executed by
    agent { node { label env.NODE_AGENT_1 } }

    // declare env vars
    environment {
        // Define environment variables as maps
        BRANCH_S3_URL = ""
        BRANCH_AWS_PROFILE = ""
    }

    // stages to execute
    stages {
        // initialize env vars
        stage('Init') {
            steps {
                script {
                    def envBranch = env.BRANCH_NAME.toUpperCase()
                    env.BRANCH_S3_URL = env["${envBranch}_S3_URL"]
                    env.BRANCH_AWS_PROFILE = env["${envBranch}_AWS_PROFILE"]
                }
            }
        }

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
        stage('Push to AWS S3') {
            steps {
                script {
                    // generate cli command for env s3 bucket
                    def s3Url = env.BRANCH_S3_URL
                    def awsProfile = env.BRANCH_AWS_PROFILE

                    sh "aws s3 cp ./hello.txt ${s3Url} --profile ${awsProfile}"
                }
            }
        }
    }

    post {
        success {
            echo "Process successful."
        }
        failure {
            echo "Process failed."
        }
    }
}
