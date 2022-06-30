N, r, c = map(int,input().split())
r1, c1 = int(r), int(c)
n, m = 0, 0
quadrant = 1
while r > 0:
    a, b1 = divmod(r, 2)
    r = a
    n += 1
while c > 0:
    a, b2 = divmod(c, 2)
    c = a
    m += 1
if b1 == 0 and b2 == 0:
    quadrant = 4
elif b1 == 0:
    quadrant = 2
elif b2 == 0:
    quadrant = 3
    
print(n,m, quadrant)
answer = []
cnt = 0
N = max(n,m)
print(N)
# def makeZ(N):
#     global cnt
#     if N == 1:
#         return [[0,1], [2,3]]
    
#     Z = makeZ(N-1)
#     arr = []
#     cnt += 2

#     for z in Z:
#         arr.append(z + list(map(lambda x: x + 2**cnt ,z)))
#     for z in Z:
#         arr.append(list(map(lambda x: x + (2 * 2**cnt) ,z)) + list(map(lambda x: x + (3 * 2**cnt) ,z)))
        
#     return arr

# print(makeZ(N)[r1][c1])

# N = 2  0 - 3    2^0  ~  2^2 - 1  (0,0) (0,2^0) (2^0,0) (2^0,2^0)
# N = 3  4 - 15   2^2  ~  2^4 - 1  (0,0) (0,2^1) (2^1,0) (2^1,2^1)
# N = 4  16 - 63  2^4  ~  2^6 - 1  (0,0) (0,2^2) (2^2,0) (2^2,2^2)
# N = 5  64 - 255 2^6  ~  2^8 - 1  (0,0) (0,2^3) (2^3,0) (2^3,2^3)


 



