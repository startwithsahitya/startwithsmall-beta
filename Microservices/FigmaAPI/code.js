figma.showUI(__html__, { width: 400, height: 300 });

// Node ID to database column mapping
const NODE_MAPPING = {
  "1:13": "case_code",
  "1:9": "companyname",
  "1:15": "generaldescription",
  "1:17": "jobdescription",
};

async function fetchData() {
  try {
    const response = await fetch("http://localhost:5000/get-data");

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    const result = await response.json();

    if (result.status !== "success") {
      throw new Error(result.message || "Server error");
    }

    return result.data;
  } catch (error) {
    figma.ui.postMessage({
      type: "error",
      text: `Connection Failed: ${error.message}`,
    });
    throw error;
  }
}

async function updateNodes() {
  figma.ui.postMessage({
    type: "loading",
    text: "Fetching data from database...",
  });

  try {
    const dbData = await fetchData();
    let successCount = 0;
    const errorDetails = [];

    for (const [nodeId, column] of Object.entries(NODE_MAPPING)) {
      const node = figma.getNodeById(nodeId);

      if (!node) {
        errorDetails.push(`${nodeId}: Node not found`);
        continue;
      }

      if (node.type !== "TEXT") {
        errorDetails.push(`${nodeId}: Not a text node`);
        continue;
      }

      const content = dbData[column] || `No ${column} found`;

      try {
        await figma.loadFontAsync(node.fontName);
        node.characters = content;
        successCount++;
      } catch (e) {
        errorDetails.push(`${nodeId}: Font load error - ${e.message}`);
      }
    }

    figma.ui.postMessage({
      type: "results",
      success: successCount,
      total: Object.keys(NODE_MAPPING).length,
      errors: errorDetails,
    });
  } catch (error) {
    figma.ui.postMessage({
      type: "error",
      text: error.message,
    });
  }
}

updateNodes();
