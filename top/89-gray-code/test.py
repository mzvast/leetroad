
dp = [0]
for i in range(5):
    dp = dp + [x | 1 << i for x in reversed(dp)]
    print(dp)
# print(dp)
