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
                    sh "aws s3 cp ./hello.txt ${env.BRANCH_NAME}_S3_URL  --profile ${env.AWS_PROFILE}"
                }
            }
        }
    }
}
