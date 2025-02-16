import google.generativeai as genai
import mysql.connector
import random

# Configure Gemini API
genai.configure(api_key='AIzaSyB_xdHYRlYNissCCZ7704jWDQ6PMi11l9I')

# Initialize the model
model = genai.GenerativeModel('gemini-pro')

# Function to generate sequential case code
def generate_case_code():
    # Read the last used case code from a file
    try:
        with open("GenerateAssignment\design\last_case_code.txt", "r") as file:
            last_code = int(file.read().strip())
    except FileNotFoundError:
        # If the file doesn't exist, start from 001
        last_code = 0

    # Increment the case code by 1
    new_code = last_code + 1

    # Save the new case code to the file
    with open("GenerateAssignment\design\last_case_code.txt", "w") as file:
        file.write(str(new_code))

    # Format the case code as DESXXX
    return f"DES{new_code:03}"

# Function to generate company name
def generate_company_name():
    # Explicitly ask for only one company name
    response = model.generate_content("Generate, only one, company name, that sounds like the company is a design company, with maximum 2 words.")
    # Extract the first line (in case multiple lines are returned)
    company_name = response.text.strip().split('\n')[0]
    return company_name

# Function to generate company description
def generate_company_description():
    response = model.generate_content("Generate a company description, the description should throw light to the company's design background, in maximum 70 words.")
    return response.text.strip()

# Function to generate job description (problem statement)
def generate_job_description():
    response = model.generate_content("Generate a case study that equates to a problem statement which is based on design, such as creating a logo or brand identity or web design for the company based on some color, font and design parameters in maximum 100 words. Do not give any headings.")
    return response.text.strip()

# Function to store data in MySQL database
def store_in_database(case_code, company_name, company_description, case_study):
    try:
        # Connect to MySQL database
        conn = mysql.connector.connect(
            host="localhost",
            user="root",  # Replace with your MySQL username
            password="Indman@4444",  # Replace with your MySQL password
            database="quasar_assignments_db"
        )
        cursor = conn.cursor()

        # Insert data into the table
        sql = "INSERT INTO design_assignments (case_code, company_name, company_description, case_study) VALUES (%s, %s, %s, %s)"
        val = (case_code, company_name, company_description, case_study)
        cursor.execute(sql, val)

        # Commit the transaction
        conn.commit()

        # Close the connection
        cursor.close()
        conn.close()

        print("Data stored successfully in the database.")
    except mysql.connector.Error as err:
        print(f"Error: {err}")

# Main function to generate and store data
def main():
    # Generate data
    case_code = generate_case_code()
    company_name = generate_company_name()
    company_description = generate_company_description()
    case_study = generate_job_description()

    # Print generated data
    print(f"Case Code: {case_code}")
    print(f"Company Name: {company_name}")
    print(f"Company Description: {company_description}")
    print(f"Case Study: {case_study}")

    # Store data in MySQL database
    store_in_database(case_code, company_name, company_description, case_study)

if __name__ == "__main__":
    main()