function average(salary: number[]): number {
  const minSal = Math.min(...salary);
  const maxSal = Math.max(...salary);
  const sum = salary.filter(sal => !(sal === minSal || sal === maxSal)).reduce((p, c) => p + c, 0);

  return sum / (salary.length - 2);
}
