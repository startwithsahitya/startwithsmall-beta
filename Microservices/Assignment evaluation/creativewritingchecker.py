import google.generativeai as genai

GEMINI_API_KEY = "AIzaSyCNOLb0bhSbtMjtSiG5bfQNbjuWYJpCaMY"

genai.configure(api_key=GEMINI_API_KEY)

def check_creative_writing(writing_type, topic, content):
    prompt = f"""
    You are a highly skilled creative writing evaluator.  
    Analyze the following piece based on **strict grading criteria** and **rate it out of 10**.

    **Writing Type:** {writing_type}  
    **Topic:** {topic}  

    **Evaluation Criteria (Strictly Follow This):**
    1. **Relevance & Context (3 Marks):** Does the content stay on topic and provide meaningful insights?
    2. **Accuracy of Facts (2 Marks):** Are the facts correct (for biography & newspaper reports)?
    3. **Structure & Formatting (2 Marks):** Is it well-organized according to the writing type?
    4. **Grammar & Spelling (2 Marks):** Are there any grammatical or spelling mistakes?
    5. **Creativity & Clarity (1 Mark):** Is it engaging and easy to read?

    **Strict Rating System:**
    - **10/10** → Perfect: No mistakes, well-structured, factual, engaging.
    - **7-9/10** → Good but has minor errors in formatting, facts, or clarity.
    - **4-6/10** → Average: Contains noticeable issues.
    - **1-3/10** → Poor: Lacks structure, has many errors.
    - **0/10** → Completely off-topic or unreadable.

    **Strict Rule:** Do NOT give 10/10 unless the content is **perfect in facts, structure, and language**.

    **Here is the user's creative writing submission:**
    **Title: {topic}**
    ```
    {content[:2000]}  # Limiting to 2000 chars for efficient processing
    ```

    **🔹 Score:** (X/10)  
    **🔹 Issues Found (if any) & Suggested Improvements:**  
    """
    
    model = genai.GenerativeModel("gemini-1.5-pro")  
    response = model.generate_content(prompt)
    
    return response.text 

def main():
    print("🔹 Creative Writing Evaluation 🔹")

    print("\nChoose a writing type: Newspaper Report, Biography, Guest Lecture")
    writing_type = input("Enter the writing type: ").strip().title()

    topic = input("Enter the topic: ").strip()

    print("\nEnter your content (type 'exit' on a new line and press Enter to finish):")
    user_content = []
    
    while True:
        line = input()
        if line.strip().lower() == "exit": 
            break
        user_content.append(line)

    full_content = "\n".join(user_content) 

    print("\n🔹 Evaluating Your Creative Writing with Gemini 1.5 Pro...\n")
    result = check_creative_writing(writing_type, topic, full_content)

    print("🔹 Gemini AI Evaluation:\n")
    print(result)

if __name__ == "__main__":
    main()
