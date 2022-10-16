from flask import Flask, request
import pymongo
app = Flask(__name__)
import json

client = pymongo.MongoClient("mongodb+srv://plextechOH:plsdonthackus@cluster0.yeneh.mongodb.net/?retryWrites=true&w=majority")
db = client["music"]

@app_after_request
def after_request(response):
    header = response.headers
    header['Access-Control-Allow-Credentials'] = True
    header['Access-Control-Allow-Origin'] = 'http://localhost:5001'
    header['Access-Control-Allow-Headers'] = '*'
    header['Access-Control-Allow-Methods'] = '*'
    header['Content-Type'] = 'text/json'
    return response


@app.route("/")
def hello_world():
    return "Hello World"

@app.route("/signup", methods=["POST"])
def sign_up():
    users = db["users"]
    print(f'Data is: {json.loads(request.data)}')
    data = json.loads(request.data)

    # print(request.__dict__)
    pwd = data["password"]
    username = data["username"]
    result = users.find_one({"username": username}, {"pwd":pwd})
    if result:
        return {'error': True}, 400
    users.insert_one({"pwd": pwd, "username": username, "songsListenedTo": []})
    return {'success': True}, 200

@app.route("/login", methods=["POST"])
def sign_in():
    users = db["users"]
    data = json.loads(request.data)
    pwd = data["password"]
    username = data["username"]
    result = users.find_one({"username": username}, {"pwd":pwd})
    if not result:
        return {'error': True}, 404
    result['_id'] = str(result['_id'])
    print(result)
    return result, 200

@app.route("/addSong/<userId>/<songName>", methods=["PUT"])
def add_song(userId, songName):
    users = db["users"]
    users.update_one({"_id": userId}, {"$push": {"songsListenedTo": songName}})
    return {}, 200

if __name__ == '__main__':
    app.run(host='localhost', debug=True, port=5001)
