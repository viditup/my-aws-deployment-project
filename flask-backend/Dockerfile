# Use Python base image
FROM python:3.9-slim

# Set working directory
WORKDIR /app

# Copy and install dependencies
COPY requirements.txt .
RUN pip install -r requirements.txt

# Copy the rest of the app
COPY . .

# Flask runs on port 5000
EXPOSE 5000

# Start Flask app
CMD ["python", "app.py"]
