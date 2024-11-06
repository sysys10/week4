
export const convertToM = (string) => {
    const cn1 = string.toString()
  .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    return cn1;
}
