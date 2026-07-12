from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# -------------------------
# Main Routes
# -------------------------

@app.route("/")
def boot():
    return render_template("index.html")


@app.route("/login")
def login():
    return render_template("login.html")


@app.route("/desktop")
def desktop():
    return render_template("desktop.html")


@app.route("/chat")
def chat():
    return render_template("chat.html")


@app.route("/about")
def about():
    return render_template("about.html")


@app.route("/settings")
def settings():
    return render_template("settings.html")


# -------------------------
# Demo Chat API
# -------------------------

@app.route("/ask", methods=["POST"])
def ask():

    data = request.get_json()
    user_message = data.get("message", "").lower().strip()

    if "hi" in user_message or "hello" in user_message:
        reply = "Hello! Welcome to ChatGPT 2006."

    elif "who are you" in user_message:
        reply = "I am ChatGPT 2006, an AI assistant designed with a Windows XP interface."

    elif "python" in user_message:
        reply = "Python is a powerful programming language used for AI, web development and automation."
    elif "java" in user_message:
      reply = "Java is a popular object-oriented programming language used for enterprise applications and Android development."

    elif "c++" in user_message:
      reply = "C++ is widely used for system programming, game development, and competitive programming."

    elif "artificial intelligence" in user_message or "ai" in user_message:
      reply = "Artificial Intelligence enables machines to learn, reason, and solve problems like humans."

    elif "machine learning" in user_message:
      reply = "Machine Learning is a branch of AI where systems learn patterns from data."

    elif "database" in user_message or "dbms" in user_message:
      reply = "DBMS is software that stores, organizes, and manages data efficiently."

    elif "sql" in user_message:
      reply = "SQL is the standard language used to manage and query relational databases."

    elif "flask" in user_message:
       reply = "Flask is a lightweight Python web framework used to build web applications and APIs."

    elif "docker" in user_message:
      reply = "Docker packages applications into containers, making deployment easy and consistent."

    elif "windows xp" in user_message:
      reply = "Windows XP was one of Microsoft's most popular operating systems, released in 2001."

    elif "chatgpt" in user_message:
      reply = "ChatGPT 2006 is a Windows XP inspired AI assistant built using HTML, CSS, JavaScript, and Flask."

    elif "developer" in user_message:
       reply = "This project was developed by Pooja Gour for the Project DNA Hackathon."

    elif "thank you" in user_message or "thanks" in user_message:
       reply = "You're welcome! Happy coding and best of luck with your hackathon."

    elif "bye" in user_message:
      reply = "Goodbye! Have a great day."

    else:
        reply = "Demo Mode: AI backend is temporarily unavailable. This response is generated locally for demonstration purposes."

    return jsonify({"reply": reply})


# -------------------------
# Error Pages
# -------------------------

@app.errorhandler(404)
def page_not_found(error):
    return "<h1>404 - File Not Found</h1>", 404


@app.errorhandler(500)
def internal_error(error):
    return "<h1>500 - Internal Server Error</h1>", 500


# -------------------------
# Run Application
# -------------------------

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)