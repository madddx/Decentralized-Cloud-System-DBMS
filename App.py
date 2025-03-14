import streamlit as st
import mysql.connector

# Database Connection
def connect_db():
    return mysql.connector.connect(
        host="127.0.0.1",
        user="root",
        password="Maddy@1234",
        database="dbmsproject"
    )

# Register User
def register_user(username, password, email):
    conn = connect_db()
    cursor = conn.cursor()
    query = "INSERT INTO user (Name, password, email) VALUES (%s, %s, %s)"
    try:
        cursor.execute(query, (username, password, email))
        conn.commit()
        st.success("Registration successful! Please login.")
    except mysql.connector.Error as err:
        st.error(f"Error: {err}")
    finally:
        cursor.close()
        conn.close()

# Login User
def login_user(email, password):
    conn = connect_db()
    cursor = conn.cursor()
    query = "SELECT * FROM user WHERE Email=%s AND password=%s"
    cursor.execute(query, (email, password))
    user = cursor.fetchone()
    cursor.close()
    conn.close()
    return user

# Initialize session state
if "mode" not in st.session_state:
    st.session_state.mode = "Login"

# Streamlit UI
st.title("User Authentication")

# Toggle between Login and Register
col1, col2 = st.columns(2)
with col1:
    if st.button("Sign In"):
        st.session_state.mode = "Login"
with col2:
    if st.button("Sign Up"):
        st.session_state.mode = "Register"

st.write("---")

if st.session_state.mode == "Register":
    st.subheader("Create New Account")
    new_user = st.text_input("Username")
    new_email = st.text_input("Email")
    new_password = st.text_input("Password", type="password")
    
    if st.button("Register"):
        if new_user and new_password and new_email:
            register_user(new_user, new_password, new_email)
        else:
            st.warning("Please fill all fields.")

elif st.session_state.mode == "Login":
    st.subheader("Login to Your Account")
    username = st.text_input("Email")
    password = st.text_input("Password", type="password")
    
    if st.button("Login"):
        user = login_user(username, password)
        if user:
            st.success("Welcome!")
        else:
            st.error("Invalid Email or Password")
