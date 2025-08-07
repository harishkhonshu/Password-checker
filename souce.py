import re

def check_password_strength(password):
    strength = 0
    remarks = ""

    if len(password) < 6:
        remarks = "Password too short. Use at least 6 characters."
    else:
        if re.search("[a-z]", password):
            strength += 1
        if re.search("[A-Z]", password):
            strength += 1
        if re.search("[0-9]", password):
            strength += 1
        if re.search("[!@#$%^&*(),.?\":{}|<>]", password):
            strength += 1

        if strength == 4:
            remarks = "Very Strong 💪"
        elif strength == 3:
            remarks = "Strong 👍"
        elif strength == 2:
            remarks = "Medium 😐"
        else:
            remarks = "Weak 😟"

    print(f"Password Strength: {remarks}")

if __name__ == "__main__":
    password = input("Enter your password to check its strength: ")
    check_password_strength(password)
