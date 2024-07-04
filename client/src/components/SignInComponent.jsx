export default function SignIn_SignUpComponent() {
  return (
    <div className=" h-12 bg-blue-400">
      <h1>Sign In</h1>
      <form>
        <div>
          <label>Email</label>
          <input type="email" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" />
        </div>
        <button>Sign In</button>
      </form>
    </div>
  );
}
