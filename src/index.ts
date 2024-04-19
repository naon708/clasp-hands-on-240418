// main.ts から関数をインポート
import { doPost, main, remind } from './main'

// declare: JavaScript で定義された変数や関数を TypeScript に認識させて扱えるようにするための構文
// global というオブジェクトを定義
// globalオブジェクトは、任意の string型の key を持ち、値は unknown型 のプロパティである
// 「global というオブジェクトが GAS で定義されてるよ」を TypeScript に認識させている(globalオブジェクトに対して型チェックできるようにするため)
declare const global: { [x: string]: unknown }

// globalオブジェクトに関数を割り当てることで、GASの実行環境からアクセスして関数を実行できるようにする
global.main = main
global.doPost = doPost
global.remind = remind
