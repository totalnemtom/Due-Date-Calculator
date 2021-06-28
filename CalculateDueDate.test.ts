const calculateDueDate = require("./CalculateDueDate");

describe("test calculateDueDate function", () => {
  describe("date out of working hours", () => {
    it("should return 'Please submit your issue in working hours.'", () => {
      expect(calculateDueDate("2021-06-25 7:00", 12)).toBe(
        "Please submit your issue in working hours."
      );
    });
  });
  describe("date in working hours", () => {
    it("should return submitted date and due date", () => {
      expect(calculateDueDate("2021-06-25 9:00", 24)).toBe(
        "issue submitted: 2021-06-25 9:00 due date is: 2021. 06. 29. 17:00:00"
      );
    });
  });
});
