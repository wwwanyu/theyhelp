// Task 1
// 1.建立角色的距離列表
// 2.比較角色之間的距離
const 悟空 = [
    { name: '特南克斯', distance: 3 },
    { name: '佛利沙', distance: 7 },
    { name: '貝吉塔', distance: 5 },
    { name: '辛巴', distance: 6 },
    { name: '丁滿', distance: 7 },
]
const 特南克斯 = [
    { name: '悟空', distance: 3 },
    { name: '佛利沙', distance: 6 },
    { name: '貝吉塔', distance: 6 },
    { name: '辛巴', distance: 9 },
    { name: '丁滿', distance: 10 },
]
const 佛利沙 = [
    { name: '悟空', distance: 7 },
    { name: '特南克斯', distance: 6 },
    { name: '貝吉塔', distance: 10 },
    { name: '辛巴', distance: 11 },
    { name: '丁滿', distance: 10 },
]
const 貝吉塔 = [
    { name: '悟空', distance: 5 },
    { name: '特南克斯', distance: 6 },
    { name: '佛利沙', distance: 10 },
    { name: '辛巴', distance: 5 },
    { name: '丁滿', distance: 10 },
]
const 辛巴 = [
    { name: '悟空', distance: 6 },
    { name: '特南克斯', distance: 9 },
    { name: '佛利沙', distance: 12 },
    { name: '貝吉塔', distance: 5 },
    { name: '丁滿', distance: 5 },
]
const 丁滿 = [
    { name: '悟空', distance: 7 },
    { name: '特南克斯', distance: 10 },
    { name: '佛利沙', distance: 10 },
    { name: '貝吉塔', distance: 10 },
    { name: '辛巴', distance: 5 },
]

function func1(name) {
    // 計算兩個角色之間的距離，從大到小
    name.sort((a, b) => b.distance - a.distance);

    // 如果符合最大跟最小的數字，要印出來
    let farthest = [];
    let nearest = [];
    const last = name.at(-1);
    for (let i = 0; i < name.length; i++) {
        if (name[0].distance === name[i].distance) {
            farthest.push(name[i]);
        }
    }
    for (let i = 0; i < name.length; i++) {
        if (last.distance === name[i].distance) {
            nearest.push(name[i]);
        }
    }

    // 整理結果
    const farthestlist = farthest.map((charactor) => charactor.name).join('、');
    const nearestlist = nearest.map((charactor) => charactor.name).join('、');
    console.log(`print 最遠${farthestlist}；最近${nearestlist}`);
}

func1(辛巴);
func1(悟空);

// Task 2
function func2() { }