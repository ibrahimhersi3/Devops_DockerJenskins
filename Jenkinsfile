pipeline {
    agent any

    tools {
        nodejs 'node'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies and Build') {
            steps {
                dir('ci-cd-website') {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage('Deploy to Netlify') {
            steps {
                script {
                    sh 'npx netlify deploy --site startling-hummingbird-ec3a44 --prod --dir ci-cd-website/build --auth nfp_NYRrYh6cu8J9eFeNfJ32dXvLtedBMLBJ08cb'
                }
            }
        }
    }

    post {
        success {
            echo 'Build successful! Deployed to Netlify Pages.'
        }
        failure {
            echo 'Build failed! Please check the build logs.'
        }
    }
}
