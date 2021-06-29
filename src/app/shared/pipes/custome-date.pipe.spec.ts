import { CustomeDatePipe } from "./custome-date.pipe";

describe('CustomDatePipe', () => {

  const date: Date = new Date();
  const customeDate: CustomeDatePipe = new CustomeDatePipe();
  const expectDate = 'Tgl 29 Juni 2021';


  it('transform date with customDate', () => {
    expect(customeDate.transform(date)).toBe(expectDate);
  })
});
