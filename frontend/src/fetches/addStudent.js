export const addStudentFetch = async name => {
  let response = await fetch('http://localhost:5000/base/addStudent', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({
      name
    })
  });
  let result = await response.json();
  return result;
};