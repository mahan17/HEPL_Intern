import random
import hashlib

def generate_permutation(key, n):
    seed = int(hashlib.sha256(key.encode()).hexdigest(), 16)
    random.seed(seed)
    perm = list(range(n))
    random.shuffle(perm)
    return perm

def encrypt(data, key, chunk_size=4):
    chunks = [data[i:i+chunk_size] for i in range(0, len(data), chunk_size)]
    perm = generate_permutation(key, len(chunks))

    shuffled_chunks = [chunks[i] for i in perm]

    # 🔍 Print shuffled data BEFORE encryption
    # print("Shuffled chunks:", shuffled_chunks)
    print("Shuffled data:", ''.join(shuffled_chunks))

    encrypted = ''.join(shuffled_chunks)
    return encrypted

msg = "HELLO_THIS_IS_SECRET"
key = "mykey123"

enc = encrypt(msg, key)
# dec = decrypt(enc, key)

# print(enc)
# print(dec)
