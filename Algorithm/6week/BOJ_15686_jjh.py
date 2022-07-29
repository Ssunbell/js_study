import sys
input = sys.stdin.readline
n,chick = map(int,input().split())
box = [list(map(int,input().split())) for _ in range(n)]

house = []
chick_house = []


for i in range(n):
    for j in range(n):
        if box[i][j] == 1:
            house.append((i,j))
        elif box[i][j] == 2:
            chick_house.append((i,j))

from itertools import combinations
result = 10**6
for chi in combinations(chick_house, chick):
    temp = 0
    for h in house:
        chi_len = 105   # maximum
        for j in range(chick):
            chi_len = min(chi_len, abs(h[0] - chi[j][0]) + abs(h[1] - chi[j][1]))
        temp += chi_len
    result = min(result, temp)

print(result)