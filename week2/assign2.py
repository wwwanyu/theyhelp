# Task 1

characters = [
    {"name":"悟空", "x": 0, "y": 0, "left": True},
    {"name":"特南克斯", "x": 1, "y": -2, "left": True},
    {"name":"弗利沙", "x": 4, "y": -1, "left": False},
    {"name":"貝吉塔", "x": -4, "y": -1, "left": True},
    {"name":"辛巴", "x": -3, "y": 3, "left": True},
    {"name":"丁滿", "x": -1, "y": 4, "left": False}
]

def func1(name):
    target_char = None

    for char in characters:
        if char["name"] == name:
            target_char = char
            break

    # Exclude target_chart from characters
    others=[]
    for character in characters:
        if character["name"]!=target_char["name"]:
            others.append(character)

    # Calculate distance with others
    for other in others:
        if other["x"] < 0 and target_char["x"] > 0:
            dx = abs(target_char["x"] - other["x"])
        elif other["x"] > 0 and target_char["x"] < 0:
            dx = abs(other["x"]) - target_char["x"]
        elif other["x"] < 0 and target_char["x"] < 0:
            dx = abs(abs(other["x"])+target_char["x"])
        else:
            dx = abs(other["x"] - target_char["x"])

        if other["y"] < 0 and target_char["y"] > 0:
            dy = abs(target_char["y"] - other["y"])
        elif other["y"] > 0 and target_char["y"] < 0:
            dy = abs(other["y"]) - target_char["y"]
        elif other["y"] < 0 and target_char["y"] < 0:
            dy = abs(other["y"])+target_char["y"]
        else:
            dy = abs(other["y"] - target_char["y"])

        if other["left"] != target_char["left"]:
            other["distance"] = dx + dy +2
        else:
            other["distance"] = dx + dy

    # Sorted and pick the farthest and nearest
    sorted_distance = sorted(others, key=lambda x:x["distance"], reverse=True)

    farthest = max(d["distance"] for d in sorted_distance)
    nearest = min(d["distance"] for d in sorted_distance)

    farthest_dicts = [d for d in sorted_distance if d["distance"] == farthest]
    nearest_dicts = [d for d in sorted_distance if d["distance"] == nearest]

    # farthest_names = [d["name"] for d in farthest_dicts]
    # nearest_names = [d["name"] for d in nearest_dicts]

    print(f"func1({name}) 最遠{', '.join(d['name'] for d in farthest_dicts)}；最近{'、'.join(d['name'] for d in nearest_dicts)}")

func1("辛巴") # print 最遠弗利沙；最近丁滿、貝吉塔
func1("悟空") # print 最遠丁滿、弗利沙；最近特南克斯
func1("弗利沙") # print 最遠辛巴，最近特南克斯
func1("特南克斯") # print 最遠丁滿，最近悟空
func1("貝吉塔")
func1("丁滿")