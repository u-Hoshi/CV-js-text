console.log('hello,world!')
console.log('俺ガいる') 
// 神作
console.log(1 + 2)
console.log(9 - 8 * 3)

// これらすべて値
console.log(100) //数値やで
console.log('SAO ソードアートオンライン') //文字列やで
console.log([1, 2, 3, 4, 5])  //配列やで.配列は[]が必要、値の羅列
console.log(true) //真偽値うあで 好きな歌手はtrue
console.log(null) //無ムむ
console.log({ one: 1, two: 2 }) //オブジェクトやで・・・名前と値の組み合わせ

// 変数,,,値に名前をつける事
// const 名前 = 値
const answer = 114514
//   answer変数に42を代入する
console.log(answer)
const anime = "SAO" 
console.log(anime)
const number = [4, 6, 4, 9]
console.log(number)
// これら「anime」「number」が変数名と呼ばれる

// jsでは文字列が多用される
//文字列にはルールもあるが抜け道もある「エスケープ」と調べたら色々出てくる
console.log("abc\nYH")
// 「\n」で開業することが出来る

// 文字列結合
const osianime = "俺ガイル"
console.log("僕の好きなアニメは" + osianime + "です")

// テンプレート文字列
const sukinaanime = "ようじつ"
console.log(`好きなのは${sukinaanime}`)
// テンプレート文字列は「"や'ではなく`である所に注意」
// 改行がそのままできるのもメリット
const recentlyanime = `
SAO
ダンまち
魔法科高校の劣等生`
console.log(recentlyanime)

// 配列
const iconic = ["クライフ", "チェフ", "カフーb", "ロナウジーニョ"]
const iconic2 = [
    "ビエラ",
    "ベッカム",
    "カシージャス",
]
console.log(iconic.length)
console.log(iconic[3])
console.log(iconic2[1])

// 配列の操作
// 増やす
iconic.push("メッシ")
console.log(iconic)
// 減らす
iconic.splice(2, 2)
console.log(iconic)
// splice(減らす点,そこからいくつ消すか)
// 書き換える
iconic[1] = "マラドーナ"
console.log(iconic)


// 
// 課題
// 

// １
const okasi = "私の好きなお菓子はグミ"
console.log(okasi)

// 2
const q2 = `I'm learning JavaScript.

JavaScript says Hello, world!`

console.log(q2)

// 3
const array = [1, 2, 3]
array.splice(0, 1)
console.log(array)

array.push(5)
console.log(array)

array.splice(1, 2)
console.log(array)

array[0]="100"
console.log(array)



// 
// 
// 後編
// 
// 

// 条件分岐→「if文」
// if (条件) {
//   条件が成り立ったときの処理
// } else {
//   条件が成り立たなかったときの処理
// }

const num = Math.random()
if (num > 0.5) {
    console.log("大きい")
} else {
    console.log("小さい")
}
console.log(`数: ${num}`)
// Math.random()とは０～１の数字がランダンで作られる

// 真偽値
const a = 2
const b = 4
console.log(a === b)
console.log(a !== b)
console.log(a < b)
console.log(a <= b)
console.log(a > b)
console.log(a >= b)

const score = Math.random() * 100
console.log(`点数${score}`)
if (score >= 90) {
    console.log("優秀")
} else if (score >= 75) {
    console.log("そこそこ")
} else {
    console.log("不可")
}

// ループ
// for while foreachがある

// forは特定の回数を繰り返すのに使われる
// for (let 変数 = 0; 変数 < 繰り返し回数; 変数++) {
//   繰り返したい処理
// }
for (let i = 2; i < 8; i++){
    console.log(i)
}

// while文
// while (ループを続ける条件) {
//   繰り返したい処理
// }
let s = 5
while (s < 1000) {
    console.log(s)
    s=s*s
}

// foreach文、配列の要素を1つずつ取り出したいとき使われる
// 配列.forEach((変数) => {
//   各要素ごとに実行したい処理
// })

const anime2 = ["俺ガイル", "弱虫ペダル", "イナズマイレブン", "干物妹", "寄宿学校"]
anime2.forEach((animee) => {
    console.log(animee)
})

// 関数
// 処理をつかいまわせるようにするもの
function cook(food1, food2) {
    console.log(food1 + "を切ります")
    console.log(`${food1}を炒めます`)
    console.log(food2 + "を入れて完成です")
    console.log(food1 + "に"+food2+"を入れたら魔の料理が完成です")
}
cook("ピザ", "ysai") //←引数である
// 引数は、関数の「呼び出しごとに違う部分」を穴埋めするようなイメージ

function bar() {
  console.log('barが呼び出された')
}
bar()


function foo(a, b, c) {
    console.log(`fooが引数${a}, ${b}, ${c}で呼び出された`)
}

foo(3,5,6)

// 関数の戻り値
function applyTax(price) {
    const result = price * 0.1
    return result
}
const tax = applyTax(1200) //taxという変数をapplytaxによって定義してる？！
console.log(tax)


// 関数の描き方のバリエーション
// 今まで通りの↓
function double(x) {
  return x * 2
}
const jsa = double(5)
console.log(jsa)

// アロー関数
const triple = (x) => {
  return x * 3
}

const allow = triple(9)
console.log(allow)


// 
// 課題
// 

// 1
function cointoss(){
    const num = Math.random()
        if(num >= 0.5) {
        console.log("表")
    } else {
        console.log("裏")
        }
}
for (let i = 0; i <= 10; i++){
    cointoss()
}

// 2
function scoring(score) {
    if (score >= 90) {
        //   console.log("秀")
        const result1 = "秀"
        return result1
    } else if (score >= 75) {
        const result1 = "良"
        return result1
    } 
    else {
        const result1 = "不可"
        return result1
    }
}
// 動作確認
console.log(scoring(100)) //=> 秀
console.log(scoring(80)) //=> 良
console.log(scoring(13)) //=> 不可



//課題3

const scores = [13, 67, 18, 54, 30, 22, 99, 49, 21, 65]


function scoring(score) {
    
        if (score >= 90) {
            //   console.log("秀")
            const result1 = "秀"
            return result1
        } else if (score >= 75) {
            const result1 = "良"
            return result1
        } else {
            const result1 = "不可"
            return result1
        }
}
// scoreの各要素をループさせて、それぞれの結果を表示する

scores.forEach(function (scoring) {
    const score = scores
    return scoring()
});
console.log(scoring(scores))