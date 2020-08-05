import { generateDayOfWeek } from '../../utils/generateDayOfWeek';

describe('Generate day of week', () => {
  it('should return weekday (Segunda-Feira)', () => {
    const day = generateDayOfWeek('2020-08-10');
    expect(day).toBe('weekday');
  });
  it('should return weekday (Terça-Feira)', () => {
    const day = generateDayOfWeek('2020-08-11');
    expect(day).toBe('weekday');
  });
  it('should return weekday (Quarta-Feira)', () => {
    const day = generateDayOfWeek('2020-08-12');
    expect(day).toBe('weekday');
  });
  it('should return weekday (Quinta-Feira)', () => {
    const day = generateDayOfWeek('2020-08-13');
    expect(day).toBe('weekday');
  });
  it('should return weekday (Sexta-Feira)', () => {
    const day = generateDayOfWeek('2020-08-14');
    expect(day).toBe('weekday');
  });
  it('should return weekend (Sábado)', () => {
    const day = generateDayOfWeek('2020-08-15');
    expect(day).toBe('weekend');
  });
  it('should return weekend (Domingo)', () => {
    const day = generateDayOfWeek('2020-08-16');
    expect(day).toBe('weekend');
  });
});