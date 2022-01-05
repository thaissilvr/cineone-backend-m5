const req = require('supertest')
const app = require('../app')

describe('GET test.', () => {
    test('GET test returns 200 for ROOM API', ()=>{
        return req(app).get('/room')
        .then((res) =>{
            expect(res.statusCode).toBe(200)
        })
    })
});

describe('GET test.', () => {
    test('GET test returns 200 for MOVIE API', ()=>{
        return req(app).get('/movie')
        .then((res) =>{
            expect(res.statusCode).toBe(200)
        })
    })
});

