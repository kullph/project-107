<script>
  import { islogin , page , acc} from './Logindata'
  import Login from './Login.svelte'
  import Stu from './stureg.svelte'
  import Admin from './admin.svelte'
  import Regre from './sturegresult.svelte'
  import Stuprofile from './stuprofile.svelte'
  import Reg from './reg.svelte'
  import Adminprofile from './adminprofile.svelte'
  import Detail from './adminSubjDetail.svelte'
</script>

{#if !$islogin}
  {#if $page == 'reg'}
    <Reg />
  {:else if $page == 'login'}
    <Login />
  {:else}
    <Login />
  {/if}
{:else}
    {#if $page == 'stu'}
      <Stu />
    {:else if $page == 'admin'}
      <Admin />
    {:else if $page == 'sturegresult'}
      <Regre />
    {:else if $page == 'stuprofile'}
      <Stuprofile />  
    {:else if $page == 'adminprofile'}
      <Adminprofile />  
    {:else if $page == 'detail'}
      <Detail />
    {/if}
{/if}

