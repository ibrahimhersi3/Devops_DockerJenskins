pipeline {
    agent any

    tools {
        nodejs 'node'
    }

    environment {
        NETLIFY_AUTH_TOKEN = 'nfp_NYRrYh6cu8J9eFeNfJ32dXvLtedBMLBJ08cb'
        NETLIFY_SITE_ID = 'startling-hummingbird-ec3a44'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                dir('ci-cd-website') {
                    sh 'npm install'
                }
            }
        }

        stage('Build') {
            steps {
                dir('ci-cd-website') {
                    sh 'npm run build'
                }
            }
        }

        stage('Deploy to Netlify') {
            steps {
                script {
                    // Deploy to Netlify using Netlify CLI
                    sh "npx netlify deploy --site ${NETLIFY_SITE_ID} --prod --dir build --auth ${NETLIFY_AUTH_TOKEN}"
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
