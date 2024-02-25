class instagram{
    constructor(userName,followers,following,posts,location,realtionshipStatus)
    {
        this.userName=userName
        this.followers=followers
        this.following=following
        this.posts=posts
        this.location=location
        this.realtionshipStatus=realtionshipStatus
    }
    fulldetails()
    {
        return "user name is "+this.userName+" has followers "+ this.followers+" and follwing are "+this.following+
        " whose posts are "+this.posts+" and his location is "+this.location+" realtionshipStatus is "+this.realtionshipStatus
    }
    useractivity()
    {
        if(this.posts<=100)
        {
           return "user is in active" 
        }
        else if(this.posts>500)
        {
            return "user is hyper active"
        }
        else{
            return "user is  active" 
        }
    }
    rs()
    {
        if(this.realtionshipStatus="single")
        {
            return this.fulldetails()
        }else{
            return "never mind"
        }
    }
}
let user1=new instagram('dilli',300,500,100,'tamilnadu','married')
let user2=new instagram('vikram',90,600,500,'chennai','single')
let user3=new instagram('rolex',500,1000,400,'banglore','single')
// console.log(mem1);
// console.log(mem1.fulldetails());
console.log(user1.rs());
