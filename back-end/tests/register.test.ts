import * as sinon from 'sinon';
import UserModel from '../Model/Users';
import UserService from '../Services/Users';
import app from '../index';
import chai from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);

const { expect } = chai;

describe('Test if route /register work as aspected', () => {
  let chaiHttpResponse: Response;
  const registerResponse = {
    name: 'validName',
    email:"validEmail@Email.com",
    admin: false,
  };
  before(async () => {
    sinon.stub(UserModel, 'register').resolves(registerResponse as any);
    sinon.stub(UserService, 'verifyEmail').resolves(true);
  })

  after(() => {
    (UserModel.register as sinon.SinonStub).restore();
    (UserService.verifyEmail as sinon.SinonStub).restore();
  });

  it('response correct if email, name and password are valid', async () => {
    const validUser = {
      name: 'validName',
      email: 'validEmail@Email.com',
      password: 'validPassword',
      admin: false,
    };
    const chaiHttpResponse = await chai.request(app).post('/register').send(validUser);
    expect(chaiHttpResponse.body.name).to.be.equals(registerResponse.name);
    expect(chaiHttpResponse.body.email).to.be.equals(registerResponse.email);
    expect(chaiHttpResponse.body.admin).to.be.equals(registerResponse.admin);
  });

  
  it('Throw correct erro if e-mail is invalid', async () => {
    const validUser = {
      name: 'validName',
      email: 'invalidEmail.com',
      password: 'validPassword',
      admin: false,
    };
    const chaiHttpResponse = await chai.request(app).post('/register').send(validUser);
    expect(chaiHttpResponse.body.Error).to.be.equals('Invalid Email');
  });

  it('Throw correct erro if name is invalid', async () => {
    const validUser = {
      name: 123,
      email: 'validEmail@Email.com',
      password: 'validPassword',
      admin: false,
    };
    const chaiHttpResponse = await chai.request(app).post('/register').send(validUser);
    expect(chaiHttpResponse.body.Error).to.be.equals('Name must be a string');
  });

  it('Throw correct erro if password is invalid', async () => {
    const validUser = {
      name: 'validName',
      email: 'validEmail@Email.com',
      password: 'invalid',
      admin: false,
    };
    const chaiHttpResponse = await chai.request(app).post('/register').send(validUser);
    expect(chaiHttpResponse.body.Error).to.be.equals('Password must have at least 8 characters');
});
});