class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username,email,passsword){
        super(username) 
        this.email = email
        this.passsword = passsword
    }

    addCourse(){
        console.log(`A new course was added ${this.username}`)
    }
}

const chai = new Teacher("chai","chai@teacher.com","123")

chai.addCourse()

const masalaChai = new User("masalaChai")

// masalaChai.addCourse()
masalaChai.logMe()
// console.log(chai === masalaChai)
console.log(chai instanceof User)