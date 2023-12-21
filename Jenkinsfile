pipeline {
    agent any

    tools {
        nodejs 'node'
        git 'git'
    }

    stages {
        stage('Checkout') {
            steps {
                // Checking out the repository
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Move to the directory where package.json is located
                    dir('ci-cd-website') {
                        // Use Node.js tool to install dependencies
                        sh 'npm install'
                    }
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    // Move to the directory where npm run build is executed
                    dir('ci-cd-website') {
                        // Use Node.js tool to run the build
                        sh 'npm run build'
                    }
                }
            }
        }

        stage('Deploy to GitHub Pages') {
            steps {
                script {
                    def ghPagesBranch = 'main'

                    // Create and switch to a temporary branch
                    sh "git checkout -b $ghPagesBranch"

                    // Copy the built files to the root directory (or adjust based on your build configuration)
                    sh 'cp -r ci-cd-website/build/* .'

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
