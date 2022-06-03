function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function() {
        return`${this.firstName} ${this.lastName}`
    }

}

let auther = new User('Hieu', 'Bui', 'avatar');
let user = new User('Thuy', 'Nguyen', 'avatar');


auther.title = 'Xin chao cac ban'
user.comments = 'Em chao anh Hieu'


console.log(auther);
console.log(user);