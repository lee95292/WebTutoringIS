import base64
user_id = b"nimda" # 이부분에 admin && nimda를 넣으면 됨

for i in range(20):
    user_id = base64.b64encode(user_id)

user_id = user_id.decode("utf-8")

intab = "12345678"
outtab = "!@$^&*()"
transtab = user_id.maketrans(intab, outtab)

print(user_id.translate(transtab))