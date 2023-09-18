pipeline {
    // define jenkins node/agent to be executed by
    agent { node { label "${env.AGENT_LABEL}" } }

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
    }
}
