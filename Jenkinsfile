pipeline {
    agent any

    stages {
        stage("Checkout") {
            steps {
                echo 'checking out git branch'
                git branch: 'dev', credentialsId: 'jenkins_bot_fceja', url: 'git@github.com:fceja-org/fceja.com.git'
            }
        }

        stage('Build') {
            steps {
                echo 'installing dependencies'
                script {
                    sh 'npm install'
                }

                echo 'creating build'
                script {
                    sh 'npm run build'
                }
            }
        }
    }
}