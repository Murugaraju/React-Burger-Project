from flask import Flask
from flask_cors import CORS
import time
import json
app = Flask(__name__)
CORS(app)

@app.route('/api/inventory')
def hello():
	
    # time.sleep(10)
    return json.dumps([{"fruit":"apple"}])

if __name__ == '__main__':
    app.run(port='4300')