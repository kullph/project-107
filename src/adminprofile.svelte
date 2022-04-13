<script>
  import { acc, ac , islogin , page} from "./Logindata.js"
  import user from "./assets/user.png"

  const details = $acc[$ac];
</script>

<div class='main'>
    <div class="img">
      <img src={user} />
    </div>
    <div class="txt">
      <label class='head'>Profile</label>
      <p><b>ID: </b><span>{details.id}</span></p>
      <p><b>Name: </b><span>{details.fname} {details.lname}</span></p>
      
      <p class="personal-title">Personal</p>
      <p><b>Username: </b><span>{$ac}</span></p>
      <p><b>Password: </b><span>{details.password}</span></p>
      <p><b>Birthday: </b><span>{details.Bday}</span></p>
      <p><b>Phone number: </b><span>{details.phone}</span></p>
  
      <button class="btn">Edit</button>
    </div>
</div>

<div class='main2'>
  <div class='side'>
    <button class="sidebut" on:click={()=>$page = 'admin'}>Admin User</button>
  </div>
  
  <div class="bar">
    <button class="topnav" on:click={()=>$page = 'adminprofile'}><u>{$ac}</u></button>
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
    font-family: "Lucida Console", "Courier New", monospace;
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
  .img > img {
    width: 200px;
    margin: 0 50px 0px 0;
  }

  .txt {
/*     text-align: center; */
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