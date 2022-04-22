<script>
  import {acc , islogin , page} from "./Logindata.js"
  let username=''
    ,password=''
    ,passwordconfirm=''
    ,ID=''
    ,fname=''
    ,lname=''
    ,year=''
    ,prog=''
    ,fac=''
    ,GPAX=''
    ,Bday=''
    ,phone=''

  function reg() {
    alert($page);

    if(password == passwordconfirm){
      
    }
    else{
      
    }
    
  }

</script>

<div class="bar">
</div>

<div class="Login">
  <h1>Create an account</h1>
  
  <table>

    <tr>
      <td class='infohead'><label>Account Info</label></td>
    </tr>
    
    <tr>
      <td><label>Username</label></td>
      <td><input bind:value={username} placeholder="(require)"></td>
    </tr>

    <tr>
      <td><label>Password</label></td>
      <td><input class = "password" type = "password" bind:value={password} placeholder="(require)"></td>
      <td><label>Confirm Password</label></td>
      <td><input class = "passwordconfirm" type = "password" bind:value={passwordconfirm} placeholder="(require)"></td>
    </tr>

    <tr>
      <td class='infohead'><label> </label></td>
    </tr>
    
    <tr>
      <td class='infohead'><label>General Infomation</label></td>
    </tr>
    
    <tr>
      <td><label>Student ID</label></td>
      <td><input bind:value={ID} placeholder="Student ID"></td>    
    </tr>

    <tr>
      <td><label>Firstname</label></td>
      <td><input bind:value={fname} placeholder="firstname"></td>
      <td><label>Lastname</label></td>
      <td><input bind:value={lname} placeholder="lastname"></td>
    </tr>

    
    
    <tr>
      <td><label>Year</label></td>
      <td><input bind:value={year} placeholder="year"></td>
      <td><label>Program</label></td>
      <td><input bind:value={prog} placeholder="program"></td>
    </tr>

    <tr>
      <td><label>Faculty</label></td>
      <td><input bind:value={fac} placeholder="faculty"></td>
      <td><label>GPAX</label></td>
      <td><input bind:value={GPAX} placeholder="GPAX"></td>
    </tr>
    
    <tr>
      <td><label>Birthday</label></td>
      <td><input bind:value={Bday}></td>
      <td><label>Phone number</label></td>
      <td><input bind:value={phone} placeholder="phonenumber"></td>
    </tr>

    <tr>
      <td class='infohead'><label> </label></td>
    </tr>

    <tr>
      <td></td>
      <td><button class="submit" on:click={reg}>Submit</button></td>
      <td><button class="submit" on:click={()=>$page = 'login'}>Back</button></td>
      <td></td>
    </tr>
      
  </table>
    
</div>

<style>
  tr{
    width: 100%;
  }
  td{
    width: 25%;
  }
  .infohead{
    text-align: left;
    padding: 0.5%;
    text-decoration: underline;
    font-size: 24px;
  }
  table ,tr ,td ,th{
    
  }
  table{
    border-collapse:separate; 
    border-spacing: 0 0.5em;
    width: 100%;
  }
  label{
    color: #2C4188;
    font-style: bolder;
    font-size: 20px;
    font-family: "Lucida Console", "Courier New", monospace;
    text-align: center;
    padding: 1%;
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
    margin-top: 2%;
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
    width: 85%;
    border: none;
    border-radius: 12px;
    padding: 5%;
  }
  .submit{
    position: relative;
    font-family: "Lucida Console", "Courier New", monospace;
    padding: 8%;
    background-color: #3c4d8b;
    color: white;
    text-align: center;
    width: 85%;
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
