from flask import Flask, jsonify, request, render_template

from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'  # SQLite database file
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

class User(db.Model):
    phone = db.Column(db.String(20), primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    surname = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), nullable=True)
    address = db.Column(db.String(200), nullable=True)
    id_number = db.Column(db.String(50), nullable=True)

    def __repr__(self):
        return f'<User {self.name} {self.surname}>'

# Mock database
users = []

@app.route('/add-user', methods=['GET', 'POST'])
def add_user():
    if request.method == 'POST':
        # Here you would get data from the form and add it to the database
        users.append(request.form.to_dict())
        return jsonify({"success": True, "users": users})
    return render_template('add_user.html')

@app.route('/find-user', methods=['GET'])
def find_user():
    # Here you would get data from the request and find the user in the database
    username = request.args.get('username')
    found_users = [user for user in users if user['username'] == username]
    return jsonify({"success": True, "users": found_users})

@app.route('/print', methods=['GET'])
def print_users():
    # This would handle the print functionality
    return jsonify({"success": True, "users": users})

if __name__ == '__main__':
    with app.app_context():
        db.create_all()  # Create database tables
    app.run(debug=True)
