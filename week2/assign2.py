# Task 1

characters = [
    {"name":"悟空", "x": 0, "y": 0},
    {"name":"特南克斯", "x": 1, "y": -2},
    {"name":"弗利沙", "x": 4, "y": -1},
    {"name":"貝吉塔", "x": -4, "y": -1},
    {"name":"辛巴", "x": -3, "y": 3},
    {"name":"丁滿", "x": -1, "y": 4}
]

def func1(name):
    target_char = None

    for char in characters:
        if char["name"] == name:
            target_char = char.get("name")
            break
    print(target_char)

    # How to get "Characters" in the function?
    # Calculate the picked character's distance with others

func1("辛巴") # print 最遠弗利沙；最近丁滿、貝吉塔
#func1("悟空") # print 最遠丁滿、弗利沙；最近特南克斯
#func1("弗利沙") # print 最遠辛巴，最近特南克斯
#func1("特南克斯") # print 最遠丁滿，最近悟空
