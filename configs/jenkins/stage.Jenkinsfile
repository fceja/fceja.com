pipeline {
    // define jenkins node/agent to be executed by
    agent { node { label env.NODE_AGENT_1 } }

    // stages to execute
    stages {
        // building stage
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

        // aws stage
        stage('AWS S3') {
            // init docker aws-cli
            agent {
                dockerfile {
                    filename 'stage.Dockerfile'
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
