export const randIndex = (total: number, count: number) => {
  if (count > total) throw new Error("count не может быть больше total");

  const nums = Array.from({ length: total }, (_, i) => i + 1); // 1..total
  const result = [];

  for (let i = 0; i < count; i++) {
    const randPos = Math.floor(Math.random() * nums.length);
    result.push(nums[randPos]);
    nums.splice(randPos, 1); // удаляем выбранный элемент
  }

  return result;
}