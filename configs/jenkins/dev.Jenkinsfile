pipeline {
    // define jenkins node/agent to be executed by
    agent { node { label env.NODE_AGENT_1 } }

    // stages to execute
    stages {
        // install npm packages
        stage('Install NPM Packages') {
            steps {
                echo 'installing dependencies'
                script {
                    sh 'npm install'
                }
            }
        }

        // test using jest framework
        stage('Jest Testing') {
            steps {
                echo 'executing jest tests'
                script {
                    sh 'npm test'
                }
            }
        }

        // generate build
        stage('Build') {
            steps {
                echo 'creating build'
                script {
                    sh 'npm run build'
                }
            }
        }

        // sync build files to aws s3 bucket
        stage('Depoly to AWS S3') {
            steps {
                script {
                    sh "aws s3 sync ./build ${env.DEV_S3_URL} --profile ${env.DEV_AWS_PROFILE}"
                }
            }
        }
    }
}
