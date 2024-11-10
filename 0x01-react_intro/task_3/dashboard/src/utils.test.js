import { getFullYear, getFooterCopy, getLatestNotification } from './utils'
test('check that the function returns the correct year', () => {
    const year = getFullYear();
    expect(year).toEqual(2024)
});

test('should return the correct string for true or false', () => {
    expect(getFooterCopy(true)).toBe("This is the true footer");
    expect(getFooterCopy(false)).toBe("This is the false footer");
});

test('Checking the returned string', () => {
    const string = getLatestNotification();
    expect(string).toEqual('<strong>Urgent requirement</strong> - complete by EOD');
  });