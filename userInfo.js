function createUserProfiles(strings, newFormatArray) {
    let newUserProfile=[];
    for (let i = 0; i < strings.length; i++){
        newUserProfile.push({
            id:i+1,
            originalName:strings,
            newFormatArray:newFormatArray[i],
        });
        return newUserProfile;
    }
}
