const User = require('../../src/app/models/User');
const bcrypt = require('bcryptjs');
const truncate = require('../utils/truncate');

const userDefault = {
    email: 'email@gmail.com', 
    senha: '123456789'
}

describe('User', () => {
    beforeEach(async () => { await truncate()});

    it('Deve encrypt a senha', async () => {
        const user = await User.create(userDefault);

        const hash = await bcrypt.compare(userDefault.senha,  user.senha_hash)

        expect(hash).toBe(true)

    })

})