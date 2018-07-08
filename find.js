const users = [
    {username: 'vande', password: '123'},
    {username: 'khanhney', password: '123'}
]
//find by javascript
var user;
for(var i = 0; i < users.length; i++)
{
    if(users[i].password === '123')
    {
        user = users[i];
        break;
    }
}
console.log(' User',user)
//find by es6
const user1 =users.find(Element => Element.password === '123')
console.log('userES6', user1)