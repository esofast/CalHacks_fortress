from flask import Flask, request
import pymongo
app = Flask(__name__)

client = pymongo.MongoClient("mongodb+srv://plextechOH:plsdonthackus@cluster0.yeneh.mongodb.net/?retryWrites=true&w=majority")
db = client["music"]


@app.route("/")
def hello_world():
    return "Hello World"

@app.route("/signUp", methods=["POST"])
def sign_up():
    users = db["users"]
    pwd = request.form["password"]
    username = request.form["username"]
    result = users.find_one({"username": username}, {"pwd":pwd})
    if result == {}:
        return False, 404
    users.insert_one({"pwd": pwd, "username": username, "songsListenedTo": []})
    return True, 200

@app.route("/login", methods=["POST"])
def sign_in():
    users = db["users"]
    pwd = request.form["password"]
    username = request.form["username"]
    result = users.find_one({"username": username}, {"pwd":pwd})
    if not result:
        return {'error': True}, 404
    return result, 200

@app.route("/addSong/<userId>/<songName>", methods=["PUT"])
def add_song(userId, songName):
    users = db["users"]
    users.update_one({"_id": userId}, {"$push": {"songsListenedTo": songName}})
    return {}, 200

if __name__ == '__main__':
    app.run(host='localhost', debug=True, port=5001)
