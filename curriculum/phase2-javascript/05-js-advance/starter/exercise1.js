const user = { //name and active state 
    name: "Endy",
    isActive: true
};


// Before:
function getCard(user) {
    if(user.isActive){
        return `User ${user} is Active`
    } else
        return `User ${user} is offline`

}

// After (they need to write this):
const getCard = (user) => `User ${user.name} is ${user.isActive ? "Active" : "Offline"}`;