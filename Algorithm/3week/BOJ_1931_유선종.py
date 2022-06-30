import sys
from collections import deque

input = lambda : sys.stdin.readline().strip()
N = int(input())
conf = list(tuple(map(int, input().split())) for _ in range(N))
conf = deque(sorted(conf, key = lambda x: (x[1], x[0])))

cnt = 0
last_num = 0
for row in conf:
    if row[0] >= last_num:
        last_num = row[1]
        cnt += 1
print(cnt)