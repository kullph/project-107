<script>
  import { acc , islogin , page , ac } from './Logindata.js'
  let username = ''
  let password = ''

  function checkLogin() {
    if (!(username in $acc) || $acc[username].password != password) {
      alert('Incorrect username or password');
      username = ''
      password = ''
    }
    else {
      if($acc[username].type == 'admin'){
        $islogin = true;
        $page = 'admin'
        $ac = username
      }
      else if($acc[username].type == 'stu'){
        $islogin = true;
        $page = 'stu'
        $ac = username
      }
    }
  }
  
</script>

<img src='/src/assets/Login.png'>
<div class="bar">
  
</div>
    
<div class="Login">
  <h1>Login</h1>
  <input bind:value={username} placeholder="Username">
  <input type="password" bind:value={password} placeholder="Password">
  <button class="submit" on:click={checkLogin} accesskey="[Enter]">Submit</button><br><br>
  <button class="reg" on:click={()=>$page = 'reg'}><u>Create an account</u></button>
</div>
  

<style>
  img{
    position:absolute;
    width:100%;
    height:99.8%;
    left:0;
    top:0;
    padding:0;
    margin:0;
    opacity:0.85;
  }
  .reg{
    border: none;
    color: white;
    background: rgba(0,0,0,0);
    cursor: pointer;
  }
  .reg:hover{
    color:#0A1230;
  }
  h1{
    color: #2C4188;
    font-style: bold;
    font-size: 28px;
    font-family: "Lucida Console", "Courier New", monospace;
    text-align: center;
    margin-top: 5%;
  }
  .Login{
    float: left;
    position: relative;
    padding: 1%;
    width: 25%;
    height: 25%;
    margin-left: 37.5%;
    margin-top: 15%;
    background: #B5BEDC;
    border-radius: 36px;
    text-align: center;
    backdrop-filter: blur(16px);
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
  }
  .bar{
    position: absolute;
    width: 100%;
    height: 5%;
    left: 0px;
    top: 0px;
    background: #3c4d8b;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  input{
    font-family: "Lucida Console", "Courier New", monospace;
    width: 75%;
    border: none;
    border-radius: 12px;
    padding: 2%;
    margin-top: 3%;
  }
  .submit{
    position: relative;
    font-family: "Lucida Console", "Courier New", monospace;
    padding: 4%;
    background-color: #3c4d8b;
    color: white;
    text-align: center;
    width: 25%;
    margin-top: 5%;
    border-radius: 36px;
    cursor: pointer;
    font-size: 16px;
    transition-duration: 0.4s;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: none;
  }
  .submit:hover{
    background-color: #0A1230;
  }
  
</style>
