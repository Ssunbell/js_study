import sys
input = sys.stdin.readline

n, m = map(int, input().split())
r, c, d = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(n)]

x, y = r, c
cnt = 0

dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]

while True:
    if arr[x][y] == 0:
        arr[x][y] = -1
        cnt += 1
    move = False
    for i in range(4):
        x0 = x + dx[(d+3-i)%4]
        y0 = y + dy[(d+3-i)%4]
        if arr[x0][y0] == 0:
            x, y = x0, y0
            d = (d+3-i) % 4
            move = True
            break
    if move == True:
        continue
    else:
        x0 = x + dx[(d+2)%4]
        y0 = y + dy[(d+2)%4]
        if arr[x0][y0] != 1:
            x, y = x0, y0
        else:
            break

print(cnt)