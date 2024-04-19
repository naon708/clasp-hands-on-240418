import { doPost, main, remind } from './main'

// CHECK
declare const global: { [x: string]: unknown }

global.main = main
global.doPost = doPost
global.remind = remind
