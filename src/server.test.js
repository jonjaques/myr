import Server from './server'

var server;

beforeEach(()=> {
  server = new Server()
})

test('does this work', ()=> {
  expect(server.add(1,2)).toBe(3)
})


afterEach(()=> {
  server = null
})
