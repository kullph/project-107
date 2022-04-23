<script>
  import {acc , islogin , page} from "./Logindata.js"
  let usernamer=''
    ,passwordr=''
    ,passwordconfirmr=''
    ,IDr=''
    ,fnamer=''
    ,lnamer=''
    ,yearr=''
    ,progr=''
    ,facr=''
    ,GPAXr=''
    ,Bdayr=''
    ,phoner=''

  function reg() {

    if(usernamer == '' || passwordr == '' || passwordconfirmr == ''){
      alert('require input cannot be empty.')
    }
      
    else{

      if(usernamer in $acc){
        alert('This username has been used')
        usernamer=''
      }
      else{
        if(passwordr == passwordconfirmr){
          
          $acc[usernamer] = {password:passwordr ,type:'stu', id:IDr, fname:fnamer, lname:lnamer, year:yearr, program:progr , fac:facr, GPAX:GPAXr, Bday:Bdayr, phone:phoner, selected:[], registered:[]}

          usernamer=''
          ,passwordr=''
          ,passwordconfirmr=''
          ,IDr=''
          ,fnamer=''
          ,lnamer=''
          ,yearr=''
          ,progr=''
          ,facr=''
          ,GPAXr=''
          ,Bdayr=''
          ,phoner=''
  
          alert('Account created')
      }
        
        else{
          alert('review your password.')
        }
      }
      
      
    }
  }

</script>

<img src='/src/assets/Login.png'>

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
      <td><input bind:value={usernamer} placeholder="(require)"></td>
    </tr>

    <tr >
      <td><label>Password</label></td>
      <td><input class = "password" type = "password" bind:value={passwordr} placeholder="(require)"></td>
      <td><label>Confirm Password</label></td>
      <td><input class = "passwordconfirm" type = "password" bind:value={passwordconfirmr} placeholder="(require)"></td>
    </tr>

    <tr>
      <td class='infohead'><label> </label></td>
    </tr>
    
    <tr>
      <td class='infohead'><label>General Infomation</label></td>
    </tr>
    
    <tr>
      <td><label>Student ID</label></td>
      <td><input bind:value={IDr} placeholder="Student ID"></td>    
    </tr>

    <tr>
      <td><label>Firstname</label></td>
      <td><input bind:value={fnamer} placeholder="firstname"></td>
      <td><label>Lastname</label></td>
      <td><input bind:value={lnamer} placeholder="lastname"></td>
    </tr>
    
    <tr>
      <td><label>Year</label></td>
      <td><input bind:value={yearr} placeholder="year"></td>
      <td><label>Program</label></td>
      <td><input bind:value={progr} placeholder="program"></td>
    </tr>

    <tr>
      <td><label>Faculty</label></td>
      <td><input bind:value={facr} placeholder="faculty"></td>
      <td><label>GPAX</label></td>
      <td><input bind:value={GPAXr} placeholder="GPAX"></td>
    </tr>
    
    <tr>
      <td><label>Birthday</label></td>
      <td><input bind:value={Bdayr} placeholder="dd/mm/yyyy"></td>
      <td><label>Phone number</label></td>
      <td><input bind:value={phoner} placeholder="0x-xxxx-xxxx"></td>
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
  img{
    position:absolute;
    width:100%;
    height:99.8%;
    top:0;
    left:0;
    padding:0;
    margin:0;
    opacity:0.85;
  }
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
    padding: 3%;
    width: 50%;
    height: 15%;
    margin-left: 22.5%;
    margin-top: 6.5%;
    background: #B5BEDC;
    border-radius: 36px;
    text-align: center;
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
