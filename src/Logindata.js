import {writable} from "svelte/store";

let data = {'6410742297': {password:'000' ,type:'stu', id:'6410742297', fname:'Kullaphat', lname:'Kajhan', year:'1', program:'Software Engineering' , fac:'Engineering', GPAX:'4.00', Bday:'08/09/2003', phone:'09-3000-0000',selected:[], registered:[]},
            'admin': {password:'000' ,type:'admin', id:'6410742297', fname:'Kullaphat', lname:'Kajhan', year:'-', program:'-' , fac:'-', GPAX:'-', Bday:'08/09/2003', phone:'09-3000-0001'},
            'inthat': {password:'0',type:'stu', id:'6410742750', fname:'Inthat', lname:'Sriphao', year:'1', program:'Data Engineering' , fac:'Engineering', GPAX:'4.00', Bday:'15/09/2002', phone:'09-7313-8400',selected:[], registered:[]},
            '0': {password:'0',type:'stu', id:'6510742297', fname:'Pullaphat', lname:'Pajhan', year:'1', program:'Data Engineering' , fac:'Engineering', GPAX:'4.00', Bday:'08/09/2004', phone:'09-3000-0002',selected:[], registered:[]},
            'student': {password:'0',type:'stu', id:'6510742297', fname:'Pullaphat', lname:'Pajhan', year:'1', program:'Data Engineering' , fac:'Engineering', GPAX:'4.00', Bday:'08/09/2004', phone:'09-3000-0002',selected:[], registered:[]}
           }


export const acc = writable(data);
export const islogin = writable(false);
export const page = writable('login');
export const ac = writable('');