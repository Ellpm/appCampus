export const getFaculties = async () => {
  let response = await fetch("/base/getFaculties", {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });
  let result = await response.json();
  return result;
};
