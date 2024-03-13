export const appendStyle = (sheetName) => {
  const link = `<link rel="stylesheet" href="./styles/${sheetName}">`;
  document.head.insertAdjacentHTML("beforeend", link);
};
