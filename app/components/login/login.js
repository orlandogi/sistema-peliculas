import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class LoginLoginComponent extends Component {
  @action sesion() {
    delete localStorage.user;
    delete localStorage.pass;
    localStorage.setItem('user', document.getElementById('username').value);
    localStorage.setItem('pass', document.getElementById('password').value);
  }
}
