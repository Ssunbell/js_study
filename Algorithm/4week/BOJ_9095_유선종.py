t = int(input())
list_num = [int(input()) for _ in range(t)]
def dfs():
    if sum(tmp) == n:
        result.append(tuple(tmp[:]))
        return
    elif sum(tmp) > n:
        return
    
    for i in range(1, 4):
        tmp.append(i)
        dfs()
        tmp.pop()

for i in list_num:
    n = i
    tmp = []
    result = []
    dfs()
    print(len(result))