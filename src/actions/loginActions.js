function Login(user) {
  return { type: 'CREATE_SESSION', user };
}

export default Login;
