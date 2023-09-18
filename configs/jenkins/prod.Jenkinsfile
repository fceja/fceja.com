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
    }
}
