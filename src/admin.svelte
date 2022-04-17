<script>
  import { acc , ac , islogin , page } from "./Logindata.js"
  import { subject  } from "./Subjectdata.js"

  
</script>


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
  img{
    width:32px;
  }
  button{
    cursor: pointer;
  }
  .srchbut{
    position: relative;
    font-family: "Lucida Console", "Courier New", monospace;
    padding: 0.75%;
    background-color: #3c4d8b;
    color: white;
    text-align: center;
    width: 6.5%;
    margin-top: 0.35%;
    margin-left: 0.5%;
    border-radius: 12px;
    cursor: pointer;
    font-size: 14px;
    transition-duration: 0.4s;
    border: none;
  }
  .srchbut:hover{
    background-color: #0A1230;
  }
  .srchinput{
    font-family: "Lucida Console", "Courier New", monospace;
    width: 15%;
    height: 10%;
    border: none;
    border-radius: 12px;
    padding: 0.75%;
    margin-top: 0.75%;
    margin-left: 1%;
  }
  table , td , tr , th{

  }
  .t-but{
    width:1%;
    text-align: center;
    cursor: pointer;
  }
  .t-id{
    width:4%;
    text-align: center;
  }
  .t-name{
    width:20%;
  }
  .t-attens{
    width:6%;
    text-align: right;
  }
  .t-quota{
    width:6%;
  }
  .t-sec{
    width:7%;
    text-align: center;
  }
  .t-time{
    width:12%;
    text-align: center;
  }
  table{
    width:100%;
  }
  .tr-hover{
    transition-duration: 0.1s;
    width:100%;
    cursor: pointer;
  }
  .tr-hover:hover{
    background:#6a78a8;
    color: white;
  }
  td{
    padding: 1px;
    margin-bottom: 1%;
  }
  th{
    text-align: center;
  }
  span{
    font-size: 24px;
    color: #2C4188;
  }
  br{
    margin-top: 4%;
  }
  .selected{
    background: #B5BEDC;
    bottom: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 33.5%;
    overflow: auto;
  }
  .searchbar{
    background: #6676AF;
    bottom: 33.5%;
    left: 0;
    position: absolute;
    width: 100%;
    height: 6.5%;
  }
  .tabledata1{
    background: #B5BEDC;
    bottom: 40%;
    left: 0;
    position: absolute;
    width: 100%;
    height: 55%;
    overflow: auto;
  }
  .tablehead{
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    background: #6676AF;
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 5.25%;
  }
  .table{
    background: #F0F3F6;
    position: absolute;
    width: 92.5%;
    height: 80%;
    margin-top: 2%;
    border: none;
    border-color: rgba(60, 77, 139,0.15);
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
    font-family: "Lucida Console", "Courier New", monospace;
    color:black;
    padding: 3%;
    left:16%;
    top:5%;
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
</style>