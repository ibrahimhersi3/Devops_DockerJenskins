pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout your source code from GitHub
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install Node.js dependencies
                script {
                    sh 'npm install'
                }
            }
        }

        stage('Build') {
            steps {
                // Build your React app
                script {
                    sh 'npm run build'
                }
            }
        }

        stage('Deploy to GitHub Pages') {
            steps {
                // Deploy to GitHub Pages
                script {
                    def ghPagesBranch = 'main'

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
