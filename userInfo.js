function createUserProfiles(strings, modifiedName) {
    let newUserProfile=[];
    for (let i = 0; i < strings.length; i++){
        newUserProfile.push({
            id:i+1,
            originalName:strings,
            modifiedName:modifiedName[i],
        });
        return newUserProfile;
    }
}

let oldName = ["Kojo","Ben","John"];
let newName = ["KOJO","GEN","JOHN"];
let egProfile = createUserProfiles(oldName, newName);
console.log(egProfile);