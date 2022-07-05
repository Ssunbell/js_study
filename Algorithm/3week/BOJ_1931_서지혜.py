#시작시간으로 먼저 정렬을 해준 후에, 종료 시간을 기준으로 정렬

n = int(input())
room = []

for i in range(n):
    a, b = map(int, input().split())
    room.append([a, b])

room.sort(key = lambda x: x[0])
room.sort(key = lambda x: x[1])

cnt = 1
end = room[0][1]
for i in range(1, n):
    if room[i][0] >= end:
        cnt += 1
        end = room[i][1]

print(cnt)