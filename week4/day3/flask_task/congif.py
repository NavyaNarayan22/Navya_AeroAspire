import os

class Config:
    SECRET_KEY = os.environ.get("SECRET_KEY", "dev-secret")
    SQLALCHEMY_DATABASE_URI = os.environ.get(
        "DATABASE_URL",
        "mysql+pymysql://root:navya%40123%24@localhost:3306/mydb"
    )
    SQLALCHEMY_TRACK_MODIFICATIONS = False
