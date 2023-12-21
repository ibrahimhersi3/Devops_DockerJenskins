pipeline {
    agent any

    tools {
        nodejs 'node' // Specify the Node.js tool installation name
        git 'Default'    // Specify the Git tool installation name (if needed)
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Use Node.js tool to install dependencies
                    sh 'npm install'
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    // Use Node.js tool to run the build
                    sh 'npm run build'
                }
            }
        }

        stage('Deploy to GitHub Pages') {
            steps {
                script {
                    def ghPagesBranch = 'main' // Adjust the branch name here

                    // Create and switch to a temporary branch
                    sh "git checkout -b $ghPagesBranch"

                    // Copy the built files to the root directory (or adjust based on your build configuration)
                    sh 'cp -r build/* .'

                    // Commit and push to GitHub Pages branch
                    sh "git add ."
                    sh "git commit -m 'Deploy to GitHub Pages'"
                    sh "git push origin $ghPagesBranch"

                    // Switch back to the main branch
                    sh 'git checkout main'
                }
            }
        }
    }

    post {
        success {
            echo 'Build successful! Deployed to GitHub Pages.'
        }
        failure {
            echo 'Build failed! Please check the build logs.'
        }
    }
}
