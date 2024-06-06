import psycopg2
from psycopg2 import sql 

DB_NAME = 'safe_harbour_test'
DB_USER = 'admin'
DB_PASSWORD = 'root'
DB_HOST='10.0.0.251'
DB_PORT='5432'

class DBManager:
    def __init__(self):
        self.db_name = DB_NAME,
        self.user_name = DB_USER,
        self.password = DB_PASSWORD,
        self.host = DB_HOST,
        self.port = DB_PORT, 

        self.conn = None
        self.connect()

    def connect(self):
        try:
            self.conn = psycopg2.connect(
                dbname=DB_NAME,
                user=DB_USER,
                password=DB_PASSWORD,
                host=DB_HOST,
                port=DB_PORT
            )

            print('Database Connect Successful')
        except Exception as e:
            print(f'Error connecting to the database: {e}')

    
    def close(self):
        if self.conn:
            self.conn.close()
            print('Database Connection Closed')

    
    def create_user(self, id: str, username: str, email:str, password:str):
        try:
            with self.conn.cursor() as cur:
                cur.execute(
                    """
                        INSERT INTO Users (user_id, username, email, password)
                        VALUES (%s, %s, %s, %s)
                        RETURNING user_id;
                    """,
                    (id, username, email, password)
                )
                self.conn.commit()
                user_id = cur.fetchone()[0]
                print(f"User created with id: {user_id}")
        except Exception as e:
            print(f"Error Creating User: {e}")
            self.conn.rollback()
