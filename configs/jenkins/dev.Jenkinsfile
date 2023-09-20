pipeline {
    // define jenkins node/agent to be executed by
    agent { node { label env.NODE_AGENT_1 } }

    // stages to execute
    stages {
        // initialize env vars
        stage('Init') {
            steps {
                script {
                    // parse branch name for env vars
                    def envBranch = env.BRANCH_NAME.toUpperCase()
                    BRANCH_S3_URL[envBranch] = env["${envBranch}_S3_URL"]
                    BRANCH_AWS_PROFILE[envBranch] = env["${envBranch}_AWS_PROFILE"]
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
                    // Access environment variables based on branch name
                    def envBranch = env.BRANCH_NAME.toUpperCase()
                    def s3Url = BRANCH_S3_URL[envBranch]
                    def awsProfile = BRANCH_AWS_PROFILE[envBranch]

                    sh "aws s3 cp ./hello.txt ${s3Url} --profile ${awsProfile}"
                }
            }
        }
    }
}
