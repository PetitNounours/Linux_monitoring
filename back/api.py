import os
import subprocess
import sys
import json
import requests
import re
from bs4 import BeautifulSoup
from flask import Flask, request, render_template, jsonify
from flask.ext.cors import CORS, cross_origin

ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'html'])
UPLOAD_FOLDER = os.path.abspath('files')
OUTPUT_FOLDER = os.path.abspath('front/public')

# app = Flask(__name__, template_folder=OUTPUT_FOLDER, static_folder=OUTPUT_FOLDER)
app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/")
def main():
    return "Coucou les petits loups !"

@app.route("/api/cmdps", methods=['GET'])
@cross_origin()
def cmdps():
    # data = subprocess.check_output(['ps','-aux']) # exemple sans pipe
    # data = subprocess.check_output(['df']) # exemple sans pipe
    ##### exemple avec pipe #####
    ps = subprocess.Popen(('ps', '-aux'), stdout=subprocess.PIPE)
    data = subprocess.check_output(('head', '-n', '5'), stdin=ps.stdout)
    #############################
    return data

@app.route("/api/cmddf", methods=['GET'])
@cross_origin()
def cmddf():
    # data = subprocess.check_output(['ps','-aux']) # exemple sans pipe
    data = subprocess.check_output(['df']) # exemple sans pipe
    return data

@app.route("/api/chill", methods=['GET'])
@cross_origin()
def chill():
    # url = "http://www.commitstrip.com/fr/2017/05/09/which-is-worse/?"
    url = "https://danstonchat.com/random.html"
    test = requests.get(url).text
    parsed_html = BeautifulSoup(test, 'html.parser')
    truc = parsed_html.find('div', re.compile('^item item'))  # --> OK
    # truc = parsed_html.find_all('div', 'item-listing')
    truc2 = str(truc.find('a'))  # --> OK
    # return truc2  # --> KO
    return truc2

@app.route("/api/cmdnet", methods=['GET'])
@cross_origin()
def cmdnet():
    data = subprocess.check_output(['sudo','netstat','-lntp'])
    return data

@app.route("/api/cmdtop", methods=['GET'])
@cross_origin()
def cmdtop():
    # ps = subprocess.Popen(('ps', '-aux'), stdout=subprocess.PIPE)
    # data = subprocess.check_output(('head', '-n', '5'), stdin=ps.stdout)
    top = subprocess.Popen(('top','-b','-n','1'), stdout=subprocess.PIPE)
    data = subprocess.check_output(('head', '-n', '30'), stdin=top.stdout)
    return data

if __name__ == "__main__":
    app.run(debug=True, port=4000, host='0.0.0.0')
