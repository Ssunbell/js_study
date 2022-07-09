import sys

input = lambda : sys.stdin.readline().strip()

n = int(input())
graph = [list(input()) for _ in range(n)]

def dfs(r, c):
    if r < 0 or c < 0 or r > n or c > n:
        return
    
