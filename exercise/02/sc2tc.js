const d ={
    '我':'我',
    '爱':'愛',
    '夏':'夏',
    '天':'天', 
} 

function s2t (text) {
    let result = []
    for (let i=0;i<text.length;i++){
        let c =text.charAt(i)
        let tc =d[c]
        let c1 =(tc==null)? c : tc
        result.push(c1)
    }
        return result.join('')
}


const sText = '我爱夏天'
let tText = s2t(sText)
console.log('tText=',tText)
