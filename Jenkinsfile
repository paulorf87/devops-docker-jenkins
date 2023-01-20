pipeline {
  agent { dockerfile true }
  
  stages {
      
    stage('Docker Running') {
        steps {
            echo 'Docker image pulled...'
        }
    }
    
    stage("Testing...") {
        steps {
            echo "testing  process initiating..."
            sh "npm test"
        }
    }
  }
}