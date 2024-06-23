const user = {
    username:'Reyansh',
    loginCount:8,
    signedIn : true,

    getUserDetail:function(){
        // console.log('got user detail from DB');
        // console.log(`username:${this.username}`);
        console.log(this)
    }
}



// console.log(user.username)
// console.log(user.getUserDetail())


function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;


    return this
}


const userOne = User('reyansh',12,true)
const userTwo = User('rey',13,true)
console.log(userOne);
