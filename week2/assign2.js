// Task 1
// 1.建立角色的距離列表
// 2.比較角色之間的距離
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
    y: 4
}]

function func1(name) {
    // Exclude the picked character
    const others = characters.filter(character => character.name !== name);
    const pickedCharacter = characters.find(character => character.name === name);

    const distance = others.map(character => {
        let dx = 0;
        let dy = 0;
        let additionalDistance = 0;

        // X 判斷
        if (character.x < 0 && pickedCharacter.x > 0) {
            dx = Math.abs(pickedCharacter.x - character.x);
        } else if (character.x > 0 && pickedCharacter.x < 0) {
            dx = Math.abs(character.x) - pickedCharacter.x;
        } else if (character.x < 0 && pickedCharacter.x < 0) {
            dx = Math.abs(Math.abs(character.x) + pickedCharacter.x);
        } else {
            dx = Math.abs(character.x - pickedCharacter.x);
        }

        // Y 判斷
        if (character.y < 0 && pickedCharacter.y > 0) {
            dy = Math.abs(pickedCharacter.y - character.y);
        } else if (character.y > 0 && pickedCharacter.y < 0) {
            dy = Math.abs(character.y - pickedCharacter.y);
        } else if (character.y < 0 && pickedCharacter.y < 0) {
            dy = Math.abs(character.y) + pickedCharacter.y;
        } else {
            dy = Math.abs(character.y - pickedCharacter.y);
        }

        if (pickedCharacter.name === '弗利沙' || pickedCharacter.name === '丁滿') {
            if (character.name !== '丁滿' || character.name !== '弗利沙') {
                additionalDistance = 2;
            }
        }

        if (pickedCharacter.name === '辛巴' ||
            pickedCharacter.name === '特南克斯' ||
            pickedCharacter.name === '悟空' ||
            pickedCharacter.name === '貝吉塔') {
            if (character.name === '丁滿' || character.name === '弗利沙') {
                additionalDistance = 2;
            }
        }
        return {
            ...character,
            distance: dx + dy + additionalDistance
        };
    });

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
    return distance;
}

func1('辛巴');
func1('悟空');
func1('弗利沙');
func1('特南克斯');
func1('貝吉塔');
func1('丁滿');

// Task 2
function func2() { }
// Task 3 Find out the nth term in the sequence
let startNumber = 25;
const diffs = [-2, -3, 1, 2];

function func3(index) {
    let num = startNumber
    for (let i = 0; i < index; i++) {
        num += diffs[i % diffs.length];
    }
    console.log(`func3(${index});//print ${num}`);
}

func3(1);
func3(5);
func3(10);
func3(30);

// Task 4
function func4(sp, stat, n) {
    // 1. 對照 sp 跟 stat
    // 2. stat = 1 就排除 sp
    // 3. stat = 0 就檢查 sp
    // 4. 找出 n 跟 sp 最接近的數字
    // stat: convert string to number
    // 把資料整理起來再對比
    let carAvailable = stat.split("").map(Number);

    let carStatus = sp.map((sp, index) => {
        return {
            availableSpace: sp,
            carStatus: carAvailable[index]
        };
    });
    const availableCars = carStatus.filter(car => car.carStatus === 0);
    // Find the closest number to n
    const closest = availableCars.reduce((a, b) => {
        return Math.abs(b.availableSpace - n) < Math.abs(a.availableSpace - n) ? b : a;
    });
    // Get the index for the car
    const car = carStatus.findIndex(car => car.availableSpace === closest.availableSpace);
    console.log(`func4([${sp}],"${stat}, ${n}") // print ${car}`);
}
func4([3, 1, 5, 4, 3, 2], "101000", 2);
func4([1, 0, 5, 1, 3], "10100", 4);
func4([4, 6, 5, 8], "1000", 4);
