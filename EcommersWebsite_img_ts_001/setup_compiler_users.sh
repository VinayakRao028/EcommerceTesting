#!/bin/bash

# Set up logging
exec 1> >(tee "installation_log.txt")
exec 2>&1

echo "Starting Python development environment installation script"
echo "Timestamp: $(date)"

# Function for error handling
handle_error() {
    local exit_code=$?
    local error_message="$1"
    echo "ERROR: $error_message"
    echo "Exit code: $exit_code"
    exit $exit_code
}

# Function to check command success
check_success() {
    if [ $? -ne 0 ]; then
        handle_error "$1"
    fi
}

# Create a cleanup function
cleanup() {
    echo "Performing cleanup..."
    rm -rf /tmp/python_install_* 2>/dev/null
}

# Register the cleanup function to run on script exit
trap cleanup EXIT

# Update package list
echo "Updating package list..."
sudo apt-get update
check_success "Failed to update package list"

# Install required system packages
echo "Installing system dependencies..."
sudo apt-get install -y \
    python3 \
    python3-pip \
    python3-venv \
    build-essential \
    python3-dev
check_success "Failed to install system packages"

# Verify Python installation
echo "Verifying Python installation..."
python3 --version
check_success "Python is not properly installed"

# Upgrade pip
echo "Upgrading pip..."
python3 -m pip install --upgrade pip
check_success "Failed to upgrade pip"

# Install basic Python development tools
echo "Installing Python development tools..."
python3 -m pip install \
    pytest \
    pylint \
    flake8 \
    black \
    mypy
check_success "Failed to install Python development tools"

# Verify installations
echo "Verifying tool installations..."
pytest --version
pylint --version
flake8 --version
black --version
mypy --version

# Create a summary of installed components
echo -e "\nInstallation Summary:"
echo "======================="
echo "Python Version: $(python3 --version)"
echo "Pip Version: $(pip3 --version)"
echo "Pytest Version: $(pytest --version)"
echo "Pylint Version: $(pylint --version)"
echo "Flake8 Version: $(flake8 --version)"
echo "Black Version: $(black --version)"
echo "Mypy Version: $(mypy --version)"

echo -e "\nInstallation completed successfully!"
echo "Timestamp: $(date)"