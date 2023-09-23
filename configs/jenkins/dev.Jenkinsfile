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
        stage('Depoly to AWS S3') {
            steps {
                script {
                    // sync build files to aws s3 bucket
                    sh "aws s3 sync ./build ${env.DEV_S3_URL} --profile ${env.DEV_AWS_PROFILE}"
                }
            }
        }
    }
}
