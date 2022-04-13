import {writable} from "svelte/store";

let subj = [{check:0, ID:'SF001', name:'Software Processing', atten:9999, quota:9999, section:'760001', day:'WE', st:{h:9,m:30},en:{h:12,m:30}},
           {check:0, ID:'SF002', name:'Software Engineering', atten:259, quota:9999, section:'760001', day:'WE', st:{h:9,m:30},en:{h:12,m:30}},
           {check:0, ID:'SF003', name:'Software Introducing', atten:29, quota:9999, section:'760001', day:'WE', st:{h:9,m:30},en:{h:12,m:30}},
           {check:0, ID:'SF004', name:'Software Creating', atten:6999, quota:7000, section:'760001', day:'WE', st:{h:9,m:30},en:{h:12,m:30}},
           {check:0, ID:'SF005', name:'Software Marketing', atten:9999, quota:9999, section:'760001', day:'WE', st:{h:9,m:30},en:{h:12,m:30}},
           {check:0, ID:'SF006', name:'Software Designing', atten:9, quota:12, section:'760001', day:'WE', st:{h:9,m:30},en:{h:12,m:30}},
           {check:0, ID:'SF007', name:'Software Predicting', atten:879, quota:9999, section:'760001', day:'WE', st:{h:9,m:30},en:{h:12,m:30}},
           {check:0, ID:'SF008', name:'Software Hacking', atten:534, quota:600, section:'760001', day:'WE', st:{h:9,m:30},en:{h:12,m:30}},
           ]

let sel = [{check:0, ID:'SF001', name:'Software Processing', atten:9999, quota:9999, section:'760001', day:'WE', st:{h:9,m:30},en:{h:12,m:30}}]

export const subject = writable(subj);
export const selected = writable(sel);