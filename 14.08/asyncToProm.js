//1. TRANSFORM THIS:
async function fetchUser(id) {
    try {
      const response = await fetch(`/api/users/${id}`);
      const user = await response.json();
      return user;
    } catch (error) {
      console.error('Error fetching user:', error);
      throw error;
    }
 }
  
 // YOUR SOLUTION:
 function myFetchUser(id) {
   return fetch(`/api/users/${id}`)
        .then(response => response.json())
        .then(user => user)
        .catch(error => {
            console.log("error");
            throw error;
       })
 }
 
 
 
 
//2. TRANSFORM THIS:
async function fetchMultipleUsers(userIds) {
  const users = [];
  
  for (const id of userIds) {
    try {
      const user = await fetchUser(id);
      users.push(user);
    } catch (error) {
      console.warn(`Failed to fetch user ${id}:`, error.message);
      users.push(null);
    }
  }
  
  return users;
}

// YOUR SOLUTION:
function fetchMultipleUsers(userIds) {
    const users = [];

    const promises = userIds.map(id => {
        fetchUser(id).then(user => users.push(user))
        .catch(error => {
            console.warn("error");
            users.push(null); 
        })
    })
    return new Promise.all(promises).then(()=> users);
}
