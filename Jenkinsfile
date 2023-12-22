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
                    // Set the branch used for GitHub Pages deployment
                    def ghPagesBranch = 'main'

                    // Clean the branch (remove existing files)
                    sh 'git rm -rf .'
                    sh 'git clean -xffd'

                    // Copy the built files to the root
                    sh 'cp -r ci-cd-website/build/* .'

                    // Commit and push to GitHub Pages branch
                    sh 'git add .'
                    sh "git commit -m 'Deploy to GitHub Pages - Build #$BUILD_NUMBER'"
                    sh "git push origin ${ghPagesBranch}"

                    echo "Deployed to GitHub Pages branch: ${ghPagesBranch}"
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
