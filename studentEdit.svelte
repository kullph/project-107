<script>
  import { acc, ac , islogin , page} from "./Logindata.js"
  const details = $acc[$ac];
</script>


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

<div class='main2'>
  <div class='side'>
    <button class="sidebut" on:click={()=>$page = 'stu'}>Registration</button>
    <button class="sidebut" on:click={()=>$page = 'sturegresult'}>Registration result</button>
  </div>
  
  <div class="bar">
    <button class="topnav" on:click={()=>$page = 'stuprofile'}><u>{$ac}</u></button>
    <button class="topnav" on:click={()=>$islogin = false}><u>Logout</u></button>
  </div>
</div>

<style>
  .main2{
    content: "";
    display: table;
    clear: both;
  }
  .main{
    position: absolute;
    background: white;
    width: 78%;
    height: 83%;
    font-family: "Lucida Console", "Courier New", 'monospace';
    color:black;
    padding: 3%;
    left:16%;
    top:5%;
    display: flex;
    text-align: center;
  }
  .head{
    font-size: 32px;
    font-style: bolder;
    color: #2C4188;
  }
  .bar{
    position: absolute;
    width: 100%;
    height: 5%;
    left: 0px;
    top: 0px;
    background: #3c4d8b;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    text-align: right;
  }
  .topnav{
    font-family: "Lucida Console", "Courier New", monospace;
    color: white;
    margin-right: 2%;
    margin-top: 0.75%;
    cursor: pointer;
    background: rgba(1,1,1,0);
    border: none;
    font-size: 16px;
  }
  .topnav:hover{
    color: #0A1230;
  }
  .side{
    padding:3%;
    position: absolute;
    left:0;
    top:5%;
    width:10%;
    height: 83%;
    background: #B5BEDC;
    text-align: center;
    float:left;
  }
  .sidebut{
    position: relative;
    margin-top:10%;
    display: flex;
    text-align: center;
    font-family: "Lucida Console", "Courier New", monospace;
    font-style: bolder;
    background-color: #6676AF;
    color: white;
    width:100%;
    border-radius: 12px;
    cursor: pointer;
    font-size: 20px;
    transition-duration: 0.4s;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    border: none;
    padding: 10%;
    bottom: 5%;
  }
  .sidebut:hover{
    background-color: #0A1230;
  }

.container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f0f3f6;
  }
  
  .img > img {
    width: 200px;
    margin: 0 50px 0px 0;
  }

  .txt {
    text-align: center;
  }

  .txt > p {
    color: #6676af;
  }

  .personal-title {
    font-weight: 700;
    margin-top: 40px;
  }

  .btn {
    margin-top: 20px;
    padding: 5px 20px;
    color: white;
    border: none;
    outline: none;
    border-radius: 5px;
    background: #6676af;
    cursor: pointer;
  }
</style>