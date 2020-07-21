const functions = {
  gradeClassifier: (grade) => {
    // TODO: Write code here
    if(grade < 0 || grade > 100){
      throw Error('Invalid Grade!');
    }
    else if(grade < 75.00){
      return "D - Did Not Meet Expectation"
    }
    else if(grade < 80.00){
      return "N - Needs Improvement"
    }
    else if(grade < 85.00){
      return "S -Satisfactory"
    }
    else if(grade < 90.00){
      return "G - Good"
    }
    else if(grade < 95.00){
      return "V - Very Good"
    }
    else{
      return "O - Outstanding"
    }
  }
}

module.exports = functions;
