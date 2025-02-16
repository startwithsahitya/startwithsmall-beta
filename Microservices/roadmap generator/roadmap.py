import google.generativeai as genai
import json
import re
import uuid

# Configure Gemini API Key
GEMINI_API_KEY = "AIzaSyCQDuaO1A3gNMmVqMYtrJfir3Vd2bLvtSQ"  # Replace with your Gemini API Key
genai.configure(api_key=GEMINI_API_KEY)

# Function to extract JSON from Gemini response
def extract_json(text):
    json_match = re.search(r"\{.*\}", text, re.DOTALL)
    if json_match:
        try:
            return json.loads(json_match.group())
        except json.JSONDecodeError:
            return {"error": "Extracted JSON is invalid"}
    return {"error": "No JSON found in Gemini response"}

# Function to generate a roadmap using Gemini AI
def generate_roadmap(topic):
    prompt = f"""
    Create a structured roadmap for learning {topic} in **valid JSON format**.
    
    **Follow this exact structure:**
    {{
        "topic": "{topic}",
        "introduction": "Brief introduction to {topic}.",
        "prerequisites": ["List prerequisites here."],
        "steps": [
            {{"step": 1, "title": "Step Title", "description": "Step description."}},
            {{"step": 2, "title": "Step Title", "description": "Step description."}}
        ],
        "resources": ["List useful books, websites, or tools."],
        "final_goals": "What the learner should achieve at the end."
    }}

    **Output only JSON** without explanations.
    """

    model = genai.GenerativeModel("gemini-1.5-pro")  
    response = model.generate_content(prompt)

    if response and hasattr(response, 'text'):
        return extract_json(response.text)
    else:
        return {"error": "Failed to generate roadmap"}

# Function to generate Excalidraw JSON format
def generate_excalidraw_json(roadmap):
    elements = []
    y_position = 100
    step_height = 200
    box_width = 300
    box_height = 100

    # Create nodes with yellow boxes
    nodes = [
        {"id": str(uuid.uuid4()), "text": f"📌 {roadmap['topic']}", "x": 500, "y": 50},
        {"id": str(uuid.uuid4()), "text": "Introduction", "x": 500, "y": y_position},
        {"id": str(uuid.uuid4()), "text": "Prerequisites", "x": 500, "y": y_position + step_height},
    ]

    for step in roadmap["steps"]:
        nodes.append({
            "id": str(uuid.uuid4()),
            "text": f"Step {step['step']}: {step['title']}",
            "x": 500,
            "y": y_position + (step['step'] + 1) * step_height
        })

    nodes.append({"id": str(uuid.uuid4()), "text": "Final Goals", "x": 500, "y": y_position + (len(roadmap["steps"]) + 2) * step_height})

    # Create rectangular yellow boxes for each step
    for node in nodes:
        elements.append({
            "type": "rectangle",
            "id": node["id"],
            "x": node["x"],
            "y": node["y"],
            "width": box_width,
            "height": box_height,
            "strokeColor": "black",
            "backgroundColor": "yellow",  # Set background color to yellow
            "strokeWidth": 2,
            "groupIds": [],
            
        })

        # Add text inside the boxes
        elements.append({
            "type": "text",
            "id": str(uuid.uuid4()),
            "x": node["x"] + 20,
            "y": node["y"] + 40,  # Adjust Y for better centering
            "width": 260,
            "height": 50,
            "text": node["text"],
            "strokeColor": "black",  # Text should be dark black
            "backgroundColor": "transparent",
            "fontSize": 20,
            "groupIds": []
        })

    # Create arrows connecting boxes
    for i in range(len(nodes) - 1):
        elements.append({
            "type": "arrow",
            "id": str(uuid.uuid4()),
            "x": nodes[i]["x"] + box_width // 2,
            "y": nodes[i]["y"] + box_height,
            "width": 0,
            "height": step_height - box_height,
            "points": [[0, 0], [0, step_height - box_height]],
            "startArrowhead": None,
            "endArrowhead": "arrow",
            "strokeColor": "black",
            "strokeWidth": 2,
            "groupIds": []
        })

    return {"type": "excalidraw", "version": 2, "source": "custom_script", "elements": elements}

# Get user input and generate roadmap
topic = input("Enter a topic for the roadmap: ")
roadmap = generate_roadmap(topic)

if "error" not in roadmap:
    excalidraw_data = generate_excalidraw_json(roadmap)
    with open("roadmap_excalidraw.json", "w") as file:
        json.dump(excalidraw_data, file, indent=4)
    
    print("\n✅ Excalidraw JSON saved! Open it on https://excalidraw.com/ and import the file.")
else:
    print("\n❌ Error:", roadmap["error"])
