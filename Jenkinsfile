pipeline {
    agent any

    tools {
        nodejs 'node'
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
                    def githubUsername = 'ibrahimhersi3'
                    def githubToken = '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'

                    // Set the remote URL explicitly with the personal access token
                    sh "git remote set-url origin https://${githubUsername}:${githubToken}@github.com/ibrahimhersi3/Devops_DockerJenskins.git"

                    // Check if the 'main' branch already exists
                    def branchExists = sh(script: 'git show-ref --quiet refs/heads/main', returnStatus: true) == 0

                    // If the 'main' branch does not exist, create it
                    if (!branchExists) {
                        sh "git checkout -b $ghPagesBranch"
                    } else {
                        sh "git checkout $ghPagesBranch"
                    }

                    // Stash the local changes
                    sh 'git stash'

                    // Copy the built files to the appropriate location
                    sh 'cp -r ci-cd-website/build/* .'

                    // Commit and push to GitHub Pages branch
                    sh 'git add .'
                    sh "git commit -m 'Deploy to GitHub Pages - Build #$BUILD_NUMBER'"
                    sh "git push origin $ghPagesBranch"

                    // Switch back to the main branch and apply stashed changes
                    sh 'git checkout main'
                    sh 'git stash pop --index'
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
