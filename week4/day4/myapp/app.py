from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__)
user = 'root'
password_encoded = 'navya%40123%24'
host = '127.0.0.1'
db_name = 'myapp_db'

app.config['SQLALCHEMY_DATABASE_URI'] = f"mysql+pymysql://{user}:{password_encoded}@{host}:3306/{db_name}"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
migrate = Migrate(app, db)

user_channel = db.Table(
    'user_channel',
    db.Column('user_id', db.Integer, db.ForeignKey('user.id')),
    db.Column('channel_id', db.Integer, db.ForeignKey('channel.id'))
)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20))
    following = db.relationship('Channel', secondary=user_channel, backref='followers')

    def __repr__(self):
        return f'<User: {self.name}>'

class Channel(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20))
    date_created = db.Column(db.DateTime)

    def __repr__(self):
        return f'<Channel: {self.name}>'
