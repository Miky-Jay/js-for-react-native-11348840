function createUserProfiles(names, modifiedNames) {
  const userProfiles = [];
  let id = 1; // Auto-incremented ID starting from 1
  for (let i = 0; i < names.length; i++) {
    userProfiles.push({
      originalName: names[i],
      modifiedName: modifiedNames[i],
      id: id++,
    });
  }
  return userProfiles;
}
