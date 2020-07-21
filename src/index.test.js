const { gradeClassifier } = require('./index');

// TODO: Write unit tests here
describe('Scenario', () => {
  it('When grade is less than 75, then mark is "D - Did Not Meet Expectation"', () => {
    // Arrange
      const grade1 = 73.18732;
      const grade2 = 0;
      const grade3 = 74.99999999999999;
      const mark = "D - Did Not Meet Expectation"
    // Act
      value1 = gradeClassifier(grade1);
      value2 = gradeClassifier(grade2);
      value3 = gradeClassifier(grade3);
    // Assert
      expect(value1).toBe(mark);
      expect(value2).toBe(mark);
      expect(value3).toBe(mark);
  });
  it('When grade is more than or equal to 75 and less than 80, then mark is "N - Needs Improvement"', () => {
    // Arrange
      const grade1 = 77.02938918321098;
      const grade2 = 75;
      const grade3 = 79.99999999999999;
      const mark = "N - Needs Improvement"
    // Act
      value1 = gradeClassifier(grade1);
      value2 = gradeClassifier(grade2);
      value3 = gradeClassifier(grade3);
    // Assert
      expect(value1).toBe(mark);
      expect(value2).toBe(mark);
      expect(value3).toBe(mark);
  });
  it('When grade is more than or equal to 80 and less than 85, then mark is "S -Satisfactory"', () => {
    // Arrange
      const grade1 = 81.92918198749;
      const grade2 = 80;
      const grade3 = 84.99999999999999;
      const mark = "S -Satisfactory"
    // Act
      value1 = gradeClassifier(grade1);
      value2 = gradeClassifier(grade2);
      value3 = gradeClassifier(grade3);
    // Assert
      expect(value1).toBe(mark);
      expect(value2).toBe(mark);
      expect(value3).toBe(mark);
  });
  it('When grade is more than or equal to 85 and less than 90, then mark is "G - Good"', () => {
    // Arrange
      const grade1 = 86.90823971083778;
      const grade2 = 85;
      const grade3 = 89.99999999999999;
      const mark = "G - Good"
    // Act
      value1 = gradeClassifier(grade1);
      value2 = gradeClassifier(grade2);
      value3 = gradeClassifier(grade3);
    // Assert
      expect(value1).toBe(mark);
      expect(value2).toBe(mark);
      expect(value3).toBe(mark);
  });
  it('When grade is more than or equal to 90 and less than 95, then mark is "V - Very Good"', () => {
    // Arrange
      const grade1 = 91.91827397129019;
      const grade2 = 90;
      const grade3 = 94.99999999999999;
      const mark = "V - Very Good"
    // Act
      value1 = gradeClassifier(grade1);
      value2 = gradeClassifier(grade2);
      value3 = gradeClassifier(grade3);
    // Assert
      expect(value1).toBe(mark);
      expect(value2).toBe(mark);
      expect(value3).toBe(mark);
  });
  it('When grade is more than or equal to 95 and less than 100, then mark is "O - Outstanding"', () => {
    // Arrange
      const grade1 = 96;
      const grade2 = 95;
      const grade3 = 100;
      const grade4 = 99.99999999999999;
      const mark = "O - Outstanding"
    // Act
      value1 = gradeClassifier(grade1);
      value2 = gradeClassifier(grade2);
      value3 = gradeClassifier(grade3);
      value4 = gradeClassifier(grade4);
    // Assert
      expect(value1).toBe(mark);
      expect(value2).toBe(mark);
      expect(value3).toBe(mark);
      expect(value4).toBe(mark);
  });
  it('When grade is less than 0, then an error is reported', () => {
    // Arrange
      const grade = -1;
    // Assert
      expect(() =>{
        gradeClassifier(grade)
      }).toThrow();
  });
  it('When grade is more than or equal to 100, then an error is reported', () => {
    // Arrange
      const grade = 100.00000000000001;
    // Assert
      expect(() =>{
        gradeClassifier(grade)
      }).toThrow();
  });
});
