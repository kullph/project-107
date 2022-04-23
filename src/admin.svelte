<script>
  import { acc , ac , islogin , page } from "./Logindata.js"
  import { subject } from "./Subjectdata.js"
  
  const details = $acc[$ac];

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}
  
  let ID =''
  let name = ''
  let atten =''
  let quota =''
  let section = ''
  let time = ''

  let searchdata = ''
  
  function submit() {
    alert('submit เเล้วจ้า');
    
  }
  
  function add() {
    var x = document.getElementById('Input');
    if (x.style.display === "none") {
    x.style.display = "none";} 
    else {
    x.style.display = "block";
  
  }
  }
  
  function detail(index) {
    var x = document.getElementById('Hide');
    if (x.style.display === "block") {
    x.style.display = "none";} 
    else {
    x.style.display = "block"

  }
  }

  function edit() {
    alert('Edit!!!!!!!!!!');
  }
  
  function search() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
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

  const selectedclear = () => {
    //
  }

  
</script>

<div class='main'>
  <label class='head'>Admin User</label>
  <div class='table'>
    <div class='tablehead'>
        <table>  
        <tr>
          <span>
            <th style="width:5%;">ID ▼</th> 
            <th style="width:15%;">Subjects ▼</th> 
            <th style="width:12%;">Quota ▼</th> 
            <th style="width:7%;">Sections ▼</th> 
            <th style="width:12%;">Time</th>
            <th style="width:12%;"></th>
          </span>
        </tr>
        </table>
      </div>
    
    <div class='tabledata1'>
        <table id='myTable'>
        {#each $subject as {ID, name, atten, quota, section, day, st, en} , index}
          <tr>
            <span class='tr-container'>
              <td class = 't-id'>{ID}</td> 
              <td class = 't-name' >{name}</td>
              <td class = 't-attens' >{atten}</td>
              <td class = 't-quota' >/ {quota}</td>
              <td class = 't-sec'>{section}</td>
              <td class = 't-time'>{day}{st.h}:{st.m}-{en.h}:{en.m}</td>
              <td class = 't-btn'><button class='btn' on:click={detail}>Detail</button></td>
              <td class = 't-btn'><button class='btn'on:click={edit}>Edit</button></td>
            </span>
          </tr>
        {/each} 
          <div class='Hide' id='Hide'>
            <span id='more'>
            {#each $subject as attendees,index}
            <tr>
            <span class='block-name'>
              <td class = 't-id'>{ID}</td> 
              <td class = 't-name'>{attendees}</td>
            </span>
          </tr>
            {/each}  
            </span>
          </div>
          
        </table>
      
      </div>
    
    <div class='searchbar'>
      <input type = "text" class="srchinput" id = 'myInput' on:keyup={search} placeholder="(ID)">
      <label class='srch'>(Search ID Course)</label>
      <button class = 'search-btn' on:click={confirm}>confirm</button>
    </div>
    
    <div class='add-section'>
        <button class='add-btn' on:click={add}>Add</button>
      
      <div id='Input'>
        <tr>
            <span class='tr-add'>
              <td class = 't-input'>
                <input bind:value={ID} placeholder="(ID)">
              </td> 
              <td class = 't-input'>
                <input bind:value={name} placeholder="(name)">
              
              </td>
              <td class = 't-input'>
                <input bind:value={atten} placeholder="(atten)">
              </td>
              <td class = 't-input'>
                <input bind:value={quota} placeholder="(quota)"></td>
              <td class = 't-input'>
                <input bind:value={section} placeholder="(section)">
              </td>
              <td class = 't-input'>
                <input bind:value={time} placeholder="(Time)">
              </td>
              <td class = 't-btn'>
                <button class='btn'on:click={submit}>Submit</button>
              </td>
            </span>
          </tr>
      </div>
      
    </div>
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
  img{
    width:32px;
  }
  button{
    cursor: pointer;
  }
  .btn {
    font-family: "Lucida Console", "Courier New", monospace;
    background-color: #3c4d8b;
    color: white;
    text-align: center;
    border-radius: 12px;
    cursor: pointer;
    font-size: 14px;
    transition-duration: 0.4s;
    border: none;
    padding: 8.85px;
  }
  .search-btn, .add-btn {
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
  .search-btn:hover{
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
  .tr-container {
    font-size: 18px;
  }
  .t-id{
    width:6%;
    text-align: center;
  }
  .t-name{
    width:12%;
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
  .t-btn {
    width:6%;
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
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    background: #B5BEDC;
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

  .add-section {
    bottom: 10%;
    left: 0;
    position: absolute;
    width: 100%;
    height: 6.5%;
  }
  
  .tr-input{
    font-family: "Lucida Console", "Courier New", monospace;
    width: 15%;
    height: 10%;
    border: none;
    border-radius: 12px;
    padding: 0.75%;
    margin-top: 0.75%;
    margin-left: 10%;
  }
  .srch{
    font-family: "Lucida Console", "Courier New", monospace;
    color: white;
  }
</style>