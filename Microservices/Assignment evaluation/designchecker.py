import google.generativeai as genai
import os

GEMINI_API_KEY = "AIzaSyCNOLb0bhSbtMjtSiG5bfQNbjuWYJpCaMY"

genai.configure(api_key=GEMINI_API_KEY)

def check_design(design_type, image_path_or_url):
    prompt = f"""
    You are an expert design evaluator.  
    Analyze the given {design_type} based on strict **design principles** and **rate it out of 10**.

    **Evaluation Criteria (Strictly Follow This):**
    1. **Relevance & Context (3 Marks):** Does the design align with its purpose (e.g., logo represents the brand)?
    2. **Visual Aesthetics (2 Marks):** Are colors, fonts, and layout visually appealing?
    3. **Readability & Clarity (2 Marks):** Is text legible, and does the design convey the intended message?
    4. **Creativity & Originality (2 Marks):** Is the design unique and innovative?
    5. **Technical Quality (1 Mark):** Is the resolution and quality of elements high?

    **Strict Rating System:**
    - **10/10** → Perfect: No mistakes, well-balanced, relevant, high quality.
    - **7-9/10** → Good but has minor issues.
    - **4-6/10** → Average: Contains noticeable issues.
    - **1-3/10** → Poor: Weak relevance, bad structure.
    - **0/10** → Completely inappropriate or unreadable.

    **Strict Rule:** Do NOT give 10/10 unless the design is **perfect in purpose, readability, and aesthetics**.

    **Here is the user's design for review:**
    **Design Type: {design_type}**  
    **Image Path/URL: {image_path_or_url}**
    
    **🔹 Score:** (X/10)  
    **🔹 Issues Found (if any) & Suggested Improvements:**  
    """
    
    model = genai.GenerativeModel("gemini-1.5-pro")  
    response = model.generate_content(prompt)
    
    return response.text 

def main():
    print("🔹 Design Evaluation System 🔹")

    print("\nChoose a design type: Logo, Poster, UI, Banner, Business Card")
    design_type = input("Enter the design type: ").strip().title()

    image_input = input("Enter the image file path, folder path, or image URL: ").strip()

    # If input is a folder, list images
    if os.path.isdir(image_input):
        images = [os.path.join(image_input, f) for f in os.listdir(image_input) if f.lower().endswith(('.png', '.jpg', '.jpeg'))]
        if not images:
            print("No image files found in the folder.")
            return
        print(f"Found {len(images)} images. Evaluating the first one: {images[0]}")
        image_input = images[0]  # Evaluate first image

    print("\n🔹 Evaluating Your Design with Gemini 1.5 Pro...\n")
    result = check_design(design_type, image_input)

    print("🔹 Gemini AI Evaluation:\n")
    print(result)

if __name__ == "__main__":
    main()
