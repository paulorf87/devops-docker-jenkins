pipeline {
  agent { dockerfile true }
  
  stages {
      
    stage('Docker Running') {
        steps {
            echo 'Docker image pulled...'
        }
    }
    
    stage('Version Checking') {
        steps {
            sh "node --version"
        }    
    }
    
    
    stage("Testing...") {
        steps {
            sh "node test/test.js"
        }
    }
  }
}