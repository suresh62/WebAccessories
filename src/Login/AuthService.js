
import LoginActions from './LoginActions';

class AuthService {

   login(username, password) {
  //   // We call the server to log the user in.
  //   return when(request({
  //     url: ‘http://localhost:3001/sessions/create',
  //     method: ‘POST’,
  //     crossOrigin: true,
  //     type: ‘json’,
  //     data: {
  //       username, password
  //     }
  //   }))
  //   .then(function(response) {
  //       // We get a JWT back.
        let jwt = 'adasd478450kfif';
        // We trigger the LoginAction with that JWT.
        LoginActions.loginUser(jwt);
        return true;
  //  });
  }
}

export default new AuthService()
