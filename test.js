let user = [
    {name:'hai',age:17},
    {name:'hung',age:18},
    {name:'hun',age:24},
    {name:'hu',age:20}
  ]
  console.log(user[0].age)
  console.log(user[1].age)
  console.log(user[2].age)
  console.log(user[3].age)
  
  let temp = 0
  for (let index = 0; index < user.length; index++) {
    for (let jdex = index; jdex < user.length; jdex++) {
     if (user[index].age > user[jdex].age) {
       temp = user[index]
       user[index] = user[jdex]
       user[jdex] = temp
  
     }
    }
  }

  console.log(user[0].name[0]);