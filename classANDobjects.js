class user{
    constructor(firstName,lastName,email,password)
    {
       
        this.firstName=firstName
        this.lastName=lastName
        this.email=email
        this.password=password
    }
    fullname()
    {
        return this.firstName+" "+ this.lastName
    }
    emailpassword()
    {
        return this.email+" "+ this.password
    }
}
let user1=new user('leo','das','leo@gmail.com','leo123')
let user2=new user('lesa','das','lesa@gmail.com','lesa123')
// console.table(user1)
// console.table(user2)
console.log(user1.fullname());
console.log(user2.emailpassword());

