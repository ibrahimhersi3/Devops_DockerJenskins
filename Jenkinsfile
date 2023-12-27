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

        stage('Install Netlify CLI') {
            steps {
                script {
                    // Ensure that the correct version of NodeJS is in the PATH
                    def nodejsHome = tool 'node'
                    env.PATH = "${nodejsHome}/bin:${env.PATH}"

                    // Install Netlify CLI
                    sh 'npm install -g netlify-cli'
                }
            }
        }

        stage('Deploy to Netlify') {
            steps {
                script {
                    // Deploy to Netlify using the Netlify CLI
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
