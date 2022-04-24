<script>
  import { acc , ac , islogin , page } from "./Logindata.js"
  import { subject } from "./Subjectdata.js"
  
  
  
  var selected = $acc[$ac].selected;
  var registered = $acc[$ac].registered;
  var searchdata = '';
  
  var i,j
  
  function search() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } 
        else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  function select(index) {
    let doub = 0 
    let doubr = 0
    for(i=0;i<selected.length;i++){
      if($subject[index].ID == selected[i].ID && $subject[index].section == selected[i].section){
        doub += 1;
      }
    }

    for(i=0;i<$acc[$ac].registered.length;i++){
      if($subject[index].ID == $acc[$ac].registered[i].ID && $subject[index].section == $acc[$ac].registered[i].section){
        doubr += 1;
      }
    }

    if(doub == 0 && doubr == 0){
      if($subject[index].quota - $subject[index].atten <= 0){
        alert('Quota is full.');
      }
      else{
        $subject[index].atten += 1
        $subject[index].attendees.push([$acc[$ac].id,$acc[$ac].fname,$acc[$ac].lname])
        selected.push($subject[index]);
        selected = selected
      }
    }
    else{
      if(doub != 0){
        alert('You have selected this subject. \nYou are unable to select same subject twice.');
      }
      else if(doubr != 0){
        alert('You have registered this subject. \nYou are unable to select the registered subject.');
      }
    }
    
  }

  function deselect(index) {
    let tempi
    for(i=0;i<$subject.length;i++){
      if($subject[i].ID == selected[index].ID && $subject[i].section == selected[index].section){
        tempi = i
      }
    }
    $subject[tempi].atten -= 1        
    $subject[tempi].attendees.splice($subject[tempi].attendees.indexOf([$acc[$ac].id,$acc[$ac].fname,$acc[$ac].lname]), 1);
    selected.splice(index, 1);
    selected = selected
  }

  function selectedclear() {
    for(i=0;i<selected.length;i++){
      for(j=0;j<$subject.length;j++){
        if(selected[i].ID == $subject[j].ID && selected[i].section == $subject[j].section){
          $subject[j].atten -= 1
        }
      }
    }
    selected = []
    selected = selected
    $acc[$ac].selected = []
    $acc[$ac].selected = $acc[$ac].selected
  }

  function confirm() {
    for(i=0;i<selected.length;i++){
      $acc[$ac].registered.push(selected[i])
    }
    $acc[$ac].registered = $acc[$ac].registered
    selected = []
    selected = selected
    $acc[$ac].selected = []
    $acc[$ac].selected = $acc[$ac].selected
  }
    
</script>

<div class='main'>
  <label class='head'>Registration</label>
  
  <div class='table'>
    
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
        <table id='myTable'>  
        {#each $subject as {ID, name, atten, quota, section, day, st, en} , index}
          <tr on:click={()=>select(index)} class='tr-hover'>
            <span>
              <td class = 't-but'><img src='/src/assets/bookadd.png'></td>
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
    
    
    <div class='searchbar'>
      <input type = "text" class = 'srchinput' id = 'myInput' on:keyup={search} placeholder="(ID)">
      <label class='srch'>(Search ID Course)</label>
      <button class = 'srchbut' on:click={confirm}>confirm</button>
      <button class = 'srchbut' on:click={selectedclear}>clear</button>
    </div>
    
    <div class='selected'>
      <table>
      {#each selected as {ID, name, atten, quota, section, day, st, en}, index}
        <tr on:click={()=>deselect(index)} class='tr-hover'>
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
    margin-top: 0.25%;
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
    margin-left: 3%;
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
    border-collapse: collapse;
  }
  tr{
    
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
    padding: 0.25%;
    margin-bottom: 1%;
  }
  th{
    text-align: center;
    padding: 0.5%;
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
    position: absolute;
    width: 92.5%;
    height: 80%;
    margin-top: 2%;
    border: none;
    border-color: rgba(60, 77, 139,0);
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
  .srch{
    font-family: "Lucida Console", "Courier New", monospace;
    color: white;
  }
</style>