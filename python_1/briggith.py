import random

def ask_question(question, correct_answer):
    """
    Ask a question and make the player choose the opposite of their answer.
    """
    print(question)
    print("Choices:")
    print("1. Yes")
    print("2. No")
    
    player_choice = input("Choose 1 for Yes or 2 for No: ")
    
    # Validate the input to be 1 or 2
    while player_choice not in ["1", "2"]:
        player_choice = input("Invalid choice! Choose 1 for Yes or 2 for No: ")
    
    # Convert player choice to the actual response
    if player_choice == "1":
        player_answer = "Yes"
    else:
        player_answer = "No"
    
    # Determine if the player's answer is opposite to the correct one
    if player_answer == correct_answer:
        print(f"Oops! You were supposed to choose the opposite! Correct answer: {correct_answer}\n")
        return False
    else:
        print(f"Great job! You chose the opposite answer. Correct answer: {correct_answer}\n")
        return True

def main():
    print("Welcome to the 'Opposite Answer' game!")
    print("In this game, you must always choose the opposite of your true answer.\n")
    
    # List of questions and their correct answers (what they should have answered)
    questions = [
        ("Do you like ice cream?", "No"),
        ("Do you enjoy coding?", "No"),
        ("Is the sky blue?", "No"),
        ("Do you think Python is easy?", "No")
    ]
    
    score = 0
    random.shuffle(questions)  # Shuffle questions for randomness
    
    for question, correct_answer in questions:
        if ask_question(question, correct_answer):
            score += 1
    
    print(f"\nYour final score: {score}/{len(questions)}")
    print("Thanks for playing!")

if __name__ == "__main__":
    main()
