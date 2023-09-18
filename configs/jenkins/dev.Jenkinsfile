pipeline {
    // define jenkins node/agent to be executed by
    // agent { node { label env.NODE_AGENT_1 } }
    agent { node { label 'github_aws_agent' } }

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

        // Init AWS cli stage
        stage('Init AWS CLI') {
            steps {
                script {
                    // define the parameters to pass to pipeline
                    def params = [
                        [$class: 'StringParameterValue', name: 'DOCKERFILE_NAME', value: 'dev.Dockerfile'],
                        [$class: 'StringParameterValue', name: 'DOCKERFILE_DIR', value: "${env.DOCKERFILE_DIR}"],
                    ]

                    // trigger pipeline - create docker image by dockerfile
                    build job: env.CREATE_DOCKER_IMAGE, parameters: params

                    sh 'aws --version'
                }
            }
        }

        stage('AWS - User Role') {
            steps {
                echo 'TODO - AWS - User Role'
            }
        }

        stage('AWS - Push to S3') {
            steps {
                echo 'TODO - AWS - Push to S3'
            }
        }
    }
}
