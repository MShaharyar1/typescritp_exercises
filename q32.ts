function checkUsernames(currentUsers: string[], newUsers: string[]): void {
    for (const newUser of newUsers) {
      const isUsernameTaken = currentUsers.some(
        (currentUsername) => currentUsername.toLowerCase() === newUser.toLowerCase()
      );
  
      if (isUsernameTaken) {
        console.log(`Username '${newUser}' is not available. Please choose a different username.`);
      } else {
        console.log(`Username '${newUser}' is available.`);
      }
    }
  }
  
  const currentUsers: string[] = ['John', 'Alice', 'Bob', 'Mary', 'Eve'];
  const newUsers: string[] = ['Mike', 'John', 'Sarah', 'Alice', 'Mark'];
  
  checkUsernames(currentUsers, newUsers);
  