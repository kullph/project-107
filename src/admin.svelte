<script>
  import { subjd , acc , ac , islogin , page } from "./Logindata.js"
  import { subject } from "./Subjectdata.js"
  
  const details = $acc[$ac];
  var i;
  
  let IDs =''
    ,names = ''
    ,attens =''
    ,quotas =''
    ,sections = ''

  function detail(index) {
    $page = 'detail'
    $subjd = $subject[index]
  }
  
  function showinput() {
    var a = document.getElementById('Input');
  
    if (a.style.display === "block") {
      a.style.display = "none";
    } 
    else {
      a.style.display = "block";
    }

    IDs =''
    names = ''
    attens =''
    quotas =''
    sections = ''
    
  }
  
  function submit() {
    let db = 0
    var day = document.getElementById('selday').value;
    var sth = document.getElementById('sth').value;
    var stm = document.getElementById('stm').value;
    var ovh = document.getElementById('ovh').value;
    var ovm = document.getElementById('ovm').value;

    
    if(IDs == '' || names == '' || quotas == '' || sections == ''){
      alert('fill the blank.')
    }
    else{
      $subject.push({ check: 0, ID: IDs, name: names
                     , atten: 0, quota: quotas, section: sections
                     , day: day, st: { h: sth, m: stm }
                     , en: { h: ovh, m: ovm }
                     , attendees: [] })
      
      $subject = $subject
      IDs =''
      names = ''
      attens =''
      quotas =''
      sections = ''
    }
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
        {#each $subject as {ID, name, atten, quota, section, day, st, en , attendees} , index}
          <tr class='tr-hover' on:click={()=>detail(index)}>
            <span class='tr-container'>
              <td class = 't-id'>{ID}</td> 
              <td class = 't-name' >{name}</td>
              <td class = 't-attens' >{atten}</td>
              <td class = 't-quota' >/ {quota}</td>
              <td class = 't-sec'>{section}</td>
              <td class = 't-time'>{day}{st.h}:{st.m}-{en.h}:{en.m}</td>
              <td class = 't-btn'><button class='btn' on:click={()=>detail(index)}>Detail</button></td>
            </span>
          </tr>
        {/each} 
          
        </table>
      
      </div>
    
    <div class='searchbar'>
      <input type = "text" class="srchinput" id = 'myInput' on:keyup={search} placeholder="(ID)">
      <label class='srch'>(Search ID Course)</label>
      <button class = 'search-btn' id='add-btn' on:click={showinput}>Add Subject</button>
    </div>
      
    <div id='Input' class='add-section'>
      <table class = 'tab'>
            <span class='tr-add'>
              <tr>
                <td class = 't-input'>
                  <input bind:value={IDs} placeholder="(ID)">
                </td> 
                
                <td class = 't-input'>
                  <input bind:value={names} placeholder="(name)">
                </td>
                
                <td class = 't-input'>
                  <input bind:value={quotas} placeholder="(quota)">
                </td>
                
                <td class = 't-input'>
                  <input bind:value={sections} placeholder="(section)">
                </td>
                
              </tr> 
              
              <tr>

                <td class = 't-input'>
                  Day:
                  <select name = 'selday' id='selday'>
                    <option value = 'MO'>Monday</option>
                    <option value = 'TU'>Tuesday</option>
                    <option value = 'WE'>Wednesday</option>
                    <option value = 'TH'>Thursday</option>
                    <option value = 'FR'>Friday</option>
                    <option value = 'SA'>Saturday</option>
                    <option value = 'SU'>Sunday</option>
                  </select>

                </td>
                <td class = 't-input'>
                  Start:
                  <select name = 'sth' id='sth'>
                    <option value = '8'>8</option>
                    <option value = '9'>9</option>
                    <option value = '10'>10</option>
                    <option value = '11'>11</option>
                    <option value = '12'>12</option>
                    <option value = '13'>13</option>
                    <option value = '14'>14</option>
                    <option value = '15'>15</option>
                    <option value = '16'>16</option>
                    <option value = '17'>17</option>
                  </select>
                  ~
                  <select name = 'stm' id='stm'>
                    <option value = '00'>00</option>
                    <option value = '30'>30</option>
                  </select>

                </td>
                <td class = 't-input'>
                  Over:
                  <select name = 'ovh' id='ovh'>
                    <option value = '9'>9</option>
                    <option value = '10'>10</option>
                    <option value = '11'>11</option>
                    <option value = '12'>12</option>
                    <option value = '13'>13</option>
                    <option value = '14'>14</option>
                    <option value = '15'>15</option>
                    <option value = '16'>16</option>
                    <option value = '17'>17</option>
                    <option value = '18'>18</option>
                  </select>
                  ~
                  <select name = 'ovm' id='ovm'>
                    <option value = '00'>00</option>
                    <option value = '30'>30</option>
                  </select>
                </td>
                
              </tr> 

              <tr>
                <td class = 't-btn'>
                  <button class='btn' on:click={submit} id='smit'>Submit</button>
                </td>
              </tr>
              
            </span>

        </table>
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
  #smit:hover{
    background-color: #0A1230;
  }
  select{
    font-family: "Lucida Console", "Courier New", monospace;
    border-radius: 12px;
    font-size: 18px;
    padding: 1.5%;
  }
  .t-btn .btn{
    font-size: 16px;
    padding: 5%;
  }
  .tab tr td{
    width: 20.5%;
    height: 5%;
    padding: 1%;
  }
  .t-input input{
    font-family: "Lucida Console", "Courier New", monospace;
    font-size: 18px;
    width: 85%;
    height: 120%;
    border: none;
    border-radius: 12px;
    padding: 3%;
    margin-top: 0.75%;
    margin-left: 3%;
  }
  .tab,.tab tr, .tab tr td{
    
  }
  .tab{
    width: 100%;
    padding: 1.25%;
  }
  .add-btn:hover{
    background-color: #0A1230;
  }
  #Input{
    display: none;
  }
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
  .search-btn, .add-btn{
    position: relative;
    font-family: "Lucida Console", "Courier New", monospace;
    padding: 0.75%;
    background-color: #3c4d8b;
    color: white;
    text-align: center;
    width: 10%;
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
    top:66.5%;
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
    margin-left: 0%;
  }
  .srch{
    font-family: "Lucida Console", "Courier New", monospace;
    color: white;
  }
</style>