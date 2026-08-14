async function loadData() {
    try {
        const response = await axios.get("./data.json");
        const data = response.data;

        console.log("Loaded JSON:", data);

        const pre = document.createElement("pre");
        pre.textContent = JSON.stringify(data, null, 2);
        document.body.appendChild(pre);
    } catch (error) {
        console.error("Failed to load data.json:", error);
    }
}

loadData();
