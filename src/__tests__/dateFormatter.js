const date = require("../utils/dateFormatter");

test("should render the date in the right format", () => {
  expect(date.dateFormatter(new Date("1984-08-14"))).toBe("1984-08-14");
});
