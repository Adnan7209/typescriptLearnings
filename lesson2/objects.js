var User = {
    name: "adnan",
    email: "xyz@gmail.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isActive;
}
createUser({ name: "adnan2", isActive: true });
// createUser({name:"adnan2",isActive:true,email:"@gmail.com"});    //wrong
createUser(User);
function createCourse() {
    return { name: "reactjs", price: 399 };
}
function createUser2(user) {
    return { name: "", email: "", isActive: true };
}
;
createUser2({ name: "", email: "", isActive: true });
var myUser = {
    _id: "12345",
    name: "ad",
    email: "@gmail",
    isActive: false,
};
myUser.name = "adnan";
