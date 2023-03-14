

const getUsersData = async () => {
    const users = await fetch('https://raw.githubusercontent.com/alj-devops/santa-data/master/users.json');
    const usersData = await users.json();
    return usersData;
  };
  
  const getUserProfilesData = async () => {
    const profiles = await fetch('https://raw.githubusercontent.com/alj-devops/santa-data/master/userProfiles.json');
    const profilesData = await profiles.json();
    return profilesData;
  };

  