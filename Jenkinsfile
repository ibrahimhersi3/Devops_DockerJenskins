pipeline {
    agent any

    stages {
        stage('Install Netlify CLI') {
            steps {
                script {
                    // Install Netlify CLI globally
                    sh 'npm install -g netlify-cli'
                }
            }
        }

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
                    // Use the Netlify CLI to deploy
                    sh 'npx netlify deploy --site startling-hummingbird-ec3a44 --prod --dir ci-cd-website/build --auth nfp_NYRrYh6cu8J9eFeNfJ32dXvLtedBMLBJ08cb'
                }
            }
        }
    }

    post {
        success {
            echo 'Build and deployment successful!'
        }
        failure {
            echo 'Build and deployment failed. Please check the logs for details.'
        }
    }
}
