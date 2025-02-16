from flask import Flask, jsonify
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)

@app.route('/get-data')
def get_data():
    try:
        # Database connection
        db = mysql.connector.connect(
            host="127.0.0.1",
            user="root",
            password="Sahitya@2005",
            database="startwithsmalllite"
        )
        
        cursor = db.cursor(dictionary=True)
        
        # Fetch the first row containing all required fields
        cursor.execute("""
            SELECT 
                case_code, 
                companyname, 
                generaldescription, 
                jobdescription 
            FROM design_case_study 
            LIMIT 1
        """)
        
        row = cursor.fetchone()
        
        if not row:
            return jsonify({
                "status": "error",
                "message": "No data found in database"
            }), 404

        return jsonify({
            "status": "success",
            "data": {
                "case_code": row['case_code'],
                "companyname": row['companyname'],
                "generaldescription": row['generaldescription'],
                "jobdescription": row['jobdescription']
            }
        })

    except Exception as e:
        return jsonify({
            "status": "error",
            "message": str(e)
        }), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)