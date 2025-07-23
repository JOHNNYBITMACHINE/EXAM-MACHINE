import shutil
import os

# Set your source and destination paths
destination_folder = r"f:/BLOG"
source_folder = r"f:/EXAM MACHINE"  # Change this to your target folder

source_file = os.path.join(source_folder, "index.html")
destination_file = os.path.join(destination_folder, "index.html")

# Make sure the destination folder exists
os.makedirs(destination_folder, exist_ok=True)

# Copy the file
shutil.copy2(source_file, destination_file)

print(f"Copied {source_file} to {destination_file}")





source_folder = r"f:/BLOG"
destination_folder = r"f:/EXAM MACHINE"  # Change this to your target folder

source_file = os.path.join(source_folder, "style.css")
destination_file = os.path.join(destination_folder, "style.css")

# Make sure the destination folder exists
os.makedirs(destination_folder, exist_ok=True)

# Copy the file
shutil.copy2(source_file, destination_file)

print(f"Copied {source_file} to {destination_file}")



source_folder = r"f:/BLOG"
destination_folder = r"f:/EXAM MACHINE"  # Change this to your target folder

source_file = os.path.join(source_folder, "main.js")
destination_file = os.path.join(destination_folder, "main.js")

# Make sure the destination folder exists
os.makedirs(destination_folder, exist_ok=True)

# Copy the file
shutil.copy2(source_file, destination_file)

print(f"Copied {source_file} to {destination_file}")