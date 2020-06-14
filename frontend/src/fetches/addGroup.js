export const addGroupFetch = async (group) => {
         let response = await fetch("http://localhost:5000/group/addGroup", {
           method: "POST",
           headers: {
             "Content-Type": "application/json;charset=utf-8",
           },
           body: JSON.stringify({
             group
           }),
         });

         let result = await response.json();

         return result;
       };
