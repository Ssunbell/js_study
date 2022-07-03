import sys
input = sys.stdin.readline

n = int(input())
occupied = [tuple(map(int, input().split())) for _ in range(n)]
occupied.sort(key = lambda x: (x[1], x[0]))
cnt = 0

for i in range(len(occupied)):
    start, end = occupied[i][0], occupied[i][1]
    if i == 0:
        cnt += 1
        temp = end
    if i > 0 and start >= temp:
        cnt += 1
        temp = end

print(cnt)