document.addEventListener("DOMContentLoaded", function () {
    const dropdownButton = document.getElementById("plugin-btn");
    const dropdownContent = document.getElementById("plugin-list");
    const pluginOptions = document.querySelectorAll(".plugin-option");
    const joinButton = document.getElementById("join-btn");
    const meetingInput = document.getElementById("meeting-id");

    // Try to get the selected plugin from localStorage, or default to "No Plugin"
    let selectedPlugin = localStorage.getItem("selectedPlugin") || "No Plugin";

    // Set the button text based on the selected plugin
    dropdownButton.textContent = `Selected: ${selectedPlugin}`;

    // Event listener for the dropdown button
    dropdownButton.addEventListener("click", function () {
        dropdownContent.classList.toggle("show");
    });

    // Event listener for each plugin option
    pluginOptions.forEach(option => {
        option.addEventListener("click", function () {
            selectedPlugin = this.dataset.plugin || "No Plugin";
            // Save the selected plugin to localStorage
            localStorage.setItem("selectedPlugin", selectedPlugin);
            dropdownButton.textContent = `Selected: ${selectedPlugin}`;
            dropdownContent.classList.remove("show");

            updateJoinButton();
        });
    });

    // Update the join button based on the meeting input and selected plugin
    meetingInput.addEventListener("input", updateJoinButton);

    function updateJoinButton() {
        if (meetingInput.value.trim()) {
            joinButton.textContent = selectedPlugin !== "No Plugin" 
                ? `Join with ${selectedPlugin}` 
                : "Join";
            joinButton.classList.add("enabled");
            joinButton.disabled = false;
        } else {
            joinButton.textContent = "Join";
            joinButton.classList.remove("enabled");
            joinButton.disabled = true;
        }
    }

    // Hide the dropdown if clicked outside
    document.addEventListener("click", function (e) {
        if (!dropdownButton.contains(e.target) && !dropdownContent.contains(e.target)) {
            dropdownContent.classList.remove("show");
        }
    });

    // Initialize the join button state when the page is loaded
    updateJoinButton();
});
