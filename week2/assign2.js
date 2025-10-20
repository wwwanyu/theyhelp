// Task 1
// 1.建立角色的距離列表
// 2.比較角色之間的距離
const additionalDistance = '' || 2;
const characters = [{
    id: 1,
    name: '悟空',
    x: 0,
    y: 0
},
{
    id: 2,
    name: '特南克斯',
    x: 1,
    y: -2
},
{
    id: 3,
    name: '弗利沙',
    x: 4,
    y: -1
},
{
    id: 4,
    name: '貝吉塔',
    x: -4,
    y: -1
},
{
    id: 5,
    name: '辛巴',
    x: -3,
    y: 3
},
{
    id: 6,
    name: '丁滿',
    x: -1,
    y: -4
}]

function func1(name) {
    // Exclude the picked character
    const others = characters.filter((character) => character.name !== name);
    const pickedCharacter = characters.find((character) => character.name === name);

    // x,y 整理成 distance: (x + x) + ( y + y ) + additionalDistance
    const distance = others.map((character) => ({
        ...character,
        distance: Math.abs(character.x) +
            Math.abs(character.y) +
            Math.abs(pickedCharacter.x) +
            Math.abs(pickedCharacter.y)
    }));

    // 排序跟 others 之間的距離，從大到小
    distance.sort((a, b) => b.distance - a.distance);

    // 如果符合最大跟最小的數字，要印出來
    let farthest = [];
    let nearest = [];
    const last = distance.at(-1);
    for (let i = 0; i < distance.length; i++) {
        if (distance[0].distance === distance[i].distance) {
            farthest.push(distance[i]);
        }
    }
    for (let i = 0; i < distance.length; i++) {
        if (last.distance === distance[i].distance) {
            nearest.push(distance[i]);
        }
    }

    // 整理結果
    const farthestlist = farthest.map((character) => character.name).join('、');
    const nearestlist = nearest.map((character) => character.name).join('、');
    console.log(`func1('${pickedCharacter.name}') //print 最遠${farthestlist}；最近${nearestlist}`);
}

func1('辛巴');
func1('悟空');
func1('弗利沙');
func1('特南克斯');
func1('貝吉塔');
func1('丁滿');

// Task 2
function func2() { }