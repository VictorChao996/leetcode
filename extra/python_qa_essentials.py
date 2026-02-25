"""
Day 1 Extra - QA/SDET 實戰 Python 語法練習
涵蓋：字串處理、JSON 操作、型別轉換、例外處理、File I/O、正則表達式
執行方式: python python_qa_essentials.py
"""

# ============================================================
# Q1. 字串方法 — 解析 Log
# 給定一段 server log，用字串方法提取資訊
# ============================================================
log = "2024-01-15 14:23:05 [ERROR] /api/users/123 - Connection timeout (retries=3)"

# (a) 用 split() 取出日期和時間
#     預期: date = "2024-01-15", time = "14:23:05"
# TODO

# (b) 用 split() 搭配適當分隔符號取出 API path
#     預期: "/api/users/123"
# TODO

# (c) 用 strip() + split("=") 取出 retries 的數值（字串即可）
#     提示: 先找到 "retries=3)" 再處理
#     預期: "3"
# TODO

# (d) 用 replace() 將 log level 從 [ERROR] 改成 [WARN]
#     預期: "2024-01-15 14:23:05 [WARN] /api/users/123 - Connection timeout (retries=3)"
# TODO

# (e) 用 startswith() 和 endswith() 判斷：
#     - 這行 log 是不是 2024 年的？
#     - 這行 log 是不是以 ")" 結尾？
# TODO


# ============================================================
# Q2. 字串方法 — 資料清理與驗證
# QA 常需要清理測試資料、驗證格式
# ============================================================

# (a) 清理使用者輸入：去除前後空白，統一轉小寫
raw_inputs = ["  Alice ", "BOB", " Charlie  ", "  diana"]
#     預期: ["alice", "bob", "charlie", "diana"]
# TODO

# (b) 驗證 email 格式（簡易版）：用字串方法檢查是否包含 "@" 且 "@" 後面有 "."
emails = ["user@example.com", "invalid-email", "bad@", "ok@test.org"]
#     預期: [True, False, False, True]
#     提示: 用 in, find(), rfind() 或 split("@") 搭配判斷
# TODO

# (c) 用 join() 將 list 組成 CSV 格式的一行
fields = ["Alice", "25", "Engineer", "Taipei"]
#     預期: "Alice,25,Engineer,Taipei"
# TODO

# (d) 用 split() 解析 CSV 行，再用 strip() 清理每個欄位
csv_line = " name , age , role , city "
#     預期: ["name", "age", "role", "city"]
# TODO

# (e) 用 isdigit() 從混合資料中篩選出純數字字串
mixed = ["123", "45.6", "abc", "789", "12ab", "0"]
#     預期: ["123", "789", "0"]
# TODO


# ============================================================
# Q3. 字串格式化 — 組裝測試資料與報告
# ============================================================

# (a) 用 f-string 組裝 API URL
base_url = "https://api.example.com"
version = "v2"
endpoint = "users"
user_id = 42
#     預期: "https://api.example.com/v2/users/42"
# TODO

# (b) 用 f-string 格式化測試報告摘要
total, passed, failed = 150, 142, 8
#     預期: "Test Results: 142/150 passed (94.67% pass rate)"
#     提示: f-string 裡面可以用 :.2f 控制小數位數
# TODO

# (c) 用 .format() 產生多筆測試帳號（用迴圈）
#     預期: ["user_001@test.com", "user_002@test.com", ..., "user_005@test.com"]
#     提示: "user_{:03d}@test.com".format(i)
# TODO

# (d) 用 f-string 對齊輸出（左對齊、右對齊）
items = [("GET /api/users", 200, "OK"), ("POST /api/login", 401, "Unauthorized"), ("DELETE /api/item/5", 204, "No Content")]
#     預期每行格式: "GET /api/users       | 200 | OK"
#     提示: f"{val:<20}" 左對齊 20 字元, f"{val:>5}" 右對齊 5 字元
# TODO


# ============================================================
# Q4. JSON 處理 — API 測試必備
# import json 是標準庫，不需 pip install
# ============================================================
import json

# (a) 將 JSON 字串解析成 Python dict
json_str = '{"status": 200, "data": {"user": "Alice", "age": 25}, "errors": null}'
#     解析後取出 user 名字
#     預期: "Alice"
# TODO

# (b) 將 Python dict 轉成 JSON 字串（美化輸出）
test_payload = {
    "username": "testuser",
    "password": "secret123",
    "remember": True
}
#     預期: 格式化的 JSON 字串（indent=2）
# TODO

# (c) 驗證 API response：檢查必要欄位是否存在
response = {"status": 200, "data": {"id": 1, "name": "Alice"}, "timestamp": "2024-01-15"}
required_fields = ["status", "data", "timestamp"]
#     用 all() + list comprehension 一行驗證
#     預期: True
# TODO

# (d) 從 JSON array 中篩選符合條件的資料
users_json = '''[
    {"name": "Alice", "active": true, "role": "admin"},
    {"name": "Bob", "active": false, "role": "user"},
    {"name": "Charlie", "active": true, "role": "user"},
    {"name": "Diana", "active": true, "role": "admin"}
]'''
#     篩選出 active=True 且 role="admin" 的使用者名字
#     預期: ["Alice", "Diana"]
# TODO

# (e) 安全地存取巢狀 JSON（避免 KeyError）
api_response = {"data": {"users": [{"name": "Alice"}]}}
#     安全取出第一個 user 的 name，如果任何 key 不存在就回傳 "N/A"
#     提示: 用 .get() 鏈式呼叫
# TODO


# ============================================================
# Q5. 型別轉換與檢查
# 驗證 API 回傳值型別、處理混合型別資料
# ============================================================

# (a) 將字串 list 轉成整數 list（用 map + list）
str_nums = ["10", "20", "30", "40"]
#     預期: [10, 20, 30, 40]
# TODO

# (b) 混合型別安全轉換：能轉 int 就轉，不能就保留原值
mixed_data = ["42", "hello", "100", "3.14", "0"]
#     預期: [42, "hello", 100, "3.14", 0]
#     提示: 用 isdigit() 判斷或 try/except
# TODO

# (c) 用 isinstance() 分類 list 中的元素
values = [1, "hello", 3.14, True, [1, 2], {"a": 1}, None, 42]
#     統計各型別的數量，回傳 dict
#     預期: {"int": 3, "str": 1, "float": 1, "bool": 1, "list": 1, "dict": 1, "NoneType": 1}
#     注意: isinstance(True, int) 是 True，所以要先檢查 bool
# TODO

# (d) 各種 falsy 值判斷：哪些值在 if 中會被視為 False？
falsy_candidates = [0, "", [], {}, None, False, 0.0, set(), "0", " ", [0]]
#     用 list comprehension 篩選出 falsy 的值
#     預期: [0, "", [], {}, None, False, 0.0, set()]
# TODO


# ============================================================
# Q6. Exception 處理 — 測試腳本穩定性
# QA 自動化腳本必須能優雅處理錯誤
# ============================================================

# (a) 用 try/except 安全地將字串轉成數字，失敗時回傳預設值
def safe_int(value, default=0):
    """將 value 轉成 int，失敗時回傳 default"""
    # TODO
    pass

# 驗證:
print(safe_int("42"))       # → 42
print(safe_int("abc"))      # → 0
print(safe_int("", -1))     # → -1

# (b) 用 try/except/finally 模擬 API 呼叫的錯誤處理
def mock_api_call(url):
    """模擬 API 呼叫，根據 url 決定成功或失敗"""
    if "error" in url:
        raise ConnectionError(f"Failed to connect: {url}")
    if "timeout" in url:
        raise TimeoutError(f"Request timeout: {url}")
    return {"status": 200, "data": "ok"}

# 寫一個函式呼叫 mock_api_call，處理所有可能的例外
# 成功時印出 response，失敗時印出錯誤訊息，最後都印出 "Request completed"
def call_api(url):
    # TODO
    pass

call_api("https://api.example.com/data")       # → 成功
call_api("https://api.example.com/error")       # → ConnectionError
call_api("https://api.example.com/timeout")     # → TimeoutError

# (c) 用 try/except 搭配 json.loads 安全解析 JSON
def safe_json_parse(json_string):
    """安全解析 JSON，失敗時回傳空 dict 並印出錯誤"""
    # TODO
    pass

# 驗證:
print(safe_json_parse('{"valid": true}'))        # → {'valid': True}
print(safe_json_parse('not json'))               # → {}
print(safe_json_parse(''))                        # → {}


# ============================================================
# Q7. File I/O — 讀取測試資料
# 使用 with + open 讀寫檔案
# ============================================================

# (a) 寫入一個測試資料檔案，然後讀取回來
# 先寫入：
test_data = """id,name,score
1,Alice,85
2,Bob,72
3,Charlie,95
"""

# 用 with open(..., "w") 寫入到 "test_data.csv"
# 再用 with open(..., "r") 讀取並解析成 list of dict
# 預期: [{"id": "1", "name": "Alice", "score": "85"}, ...]
# 提示: 第一行是 header，用 split(",") 搭配 zip
# TODO

# (b) 用 readlines() 讀取後過濾空行和註解行（# 開頭）
config_content = """# Server Config
host=localhost
port=8080

# Database
db_host=127.0.0.1
db_port=5432
"""
# 寫入 config_content 到 "test_config.txt"
# 讀取並解析成 dict（忽略空行和 # 開頭的行）
# 預期: {"host": "localhost", "port": "8080", "db_host": "127.0.0.1", "db_port": "5432"}
# TODO


# ============================================================
# Q8. 正則表達式基礎 — Pattern Matching
# import re 是標準庫，QA 驗證格式時常用
# ============================================================
import re

# (a) 用 re.findall() 從 log 中提取所有 IP 位址
log_text = """
2024-01-15 Server started on 192.168.1.100
2024-01-15 Client connected from 10.0.0.55
2024-01-15 Proxy forwarding to 172.16.0.1
2024-01-15 Invalid request from 999.999.999.999
"""
#     提取所有看起來像 IP 的字串（簡易版：數字.數字.數字.數字）
#     預期: ["192.168.1.100", "10.0.0.55", "172.16.0.1", "999.999.999.999"]
#     提示: r"\d+\.\d+\.\d+\.\d+"
# TODO

# (b) 用 re.search() 從 HTTP response header 中提取 status code
headers = "HTTP/1.1 404 Not Found\r\nContent-Type: text/html"
#     預期: "404"
# TODO

# (c) 用 re.sub() 將字串中的所有手機號碼遮罩
text = "Contact us at 0912-345-678 or 0987654321 for support"
#     預期: "Contact us at ****-***-*** or ********** for support"
#     提示: 把數字替換成 *，但保留 - 的位置
# TODO

# (d) 用 re.match() 驗證密碼格式
#     規則: 至少 8 字元、至少一個大寫、至少一個小寫、至少一個數字
def validate_password(pwd):
    """回傳 True 如果密碼符合規則"""
    # TODO（可以用多個 re.search 分別檢查）
    pass

# 驗證:
print(validate_password("Abc12345"))    # → True
print(validate_password("abc12345"))    # → False (沒大寫)
print(validate_password("SHORT1"))      # → False (不到 8 字元)
print(validate_password("NoDigits"))    # → False (沒數字)
