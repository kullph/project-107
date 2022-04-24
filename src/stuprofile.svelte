<script>
  import { acc , ac , islogin , page} from "./Logindata.js"
  import user from "./assets/user.png"
  const details = $acc[$ac];

  let passwordr=details.password
    ,passwordconfirmr=details.password
    ,IDr=details.id
    ,fnamer=details.fname
    ,lnamer=details.lname
    ,yearr=details.year
    ,progr=details.program
    ,facr=details.fac
    ,GPAXr=details.GPAX
    ,Bdayr=details.Bday
    ,phoner=details.phone

  function edit() {
    var x = document.getElementById("detail");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }

    var y = document.getElementById("inedit");
      if (y.style.display === "block") {
        y.style.display = "none";
      } else {
        y.style.display = "block";
      }
  }
  
function submit() {
    var x = document.getElementById('inedit');
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }

    if(passwordr == '' || passwordconfirmr == '' || IDr == '' || fnamer == '' || lnamer == ''){
      alert('require input cannot be empty.')
    }
    else{
      if(passwordr == passwordconfirmr){
        details.password = passwordr
        details.id = IDr
        details.fname = fnamer
        details.lname = lnamer
        details.year = yearr
        details.program = progr
        details.fac = facr
        details.GPAX = GPAXr
        details.Bday = Bdayr
        details.phone = phoner
      }
      else{
        alert('reviews your password.')
      }
    }
  
    var x = document.getElementById("detail");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
  
}

  
  
</script>

<div class='main'>
  
    <div class="img">
      <img src={user} />
    </div>
  
    <div class="txt" id='detail'>
      <label class='head'>Profile</label>
      <p><b>Student ID: </b><span>{details.id}</span></p>
      <p><b>Name: </b><span>{details.fname} {details.lname}</span></p>
      <p><b>Student year: </b><span>{details.year}</span></p>
      <p><b>Program: </b><span>{details.program}</span></p>
      <p><b>Faculty: </b><span>{details.fac}</span></p>
      <p><b>GPAX: </b><span>{details.GPAX}</span></p>
  
      <p class="personal-title">Personal</p>
      <p><b>Username: </b><span>{$ac}</span></p>
      <p><b>Password: </b><span>{details.password}</span></p>
      <p><b>Birthday: </b><span>{details.Bday}</span></p>
      <p><b>Phone number: </b><span>{details.phone}</span></p>
      <button class="btn" on:click={edit}>Edit</button>
    </div>

    <div class="txt-edit" id='inedit'>
      <label class='head'>Profile</label>
      <span>
        <p><b>Student ID: </b> <input bind:value={IDr} placeholder={details.id}></p>
        <p><b>First Name: </b> <input bind:value={fnamer} placeholder={details.fname}></p>
        <p><b>Last Name: </b><input bind:value={lnamer} placeholder={details.lname}></p>
        <p><b>Student year: </b><input bind:value={yearr} placeholder={details.year}></p>
        <p><b>Program: </b> <input bind:value={progr} placeholder={details.program}></p>
        <p><b>Faculty: </b> <input bind:value={facr} placeholder={details.fac}></p>
        <p><b>GPAX: </b> <input bind:value={GPAXr} placeholder={details.GPAX}></p>
  
        <p class="personal-title">Personal</p>
        <p><b>Password: </b><input type='password' bind:value={passwordr} placeholder={details.password}></p>
        <p><b>ConfirmPassword: </b><input type='password' bind:value={passwordconfirmr} placeholder={details.password}></p>
        <p><b>Birthday: </b><input bind:value={Bdayr} placeholder={details.Bday}></p>
        <p><b>Phone number: </b><input bind:value={phoner} placeholder={details.phone}></p>
        <button class="btn" on:click={submit}>Submit</button>
      </span>
    </div>
  
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
  input{
    border-radius: 12px;
    border: black 1px solid;
    height: 0.75%;
    padding: 0.30%;
  }
  b{
    color: #2C4188;
    font-size: 18px;
  }
  #inedit{
    display:none;
  }
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
    display: block;
  }
  .head , .personal-title{
    font-family: "Lucida Console", "Courier New", 'monospace';
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

/*  Main  */
/*   .container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f0f3f6;
  } */
  
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
  .txt-edit > p {
    color: #6676af;
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