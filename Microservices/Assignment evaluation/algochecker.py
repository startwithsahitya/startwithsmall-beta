import google.generativeai as genai


GEMINI_API_KEY = "AIzaSyC1Kt-SfoX97HIGuUG_-Oh1BbgduPVe56w"
genai.configure(api_key=GEMINI_API_KEY)

def get_algorithm_input():
    """Ask the user to input the algorithm topic and the algorithm itself."""
    topic = input("Enter the topic of the algorithm (e.g., Sorting, Searching, Graphs): ")
    print("\nNow enter the full algorithm description (steps or code). Type 'END' when done:\n")
    
    algorithm_lines = []
    while True:
        line = input()
        if line.strip().upper() == "END":
            break
        algorithm_lines.append(line)
    
    algorithm_text = "\n".join(algorithm_lines)
    return topic, algorithm_text

def evaluate_algorithm(language, topic, algorithm):
    """Sends the algorithm for evaluation with strict grading."""
    model = genai.GenerativeModel("gemini-1.5-pro")

    prompt = f"""
    You are an expert in algorithm analysis using Gemini 1.5 Pro.
    Analyze the following {language} algorithm on the topic **{topic}** and **rate it strictly out of 10**.

    **Evaluation Criteria (Strict Rating):**
    1. **Correctness (3 Marks):** Produces the expected output in all cases, handles edge cases.
    2. **Time Complexity (2 Marks):** Optimized and avoids unnecessary computations.
    3. **Space Complexity (2 Marks):** Efficient memory usage, avoids redundancy.
    4. **Precision & Clarity (2 Marks):** Well-structured, avoids ambiguity.
    5. **Scalability (1 Mark):** Handles large inputs efficiently.

    **Strict Rating System:**
    - **10/10** → Absolutely perfect, no improvements needed.
    - **7-9/10** → Good but has minor optimizations possible.
    - **4-6/10** → Functional but has issues needing improvement.
    - **1-3/10** → Major flaws, inefficient or incorrect.

    **Algorithm Provided:**
    {algorithm}

    Provide a detailed evaluation, list problems if any, and a final rating.
    """

    response = model.generate_content(prompt)
    return response.text


topic, algorithm_text = get_algorithm_input()


if algorithm_text.strip():
    print("\n--- Algorithm Evaluation ---\n")
    print(evaluate_algorithm("Algorithm", topic, algorithm_text))
else:
    print("Error: No algorithm provided!")

