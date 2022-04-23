import { writable } from "svelte/store";

let subj = [{ check: 0, ID: 'SF001', name: 'Software Processing', atten: 200, quota: 200, section: '760001', day: 'WE', st: { h: 9, m: 30 }, en: { h: 12, m: 30 }, attendees: [] },
{ check: 0, ID: 'SF002', name: 'Software Engineering', atten: 259, quota: 300, section: '760001', day: 'WE', st: { h: 9, m: 30 }, en: { h: 12, m: 30 }, attendees: [] },
{ check: 0, ID: 'SF003', name: 'Software Introducing', atten: 29, quota: 30, section: '760001', day: 'WE', st: { h: 9, m: 30 }, en: { h: 12, m: 30 }, attendees: [] },
{ check: 0, ID: 'SF004', name: 'Software Creating', atten: 23, quota: 25, section: '760001', day: 'WE', st: { h: 9, m: 30 }, en: { h: 12, m: 30 }, attendees: [] },
{ check: 0, ID: 'SF005', name: 'Software Marketing', atten: 1, quota: 300, section: '760001', day: 'WE', st: { h: 9, m: 30 }, en: { h: 12, m: 30 }, attendees: [] },
{ check: 0, ID: 'SF006', name: 'Software Designing', atten: 9, quota: 12, section: '760001', day: 'WE', st: { h: 9, m: 30 }, en: { h: 12, m: 30 }, attendees: [] },
{ check: 0, ID: 'SF007', name: 'Software Predicting', atten: 400, quota: 400, section: '760001', day: 'WE', st: { h: 9, m: 30 }, en: { h: 12, m: 30 }, attendees: [] },
{ check: 0, ID: 'SF008', name: 'Software Hacking', atten: 534, quota: 600, section: '760001', day: 'WE', st: { h: 9, m: 30 }, en: { h: 12, m: 30 }, attendees: [] },
{ check: 0, ID: 'CN101', name: 'Software Hacking', atten: 534, quota: 600, section: '760001', day: 'WE', st: { h: 9, m: 30 }, en: { h: 12, m: 30 }, attendees: [] },
{ check: 0, ID: 'TU100', name: 'Software Hacking', atten: 534, quota: 600, section: '760001', day: 'WE', st: { h: 9, m: 30 }, en: { h: 12, m: 30 }, attendees: [] },
]

export const subject = writable(subj);