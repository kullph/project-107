<script>
  import { acc , ac , islogin , page} from "./Logindata.js"
  import { subject  } from "./Subjectdata.js"
  
  var registered = $acc[$ac].registered;
  
  function deregis(index) {
    let tempi,i;
  
    if (confirm('Are you sure to delete ' + $acc[$ac].registered[index].ID + ' ' + $acc[$ac].registered[index].name + ' ?') == true) {
      for(i=0;i<$subject.length;i++){
      if($subject[i].ID == registered[index].ID && $subject[i].section == registered[index].section){
        tempi = i
      }
    }
    
    $subject[tempi].atten -= 1        
    $subject[tempi].attendees.splice($subject[tempi].attendees.indexOf($ac), 1);
    $acc[$ac].registered.splice(index, 1);
    $acc[$ac].registered = $acc[$ac].registered
    } 
    else {
      
    }   
  }

</script>

<div class='main'>
  <label class='head'>Registration Result</label>
  <div class = 'table'>
    <div class='tablehead'>
        <table>  
        <tr>
          <span>
            <th style="width:2%;"></th> 
            <th style="width:5%;">ID ▼</th> 
            <th style="width:20%;">Subjects ▼</th> 
            <th style="width:12%;">Quota ▼</th> 
            <th style="width:7%;">Sections ▼</th> 
            <th style="width:12%;">Time</th> 
          </span>
        </tr>
        </table>
      </div>

    <div class='tabledata1'>
        <table>  
        {#each $acc[$ac].registered as {ID, name, atten, quota, section, day, st, en} , index}
          <tr on:click={()=>deregis(index)} class='tr-hover'>
            <span>
              <td class = 't-but'><img src='/src/assets/bookdel.png'></td>
              <td class = 't-id'>{ID}</td> 
              <td class = 't-name' >{name}</td>
              <td class = 't-attens' >{atten}</td>
              <td class = 't-quota' >/ {quota}</td>
              <td class = 't-sec'>{section}</td>
              <td class = 't-time'>{day}{st.h}:{st.m}-{en.h}:{en.m}</td>
            </span>
          </tr>
        {/each}
        </table>
      </div>
    
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
  img{
    width:32px;
  }
  button{
    cursor: pointer;
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
    padding: 0.25%;
  }
  span{
    font-size: 24px;
    color: #2C4188;
  }
  .tabledata1{
    background: #B5BEDC;
    bottom: 0%;
    left: 0;
    position: absolute;
    width: 100%;
    height: 45%;
    overflow: auto;
  }
  .tablehead{
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    background: #6676AF;
    bottom: 45%;
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
  ::-webkit-scrollbar {
    width: 10px;
    background: #49578a;
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(255,255,255,0.70);
    width: 5px;
    border-radius: 20px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(255,255,255,0.90);
    width: 5px;
    border-radius: 20px;
  }
</style>