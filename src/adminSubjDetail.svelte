<script>
  import { subjd , acc , ac , islogin , page } from "./Logindata.js"
  import { subject } from "./Subjectdata.js"

  let subName =''
    ,subID =''
    ,subSTh =''
    ,subSTm = ''
    ,subENh =''
    ,subENm = ''
    ,subQuota =''
    ,subSection = ''
    ,subDay = ''
  
  var i

  function del() {
    for(i=0;i<$subject.length;i++){
      if($subject[i] == $subjd){
        if (confirm('Are you sure to delete ' + $subjd.ID + ' ' + $subjd.name + '?') == true) {
          $page = 'admin'
          $subject.splice(i,1)
          $subject = $subject
        }
      }
    }
  }
  
  function edit() {
    var x = document.getElementById("info");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }

    var y = document.getElementById("editquota");
      if (y.style.display === "block") {
        y.style.display = "none";
      } else {
        y.style.display = "block";
      }
  }

  
  function submit() {
    var tempi = 0
    var c = document.getElementById('editquota');
    if (c.style.display === "block") {
      c.style.display = "none";
    } else {
      c.style.display = "block";
    }

    var z = document.getElementById("info");
      if (z.style.display === "none") {
        z.style.display = "block";
      } else {
        z.style.display = "none";
      }

    let db = 0
    
    $subjd.day = document.getElementById('selday').value;
    $subjd.st.h = document.getElementById('sth').value;
    $subjd.st.m = document.getElementById('stm').value;
    $subjd.en.h = document.getElementById('ovh').value;
    $subjd.en.m = document.getElementById('ovm').value;

    
    if(IDs == '' || names == '' || quotas == '' || sections == ''){
      alert('fill the blank.')
    }
    else{
      for(i=0;i<$subject.length;i++){
        if($subject == $subjd){
          tempi = i
        }
      }
      $subject[tempi] = { check: 0, ID: $subjd.ID, name: $subjd.name
                     , atten: 0, quota: $subjd.quota, section: $subjd.section
                     , day: dayx, st: { h: sthx, m: stmx }
                     , en: { h: ovhx, m: ovmx }
                     , attendees: [] }
      
      $subject = $subject
    }
   
  }
  
</script>


<div class='main'>
  <label class='head'>{$subjd.ID} {$subjd.name} Details</label>
  <br>
  
  <div class='info' id='info'>
        <table>  
          <tr>
            <span>
              <td><b>ID:</b> {$subjd.ID}</td> 
              <td><label><b>Start-time</b></label></td>
              <tr>
                <td><b>Subjects:</b> {$subjd.name}</td>
                <td>&nbsp;{$subjd.st.h}:{$subjd.st.m}</td> 
              </tr>
              
              <tr>
                <td><b>Quota:</b> {$subjd.quota}</td>
              </tr>

              <tr>
                <td><b>Sections:</b> {$subjd.section}</td>
                <td><label><b>End-time</b></label></td>
              </tr>

              <tr>
                <td><b>Day:</b> {$subjd.day}</td>
                <td>&nbsp;{$subjd.en.h}:{$subjd.en.m}</td> 
              </tr>

              

              <tr>
                <td>
                  <button class='edit' on:click={edit}>Edit</button>
                  <button class='edit' on:click={del}>Delete</button>
                </td>
              </tr>
            </span>
          </tr>
        </table>
          
  </div> 

  <div class='editquota' id='editquota'>
        <table>  
          <tr>
            <span>
              <td><b>ID</b><input bind:value={$subjd.ID} placeholder={$subjd.ID}></td> 

              <tr>
                <td><b>Subjects</b> <input bind:value={$subjd.name} placeholder={$subjd.name}></td>
                
                <td>
                  <b>Start:<br> Hour</b>
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
                </td>
                
                <td>
                  <b><br>Minute</b>
                  <select name = 'stm' id='stm'>
                    <option value = '00'>00</option>
                    <option value = '30'>30</option>
                  </select>
                </td>
              </tr>
              
              <tr>
                <td><b>Quota</b><input bind:value={$subjd.quota} placeholder={$subjd.quota}></td>
              </tr>

              <tr>
                <td><b>Sections</b><input bind:value={$subjd.section} placeholder={$subjd.section}></td>
              </tr>

              <tr>
                <td>
                  <b>Day</b>
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
                
                <td>
                  <b>Over:<br>Hour</b>
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
                </td>
                
                <td>
                  <b><br>Minute</b>
                  <select name = 'ovm' id='ovm'>
                    <option value = '00'>00</option>
                    <option value = '30'>30</option>
                  </select>
                </td>
                
              </tr>

              

              <tr>
                <td><button class='edit' on:click={submit}>submit</button></td>
              </tr>
            </span>
          </tr>
        </table>
  </div>
    
  <div class='attendees'>

    <div class='editquota' id='editquota'>
        <table>  
          <tr>
            <span>
              <td><b>ID</b><input bind:value={subID} placeholder={$subjd.ID}></td> 
              <td><label><b>Start-time</b></label></td>
              <tr>
                <td><b>Subjects :</b> <input bind:value={subName} placeholder={$subjd.name}></td>
                <td><b>Hour :</b><input bind:value={subSTh} placeholder={$subjd.st.h}></td> 
                <td><b>Minute :</b><input bind:value={subSTm} placeholder={$subjd.st.m}></td>
              </tr>
              
              <tr>
                <td><b>Quota :</b><input bind:value={subQuota} placeholder={$subjd.quota}></td>
              </tr>

              <tr>
                <td><b>Sections :</b><input bind:value={subSection} placeholder={$subjd.section}></td>
                <td><label><b>End-time</b></label></td>
              </tr>

              <tr>
                <td class = 't-input'>
                  Day :
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
                  
                <td><b>Hour</b><input bind:value={subENh} placeholder={$subjd.en.h}></td> 
                <td><b>Minute</b><input bind:value={subENm} placeholder={$subjd.en.m}></td>
              </tr>

              

              <tr>
                <td><button class='edit' on:click={submit}>submit</button></td>
              </tr>
            </span>
          </tr>
        </table>
  </div>
    
    <table>
      <tr>
        <td><label><b>Student</b></label></td>
      </tr>
      <tr>
        <td><label><b>ID :</b></label></td>
        <td><label><b>Name :</b></label></td>
      </tr>
    {#each $subjd.attendees as name}
      <tr>
        <td>{name[0]}</td>
        <td>{name[1]} {name[2]} </td>
      </tr>
    {/each}
    </table>
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
  span{
    font-size: 20px;
    color: #2C4188;
  }
  label{
    text-align: center;
  }
  input{
    font-family: "Lucida Console", "Courier New", monospace;
    width: 85%;
    margin: 5%;
    border: none;
    border-radius: 12px;
    padding: 5%;
  }
  #editquota{
    margin:2%;
    display:none;
    background: #B5BEDC;
    padding: 0.5%;
    border-radius: 16px;
  }
  .info,.attendees,#editquota{
    float:left;
    width:42.5%;
  }
  .attendees{
    margin: 2%;
    padding: 1%;
    border-radius: 16px;
    background: #B5BEDC;
    height: 80%;
    overflow: auto;
  }
  .info{
    margin: 2%;
    background: #B5BEDC;
    padding: 1%;
    border-radius: 16px;
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
  .sidebut:hover,button:hover{
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
  .edit{
    position: relative;
    font-family: "Lucida Console", "Courier New", monospace;
    padding: 3.5%;
    background-color: #3c4d8b;
    color: white;
    text-align: center;
    margin: 3%;
    border-radius: 16px;
    cursor: pointer;
    font-size: 18px;
    transition-duration: 0.4s;
    border: none;
  }
  b{
    color: #2C4188;
    
  }
  td{
    color: #2C4188;
  }
</style>