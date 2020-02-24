pipeline {
    environment {
    def dockerHome = tool 'docker'
    dockerRegistry = "osaidiaws/docker-nodejs"
    dockerRegistryCredential = 'dockerhub'
    dockerImage = ''
    }
  agent any
  tools {nodejs "node"}
  stages {
    stage('Cloning Git') {
      steps {
        git 'https://github.com/oumaymaSaidi/node_docker_jenkins.git'
      }
    }
    stage('Build') {
       steps {
         sh 'npm install'
       }
    }
    stage('Test') {
      steps {
        sh 'npm test'
      }
    }
    stage('Building image') {
      steps{
        script {
           dockerImage = docker.build dockerRegistry + ":$BUILD_NUMBER"
        }
      }
    }
     stage('Upload Image') {
       steps{
         script {
           docker.withRegistry( '', dockerRegistryCredential ) {
             dockerImage.push()
           }
         }
       }
     }
     stage('Remove Unused docker image') {
       steps{
         sh "docker rmi $dockerRegistry:$BUILD_NUMBER"
       }
     }
   }
 }