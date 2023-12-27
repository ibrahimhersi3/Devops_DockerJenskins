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

        stage('Deploy to GitHub Pages') {
            steps {
                script {
                    def ghPagesBranch = 'main'

                    // Check for changes before committing
                    def changes = sh(script: 'git status --porcelain', returnStdout: true).trim()

                    if (changes) {
                        // Commit and push to GitHub Pages branch
                        sh 'git add .'
                        sh "git commit -m 'Deploy to GitHub Pages - Build #$BUILD_NUMBER'"
                        sh "git push origin ${ghPagesBranch}"

                        echo "Deployed to GitHub Pages branch: ${ghPagesBranch}"
                    } else {
                        echo 'No changes to commit. Skipping deployment.'
                    }
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
