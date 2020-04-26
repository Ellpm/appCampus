export const getData = async () => {
  let response = await fetch("http://localhost:5000/base/getData", {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });
  let result = await response.json();
  return result;
};
