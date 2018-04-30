import * as Mock from 'mockjs'

const users = [
  {
    username: 'inbeen',
    password: '123456'
  },
  {
    username: 'admin',
    password: '123456'
  }
]

Mock.mock('/login', 'post', (options) => {
  let ok = false
  let user = JSON.parse(options.body)
  users.map(each => {
    if(each.username === user.username && each.password === user.password) {
      ok = true
      return
    }
  })
  if(ok) return {
    status: ok,
    data: {
      ...user,
      avatar: Mock.Random.image()
    }
  }
  else return {
    statue: ok,
    data: {}
  }
})

Mock.mock('/a', 'get', {
  'name': '@cname'
})
