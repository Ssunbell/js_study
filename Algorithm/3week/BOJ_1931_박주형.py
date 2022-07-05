import sys
input = sys.stdin.readline
n = int(input())
times = []
result = []
end = 0
for _ in range(n):
    i = list(map(int, input().split()))
    times.append(i)

times = sorted(times, key = lambda x: (x[1], x[0]))
for time in times:
    if end <= time[0]:
        end = time[1]
        result.append(time)

print(len(result))