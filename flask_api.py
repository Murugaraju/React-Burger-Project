from flask import Flask
from flask_cors import CORS
import time
import json
app = Flask(__name__)
CORS(app)

DEBUG=True
@app.route('/api/inventory')
def hello():
	
    # time.sleep(10)
    return json.dumps([{"fruit":"apple"}])
@app.route('/api/dashboard')
def hello2():
    return json.dumps({'total':25,'used':15,'available':10})
if __name__ == '__main__':
    app.run(port='4300',debug=True)