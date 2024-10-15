export const searchData = (input, data) => {
    const result = data.filter((element) => element.frutasyverduras.toLowerCase().includes(input.toLowerCase()))
    return result;
  }