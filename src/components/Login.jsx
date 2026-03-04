export default function Login({ setScreen,email, note, setNote,setEmail, password, setPassword, hide, setHide }) {
const domains = [
    "gmail.com", "outlook.com", "yahoo.com", "icloud.com"
]
    function showNote(text){
        setNote(text)
        setTimeout(()=>{
            setNote('')
        }, 2000)
    }
  function handleLogin() {
    const isAuthenticated = false;
    if(email === ''){
        showNote('Enter your email')
    } else if(!domains.some(domain => email.toLowerCase().endsWith(`@${domain}`))){
        showNote('Enter an acceptable email domain')
    }
    else if(password === ''){
showNote('Enter your password')
    } else if(password.length < 10){
        showNote('Password must include at least 10 characters')
    }
     else if (isAuthenticated) {
      setScreen("home");
    } else {
      setNote("Bestie… log in properly.");
    }
  }

  return (
    <div className="login-page">
        <form className="Login-Form" onSubmit={(e)=>{e.preventDefault()}}>
      <h2>Login to continue</h2>
      <span>{note}</span>
      <input type="email"
      value={email}
      placeholder="Enter your email"
      onChange={(e)=>{setEmail(e.target.value)}}
      />

      <input type={hide ? "text" : "password"} 
      value={password}
      placeholder="Enter your password"
      onChange={(e)=>{setPassword(e.target.value)}}
      />

      <div className="show">
        <input type="checkbox" 
        onClick={()=>setHide(!hide)}
        />
        <span>{hide ? 'Hide Password' : 'Show Password'}</span>
      </div>
      <button onClick={handleLogin}>Login</button>
      <hr />
      <div>
        don't have an account?  <i>create account</i>
      </div>
        </form>
    </div>

  );
}