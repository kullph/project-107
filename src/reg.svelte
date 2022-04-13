<script>
  import {acc , islogin , page} from "./Logindata.js"
  let username='',password='',passwordconfirm='',ID='',fname='',lname='',year='',prog='',fac='',GPAX='',Bday='',phone=''

  function reg() {
    alert($page);
  }
</script>

<div class="bar">
</div>

<div class="Login">
  <h1>Create an account</h1>
  <label>Username</label>
  <input bind:value={username} placeholder="Username">
  <label>password</label>
  <input class = "password" type = "password" bind:value={password} placeholder="Password">
  <label>confirm password</label>
  <input class = "passwordconfirm" type = "password" bind:value={passwordconfirm} placeholder="Confirm your password">
  <label>Student ID</label>
  <input bind:value={ID} placeholder="Student ID">
  <label>Fristname</label>
  <input bind:value={fname} placeholder="firstname">
  <label>Lastname</label>
  <input bind:value={lname} placeholder="lastname">
  <label>Year</label>
  <input bind:value={year} placeholder="year">
  <label>Program</label>
  <input bind:value={prog} placeholder="program">
  <label>Faculty</label>
  <input bind:value={fac} placeholder="faculty">
  <label>GPAX</label>
  <input bind:value={GPAX} placeholder="GPAX">
  <label>Birthday</label>
  <input bind:value={Bday}>
  <label>Phone number</label>
  <input bind:value={phone} placeholder="phonenumber">
  <button class="submit" on:click={reg}>Submit</button>
  <button class="submit" on:click={()=>$page = 'login'}>Back</button> 
</div>

<style>
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
    position: relative;
    padding: 1%;
    width: 50%;
    height: 15%;
    margin-left: 25%;
    margin-top: 7.5%;
    background: #B5BEDC;
    border-radius: 36px;
    text-align: center;
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
    width: 22.5%;
    border: none;
    border-radius: 12px;
    padding: 2%;
    margin-top: 3%;
  }
  .submit{
    position: relative;
    font-family: "Lucida Console", "Courier New", monospace;
    padding: 2.25%;
    background-color: #3c4d8b;
    color: white;
    text-align: center;
    width: 20%;
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
