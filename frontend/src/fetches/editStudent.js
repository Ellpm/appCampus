export const editStudentFetch = async (student) => {
  let response = await fetch("http://localhost:5000/student/updateStudent", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      student,
    }),
  });
  let result = await response.json();
  return result;
};
