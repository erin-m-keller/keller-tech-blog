-- Drop the database if it exists
DROP DATABASE IF EXISTS techblog_db;

-- Create the database
CREATE DATABASE techblog_db;

-- Use the database
USE techblog_db;

-- Create the user table
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  user_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);

-- Create the post table
CREATE TABLE post (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  post_title VARCHAR(255) NOT NULL,
  post_content TEXT NOT NULL,
  post_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  user_id INTEGER NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Create the comment table
CREATE TABLE comment (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  comment_content TEXT NOT NULL,
  comment_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  user_id INTEGER NOT NULL,
  post_id INTEGER NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (post_id) REFERENCES post(id) ON DELETE CASCADE
);