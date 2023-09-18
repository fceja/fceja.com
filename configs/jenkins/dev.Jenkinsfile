pipeline {
    agent { node { label 'github_aws_agent' } }
    stages {
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

        stage('AWS S3') {
            // init docker aws-cli
            agent {
                dockerfile {
                    filename 'dev.Dockerfile'
                    dir env.DOCKERFILE_DIR
                }
            }

            steps {
                // temp - execute aws cli commands
                echo 'attempting aws version'
                sh 'aws --version'
            }
        }
    }
}
