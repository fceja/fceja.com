pipeline {
    agent { node { label 'github_aws_agent' } }

    stages {
        stage("test jenkins file load") {
            steps {
                echo 'dev.Jenkinsfile loaded'
                echo 'env branch name ${env.BRANCH_NAME}'
            }
    }
}

        // stage("Checkout") {
        //     // checkout shallow version of git repo
        //     steps {
        //         checkout ([$class: 'GitSCM',
        //             branches: [[name: env.GIT_BRANCH]],
        //             doGenerateSubmoduleConfigurations: false,
        //             extensions: [[$class: 'CloneOption', shallow: true]],
        //             userRemoteConfigs: [[url: env.GIT_REPO,
        //             credentialsId: env.AGENT_CREDS_ID]]
        //         ])
        //     }
        // }

        // stage('Build') {
        //     steps {
        //         // install dependencies
        //         echo 'installing dependencies'
        //         script {
        //             sh 'npm install'
        //         }

        //         // create build
        //         echo 'creating build'
        //         script {
        //             sh 'npm run build'
        //         }
        //     }
        // }

        // stage('AWS S3') {
        //     // init docker aws-cli
        //     agent {
        //         dockerfile {
        //             filename 'dev.Dockerfile'
        //             dir env.DOCKERFILE_DIR
        //         }
        //     }

        //     steps {
        //         // temp - execute aws cli commands
        //         echo 'attempting aws version'
        //         sh 'aws --version'
        //     }
        // }