export function solution(data: number[], selected: number[]) {
  if (data.length === selected.length) {
    return data;
  }

  const result = [...data];

  const sortedSelected = selected.sort((a, b) => a - b);

  sortedSelected.forEach((item) => {
    const index = result.indexOf(item);

    if (index > 0) {
      if (index - 1 === 0 && sortedSelected.includes(data[0])) {
        return;
      }

      [result[index - 1], result[index]] = [result[index], result[index - 1]];
    }
  });

  return result;
}
